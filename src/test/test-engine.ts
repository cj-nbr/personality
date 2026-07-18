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
  const scores: DimensionScores = { EI: 0, SN: 0, TF: 0, JP: 0 };
  
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

  const code = `${e}${s}${t}${j}`;
  
  const codeToName: Record<string, string> = {
    'INTJ': 'The Architect',
    'INTP': 'The Logician',
    'ENTJ': 'The Commander',
    'ENTP': 'The Debater',
    'INFJ': 'The Advocate',
    'INFP': 'The Mediator',
    'ENFJ': 'The Protagonist',
    'ENFP': 'The Campaigner',
    'ISTJ': 'The Logistician',
    'ISFJ': 'The Defender',
    'ESTJ': 'The Executive',
    'ESFJ': 'The Consul',
    'ISTP': 'The Virtuoso',
    'ISFP': 'The Adventurer',
    'ESTP': 'The Entrepreneur',
    'ESFP': 'The Entertainer',
    'XXXX': 'The Balanced Individual'
  };

  return { code, name: codeToName[code] || 'The Balanced Individual' };
}

export function calculateConfidence(scores: DimensionScores): number {
  const dimensions = [scores.EI, scores.SN, scores.TF, scores.JP];
  const avg = dimensions.reduce((sum, score) => sum + Math.abs(score), 0) / dimensions.length;
  return Math.min(Math.round((avg / 24) * 100), 99);
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
  return 48;
}

export function getEstimatedTimeRemaining(current: number, total: number, startTime: number | null): string {
  if (!startTime) return '5 min';
  
  const elapsed = Date.now() - startTime;
  const avgTimePerQuestion = elapsed / current;
  const remaining = total - current;
  const remainingSeconds = Math.ceil((remaining * avgTimePerQuestion) / 1000);
  
  if (remainingSeconds < 60) return `${remainingSeconds} sec`;
  if (remainingSeconds < 120) return '1 min';
  return `${Math.ceil(remainingSeconds / 60)} min`;
}
