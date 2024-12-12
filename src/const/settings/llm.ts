import { ModelProvider } from '@/libs/agent-runtime';

import { genUserLLMConfig } from '@/utils/genUserLLMConfig'

export const DEFAULT_LLM_CONFIG = genUserLLMConfig({
  qwen: {
    enabled: true,
  },
});

export const DEFAULT_MODEL = 'qwen-max-latest';
export const DEFAULT_EMBEDDING_MODEL = 'text-embedding-v3';

export const DEFAULT_PROVIDER = ModelProvider.Qwen;