// import { ModelProvider } from '@/libs/agent-runtime';
// import { modelConfigSelectors } from '@/store/user/selectors';

import { genUserLLMConfig } from '@/utils/genUserLLMConfig'

export const DEFAULT_LLM_CONFIG = genUserLLMConfig({
  qwen: {
    enabled: true,
  },
});

// export const DEFAULT_MODEL = 'qwen-max-latest';
// export const DEFAULT_EMBEDDING_MODEL = 'text-embedding-v3';

// export const DEFAULT_PROVIDER = ModelProvider.Qwen;

let embeddingModelType = 'text-embedding-v3';
let defaultModelType = 'qwen-max-latest';
let defaultModelProvider = 'qwen';
try {
  if (process.env.PROVIDER === 'qwen'){
    embeddingModelType = 'text-embedding-v3';
    defaultModelType = 'qwen-max-latest';
    defaultModelProvider = 'qwen';
  }else if (process.env.PROVIDER === 'openai'){
    embeddingModelType = 'text-embedding-3-small';
    defaultModelType = 'gpt-4o-mini';
    defaultModelProvider = 'openai';
  }
}catch(err){
  console.error('❌ Provider type is nor supported:', err);
}

export const DEFAULT_EMBEDDING_MODEL = embeddingModelType;
export const DEFAULT_MODEL = defaultModelType;
export const DEFAULT_PROVIDER = defaultModelProvider;