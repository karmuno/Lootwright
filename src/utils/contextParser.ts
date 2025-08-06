import { ContextRules } from '../types/index.ts';
import * as contextRulesData from '../data/contextRules.json';

const contextRules: ContextRules = contextRulesData;

export function classifyContext(context: string) {
  const lowerCaseContext = context.toLowerCase();
  for (const type in contextRules.contextTypes) {
    if (contextRules.contextTypes[type].keywords.some(keyword => lowerCaseContext.includes(keyword))) {
      return type;
    }
  }
  return 'generic';
}