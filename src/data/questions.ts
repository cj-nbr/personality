export interface Question {
  id: number;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  text: string;
  optionA: { text: string; value: number };
  optionB: { text: string; value: number };
}

export const questions: Question[] = [
  {
    id: 1,
    dimension: 'EI',
    text: 'After a busy week, how do you prefer to recharge?',
    optionA: { text: 'By spending time with friends or at a social event', value: 2 },
    optionB: { text: 'By enjoying quiet time alone or with a close companion', value: -2 }
  },
  {
    id: 2,
    dimension: 'EI',
    text: 'In group discussions, you tend to:',
    optionA: { text: 'Speak up frequently and think out loud', value: 2 },
    optionB: { text: 'Listen carefully and speak when you have a strong point', value: -2 }
  },
  {
    id: 3,
    dimension: 'EI',
    text: 'When learning something new, you prefer:',
    optionA: { text: 'Discussing it with others and bouncing ideas around', value: 2 },
    optionB: { text: 'Reading about it and thinking it through privately', value: -2 }
  },
  {
    id: 4,
    dimension: 'EI',
    text: 'At a party, you usually:',
    optionA: { text: 'Meet lots of new people and circulate widely', value: 2 },
    optionB: { text: 'Stick with a few people you know well', value: -2 }
  },
  {
    id: 5,
    dimension: 'EI',
    text: 'You feel most energized when:',
    optionA: { text: 'You are collaborating with a team on an exciting project', value: 2 },
    optionB: { text: 'You have time to think deeply and work independently', value: -2 }
  },
  {
    id: 6,
    dimension: 'EI',
    text: 'When making decisions, you prefer to:',
    optionA: { text: 'Talk through options with others first', value: 2 },
    optionB: { text: 'Reflect privately before sharing your conclusion', value: -2 }
  },
  {
    id: 7,
    dimension: 'EI',
    text: 'Your ideal weekend involves:',
    optionA: { text: 'Social activities, gatherings, or group outings', value: 2 },
    optionB: { text: 'Solo hobbies, reading, or quiet relaxation', value: -2 }
  },
  {
    id: 8,
    dimension: 'EI',
    text: 'In meetings, you tend to be:',
    optionA: { text: 'One of the first to share your thoughts', value: 2 },
    optionB: { text: 'Someone who prefers to observe before contributing', value: -2 }
  },
  {
    id: 9,
    dimension: 'EI',
    text: 'You would rather work:',
    optionA: { text: 'In an open, collaborative office environment', value: 2 },
    optionB: { text: 'In a private space where you can focus without interruption', value: -2 }
  },
  {
    id: 10,
    dimension: 'EI',
    text: 'When you have a problem, you typically:',
    optionA: { text: 'Talk it through with friends or colleagues right away', value: 2 },
    optionB: { text: 'Think it through on your own before discussing it', value: -2 }
  },
  {
    id: 11,
    dimension: 'EI',
    text: 'You find it easier to:',
    optionA: { text: 'Express yourself verbally in the moment', value: 2 },
    optionB: { text: 'Express yourself through writing or creative outlets', value: -2 }
  },
  {
    id: 12,
    dimension: 'EI',
    text: 'Your energy feels most sustained when you:',
    optionA: { text: 'Are around people and engaging with the outside world', value: 2 },
    optionB: { text: 'Have time for introspection and inner reflection', value: -2 }
  },
  {
    id: 13,
    dimension: 'SN',
    text: 'When solving problems, you focus more on:',
    optionA: { text: 'Proven facts, data, and past experiences', value: 2 },
    optionB: { text: 'Patterns, possibilities, and future implications', value: -2 }
  },
  {
    id: 14,
    dimension: 'SN',
    text: 'You are more drawn to:',
    optionA: { text: 'Practical, concrete information and details', value: 2 },
    optionB: { text: 'Abstract theories, ideas, and big-picture concepts', value: -2 }
  },
  {
    id: 15,
    dimension: 'SN',
    text: 'In conversations, you prefer discussing:',
    optionA: { text: 'Real-world events, facts, and tangible experiences', value: 2 },
    optionB: { text: 'Ideas, theories, and hypothetical possibilities', value: -2 }
  },
  {
    id: 16,
    dimension: 'SN',
    text: 'When giving directions, you typically:',
    optionA: { text: 'List step-by-step landmarks and turns', value: 2 },
    optionB: { text: 'Describe general directions and let people navigate', value: -2 }
  },
  {
    id: 17,
    dimension: 'SN',
    text: 'You trust more:',
    optionA: { text: 'Your past experiences and established methods', value: 2 },
    optionB: { text: 'Your intuition and gut feelings about what could be', value: -2 }
  },
  {
    id: 18,
    dimension: 'SN',
    text: 'When reading, you prefer:',
    optionA: { text: 'Non-fiction, history, or practical guides', value: 2 },
    optionB: { text: 'Fiction, philosophy, or imaginative stories', value: -2 }
  },
  {
    id: 19,
    dimension: 'SN',
    text: 'You are more interested in:',
    optionA: { text: 'What is real and verifiable right now', value: 2 },
    optionB: { text: 'What could be imagined or invented in the future', value: -2 }
  },
  {
    id: 20,
    dimension: 'SN',
    text: 'In a debate, you rely more on:',
    optionA: { text: 'Concrete evidence and specific examples', value: 2 },
    optionB: { text: 'Logical inference and theoretical reasoning', value: -2 }
  },
  {
    id: 21,
    dimension: 'SN',
    text: 'You prefer tasks that involve:',
    optionA: { text: 'Clear instructions and defined steps', value: 2 },
    optionB: { text: 'Creative interpretation and open-ended exploration', value: -2 }
  },
  {
    id: 22,
    dimension: 'SN',
    text: 'When someone tells a story, you focus on:',
    optionA: { text: 'The literal facts and sequence of events', value: 2 },
    optionB: { text: 'The underlying meaning, metaphor, or lesson', value: -2 }
  },
  {
    id: 23,
    dimension: 'SN',
    text: 'You feel more comfortable with:',
    optionA: { text: 'The present reality and practical demands', value: 2 },
    optionB: { text: 'Future possibilities and hypothetical scenarios', value: -2 }
  },
  {
    id: 24,
    dimension: 'TF',
    text: 'When making a difficult choice, you prioritize:',
    optionA: { text: 'Objective facts, logic, and consistency', value: 2 },
    optionB: { text: 'How the decision affects people\'s feelings and relationships', value: -2 }
  },
  {
    id: 25,
    dimension: 'TF',
    text: 'In a disagreement, you prefer to:',
    optionA: { text: 'Focus on who is logically correct', value: 2 },
    optionB: { text: 'Find a compromise that preserves harmony', value: -2 }
  },
  {
    id: 26,
    dimension: 'TF',
    text: 'You value being:',
    optionA: { text: 'Fair and impartial, even if it hurts feelings', value: 2 },
    optionB: { text: 'Kind and compassionate, even if it bends rules', value: -2 }
  },
  {
    id: 27,
    dimension: 'TF',
    text: 'When giving feedback, you tend to:',
    optionA: { text: 'Be direct and focus on what needs improvement', value: 2 },
    optionB: { text: 'Be gentle and emphasize what was done well first', value: -2 }
  },
  {
    id: 28,
    dimension: 'TF',
    text: 'You admire people who are:',
    optionA: { text: 'Competent, logical, and clear-headed', value: 2 },
    optionB: { text: 'Caring, empathetic, and warm-hearted', value: -2 }
  },
  {
    id: 29,
    dimension: 'TF',
    text: 'When a friend is upset, your first instinct is to:',
    optionA: { text: 'Help them analyze the problem and find solutions', value: 2 },
    optionB: { text: 'Listen and validate their feelings', value: -2 }
  },
  {
    id: 30,
    dimension: 'TF',
    text: 'In team decisions, you prioritize:',
    optionA: { text: 'The most efficient and logical outcome', value: 2 },
    optionB: { text: 'The outcome that benefits the most people', value: -2 }
  },
  {
    id: 31,
    dimension: 'TF',
    text: 'You believe rules should be:',
    optionA: { text: 'Applied consistently to everyone regardless of circumstances', value: 2 },
    optionB: { text: 'Adjusted based on individual situations and needs', value: -2 }
  },
  {
    id: 32,
    dimension: 'TF',
    text: 'When evaluating an argument, you focus more on:',
    optionA: { text: 'Whether the reasoning is sound', value: 2 },
    optionB: { text: 'Whether the conclusion feels right for the people involved', value: -2 }
  },
  {
    id: 33,
    dimension: 'TF',
    text: 'You feel more conflicted when:',
    optionA: { text: 'You have to choose between two logically sound options', value: 2 },
    optionB: { text: 'You have to make a choice that might hurt someone', value: -2 }
  },
  {
    id: 34,
    dimension: 'TF',
    text: 'In a leadership role, you emphasize:',
    optionA: { text: 'Clear standards, accountability, and results', value: 2 },
    optionB: { text: 'Team morale, individual support, and collaboration', value: -2 }
  },
  {
    id: 35,
    dimension: 'JP',
    text: 'When planning a trip, you prefer to:',
    optionA: { text: 'Have a detailed itinerary with scheduled activities', value: 2 },
    optionB: { text: 'Keep it flexible and decide things as you go', value: -2 }
  },
  {
    id: 36,
    dimension: 'JP',
    text: 'Your workspace tends to be:',
    optionA: { text: 'Organized, with everything in its place', value: 2 },
    optionB: { text: 'Somewhat messy but functional for your current needs', value: -2 }
  },
  {
    id: 37,
    dimension: 'JP',
    text: 'When deadlines approach, you usually:',
    optionA: { text: 'Finish early and review your work', value: 2 },
    optionB: { text: 'Work intensely right up to the deadline', value: -2 }
  },
  {
    id: 38,
    dimension: 'JP',
    text: 'You feel most comfortable when:',
    optionA: { text: 'You have a clear plan and know what to expect', value: 2 },
    optionB: { text: 'You have options and can adapt to new information', value: -2 }
  },
  {
    id: 39,
    dimension: 'JP',
    text: 'When making decisions, you:',
    optionA: { text: 'Prefer to decide quickly and move forward', value: 2 },
    optionB: { text: 'Prefer to keep options open as long as possible', value: -2 }
  },
  {
    id: 40,
    dimension: 'JP',
    text: 'You handle unexpected changes by:',
    optionA: { text: 'Feeling stressed and needing to adjust your plan', value: 2 },
    optionB: { text: 'Adapting easily and seeing it as an opportunity', value: -2 }
  },
  {
    id: 41,
    dimension: 'JP',
    text: 'Your approach to chores and errands is:',
    optionA: { text: 'Tackle them immediately and check them off a list', value: 2 },
    optionB: { text: 'Do them when you feel like it or when necessary', value: -2 }
  },
  {
    id: 42,
    dimension: 'JP',
    text: 'In relationships, you value:',
    optionA: { text: 'Consistency, reliability, and clear expectations', value: 2 },
    optionB: { text: 'Spontaneity, variety, and keeping things fresh', value: -2 }
  },
  {
    id: 43,
    dimension: 'JP',
    text: 'You prefer projects that have:',
    optionA: { text: 'Clear milestones and a defined endpoint', value: 2 },
    optionB: { text: 'Open-ended goals and room for improvisation', value: -2 }
  },
  {
    id: 44,
    dimension: 'JP',
    text: 'When shopping, you tend to:',
    optionA: { text: 'Make lists and stick to them', value: 2 },
    optionB: { text: 'Browse spontaneously and buy what catches your eye', value: -2 }
  },
  {
    id: 45,
    dimension: 'JP',
    text: 'You feel best about your day when:',
    optionA: { text: 'You completed everything you planned to do', value: 2 },
    optionB: { text: 'You had interesting experiences, even if plans changed', value: -2 }
  },
  {
    id: 46,
    dimension: 'JP',
    text: 'When someone is late, you:',
    optionA: { text: 'Feel frustrated because it disrupts your schedule', value: 2 },
    optionB: { text: 'Don\'t mind much and use the time for something else', value: -2 }
  },
  {
    id: 47,
    dimension: 'JP',
    text: 'You prefer working with:',
    optionA: { text: 'Fixed deadlines and clear deliverables', value: 2 },
    optionB: { text: 'Flexible timelines that allow for exploration', value: -2 }
  },
  {
    id: 48,
    dimension: 'JP',
    text: 'Your ideal morning routine is:',
    optionA: { text: 'Structured and consistent, with the same steps each day', value: 2 },
    optionB: { text: 'Flexible and varies depending on your mood or needs', value: -2 }
  },
  {
    id: 49,
    dimension: 'AT',
    text: 'You generally feel confident about your decisions even when others doubt you.',
    optionA: { text: 'Strongly Agree', value: 2 },
    optionB: { text: 'Strongly Disagree', value: -2 }
  },
  {
    id: 50,
    dimension: 'AT',
    text: 'You rarely worry about what other people think of you.',
    optionA: { text: 'Strongly Agree', value: 2 },
    optionB: { text: 'Strongly Disagree', value: -2 }
  },
  {
    id: 51,
    dimension: 'AT',
    text: 'You tend to be perfectionistic and push yourself very hard.',
    optionA: { text: 'Strongly Agree', value: -2 },
    optionB: { text: 'Strongly Disagree', value: 2 }
  },
  {
    id: 52,
    dimension: 'AT',
    text: 'Stressful situations rarely affect your mood for long.',
    optionA: { text: 'Strongly Agree', value: 2 },
    optionB: { text: 'Strongly Disagree', value: -2 }
  },
  {
    id: 53,
    dimension: 'AT',
    text: 'You are comfortable being the center of attention.',
    optionA: { text: 'Strongly Agree', value: 2 },
    optionB: { text: 'Strongly Disagree', value: -2 }
  },
  {
    id: 54,
    dimension: 'AT',
    text: 'You often compare yourself to others and feel you fall short.',
    optionA: { text: 'Strongly Agree', value: -2 },
    optionB: { text: 'Strongly Disagree', value: 2 }
  },
  {
    id: 55,
    dimension: 'AT',
    text: 'You recover quickly from setbacks and failures.',
    optionA: { text: 'Strongly Agree', value: 2 },
    optionB: { text: 'Strongly Disagree', value: -2 }
  },
  {
    id: 56,
    dimension: 'AT',
    text: 'You are very self-conscious about your appearance.',
    optionA: { text: 'Strongly Agree', value: -2 },
    optionB: { text: 'Strongly Disagree', value: 2 }
  },
  {
    id: 57,
    dimension: 'AT',
    text: 'You feel little anxiety about things that might go wrong.',
    optionA: { text: 'Strongly Agree', value: 2 },
    optionB: { text: 'Strongly Disagree', value: -2 }
  },
  {
    id: 58,
    dimension: 'AT',
    text: 'You often doubt your own abilities even when you are capable.',
    optionA: { text: 'Strongly Agree', value: -2 },
    optionB: { text: 'Strongly Disagree', value: 2 }
  },
  {
    id: 59,
    dimension: 'AT',
    text: 'You are comfortable taking risks and trying new things.',
    optionA: { text: 'Strongly Agree', value: 2 },
    optionB: { text: 'Strongly Disagree', value: -2 }
  },
  {
    id: 60,
    dimension: 'AT',
    text: 'You feel driven to prove yourself to others.',
    optionA: { text: 'Strongly Agree', value: -2 },
    optionB: { text: 'Strongly Disagree', value: 2 }
  }
];

export function getTotalQuestions(): number {
  return questions.length;
}

export function getQuestionsByDimension(dimension: string): Question[] {
  return questions.filter(q => q.dimension === dimension);
}
