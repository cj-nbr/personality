export interface Question {
  id: number;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  text: string;
  optionA: { text: string; value: number };
  optionB: { text: string; value: number };
}

export interface DimensionScores {
  EI: number;
  SN: number;
  TF: number;
  JP: number;
  AT: number;
}

export interface TestResult {
  code: string;
  name: string;
  scores: DimensionScores;
  confidence: number;
  balancedDimensions: string[];
}

export interface TestState {
  currentQuestion: number;
  answers: Record<number, number>;
  startTime: number | null;
  completed: boolean;
}

const STORAGE_KEY = 'personality_test_state';

export function calculateResult(state: TestState, questions: Question[]): TestResult {
  const scores: DimensionScores = { EI: 0, SN: 0, TF: 0, JP: 0, AT: 0 };
  
  questions.forEach(q => {
    const answer = state.answers[q.id];
    if (answer !== undefined) {
      scores[q.dimension] += answer;
    }
  });

  const result = getTypeFromScores(scores);
  const balancedDimensions: string[] = [];
  
  if (Math.abs(scores.EI) < 12) balancedDimensions.push('EI');
  if (Math.abs(scores.SN) < 12) balancedDimensions.push('SN');
  if (Math.abs(scores.TF) < 12) balancedDimensions.push('TF');
  if (Math.abs(scores.JP) < 12) balancedDimensions.push('JP');
  if (Math.abs(scores.AT) < 12) balancedDimensions.push('AT');

  return {
    ...result,
    scores,
    balancedDimensions
  };
}

export function getTypeFromScores(scores: DimensionScores): { code: string; name: string } {
  const e = scores.EI >= 12 ? 'E' : scores.EI <= -12 ? 'I' : 'X';
  const s = scores.SN >= 12 ? 'S' : scores.SN <= -12 ? 'N' : 'X';
  const t = scores.TF >= 12 ? 'T' : scores.TF <= -12 ? 'F' : 'X';
  const j = scores.JP >= 12 ? 'J' : scores.JP <= -12 ? 'P' : 'X';
  const a = scores.AT >= 12 ? 'A' : scores.AT <= -12 ? 'T' : 'X';

  const code = `${e}${s}${t}${j}-${a}`;
  
  const codeToName: Record<string, string> = {
    'INTJ-A': 'The Architect (Assertive)',
    'INTJ-T': 'The Architect (Turbulent)',
    'INTP-A': 'The Logician (Assertive)',
    'INTP-T': 'The Logician (Turbulent)',
    'ENTJ-A': 'The Commander (Assertive)',
    'ENTJ-T': 'The Commander (Turbulent)',
    'ENTP-A': 'The Debater (Assertive)',
    'ENTP-T': 'The Debater (Turbulent)',
    'INFJ-A': 'The Advocate (Assertive)',
    'INFJ-T': 'The Advocate (Turbulent)',
    'INFP-A': 'The Mediator (Assertive)',
    'INFP-T': 'The Mediator (Turbulent)',
    'ENFJ-A': 'The Protagonist (Assertive)',
    'ENFJ-T': 'The Protagonist (Turbulent)',
    'ENFP-A': 'The Campaigner (Assertive)',
    'ENFP-T': 'The Campaigner (Turbulent)',
    'ISTJ-A': 'The Logistician (Assertive)',
    'ISTJ-T': 'The Logistician (Turbulent)',
    'ISFJ-A': 'The Defender (Assertive)',
    'ISFJ-T': 'The Defender (Turbulent)',
    'ESTJ-A': 'The Executive (Assertive)',
    'ESTJ-T': 'The Executive (Turbulent)',
    'ESFJ-A': 'The Consul (Assertive)',
    'ESFJ-T': 'The Consul (Turbulent)',
    'ISTP-A': 'The Virtuoso (Assertive)',
    'ISTP-T': 'The Virtuoso (Turbulent)',
    'ISFP-A': 'The Adventurer (Assertive)',
    'ISFP-T': 'The Adventurer (Turbulent)',
    'ESTP-A': 'The Entrepreneur (Assertive)',
    'ESTP-T': 'The Entrepreneur (Turbulent)',
    'ESFP-A': 'The Entertainer (Assertive)',
    'ESFP-T': 'The Entertainer (Turbulent)',
    'XXXX-X': 'The Balanced Individual'
  };

  return { code, name: codeToName[code] || 'The Balanced Individual' };
}

export function calculateConfidence(scores: DimensionScores): number {
  const dimensions = [scores.EI, scores.SN, scores.TF, scores.JP, scores.AT];
  const avg = dimensions.reduce((sum, score) => sum + Math.abs(score), 0) / dimensions.length;
  return Math.min(Math.round((avg / 30) * 100), 99);
}

export function saveProgress(state: TestState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save progress:', e);
  }
}

export function loadProgress(): TestState | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as TestState;
    }
  } catch (e) {
    console.error('Failed to load progress:', e);
  }
  return null;
}

export function clearProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear progress:', e);
  }
}

export function getInitialState(): TestState {
  return {
    currentQuestion: 1,
    answers: {},
    startTime: null,
    completed: false
  };
}

export function getTotalQuestions(): number {
  return 60;
}

export function getEstimatedTimeRemaining(current: number, total: number, startTime: number | null): string {
  if (!startTime) return '12 min';
  
  const elapsed = Date.now() - startTime;
  const avgTimePerQuestion = elapsed / current;
  const remaining = total - current;
  const remainingSeconds = Math.ceil((remaining * avgTimePerQuestion) / 1000);
  
  if (remainingSeconds < 60) return `${remainingSeconds} sec`;
  if (remainingSeconds < 120) return '1 min';
  return `${Math.ceil(remainingSeconds / 60)} min`;
}
