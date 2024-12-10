// Estados de la peticion
// - LOADING
// - SUCCESS
// - ERROR

export abstract class Resource {
    constructor() {}
}
export function Loading(): Resource { return {}; }
export function Success(data: any): Resource { return { data }; }
export function Err(error: string | any): Resource { return { error}; }
export function Init(): Resource { return {}; }
