/* tslint:disable */
/* eslint-disable */
/**
* Type used on the JS side to convert screen coordinates to chart
* coordinates.
*/
export class Chart {
  free(): void;
/**
* @param {string} canvas_id
* @param {string} raw_tides
* @param {boolean} draw_cw
* @returns {Chart}
*/
  static tides(canvas_id: string, raw_tides: string, draw_cw: boolean): Chart;
/**
* This function can be used to convert screen coordinates to
* chart coordinates.
* @param {number} x
* @param {number} y
* @returns {Point | undefined}
*/
  coord(x: number, y: number): Point | undefined;
}
/**
* Result of screen to chart coordinates conversion.
*/
export class Point {
  free(): void;
/**
*/
  x: number;
/**
*/
  y: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_chart_free: (a: number) => void;
  readonly __wbg_point_free: (a: number) => void;
  readonly __wbg_get_point_x: (a: number) => number;
  readonly __wbg_set_point_x: (a: number, b: number) => void;
  readonly __wbg_get_point_y: (a: number) => number;
  readonly __wbg_set_point_y: (a: number, b: number) => void;
  readonly chart_tides: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly chart_coord: (a: number, b: number, c: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
