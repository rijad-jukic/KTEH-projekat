/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DOG_API_KEY?: string
  readonly VITE_CAT_API_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
