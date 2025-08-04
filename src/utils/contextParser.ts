import contextRulesData from '../data/contextRules.json';
import { ContextRules } from '../types';

const contextRules: ContextRules = contextRulesData;

export function classifyContext(contextString: string): string {
  const lowerCaseContext = contextString.toLowerCase();

  for (const type in contextRules.contextTypes) {
    if (type === 'generic') continue; // Skip generic for specific matching
    const keywords = contextRules.contextTypes[type].keywords;
    if (keywords.some(keyword => lowerCaseContext.includes(keyword.toLowerCase()))) {
      return type;
    }
  }
  return 'generic';
}
