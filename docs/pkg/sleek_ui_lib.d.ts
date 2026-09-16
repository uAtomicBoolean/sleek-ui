/* tslint:disable */
/* eslint-disable */

export function main(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly main: () => void;
    readonly wasm_bindgen__convert__closures_____invoke__h9422eaf7acb520a9: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen__convert__closures_____invoke__hef6c2db803679121: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h0398934a1a9fdbdb: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h0398934a1a9fdbdb_12: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h0398934a1a9fdbdb_13: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h0398934a1a9fdbdb_14: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h0398934a1a9fdbdb_16: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h0398934a1a9fdbdb_4: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h0398934a1a9fdbdb_7: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h0398934a1a9fdbdb_9: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h37e588a8c1ac94b4: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h37e588a8c1ac94b4_10: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h37e588a8c1ac94b4_11: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h37e588a8c1ac94b4_15: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h37e588a8c1ac94b4_6: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h37e588a8c1ac94b4_8: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hb93a506091da2d80: (a: number, b: number, c: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h1161ce032f23deab: (a: number, b: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hd042dfea9f44b3da: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
