/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_RESAS_API_KEY: string;
    readonly VITE_RESAS_API_ENDPOINT: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
