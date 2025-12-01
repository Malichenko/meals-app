import type { Entries } from './object-entries.types'

/**
 * Utility function that returns the entries of an object with proper type inference.
 *
 * `objectEntries` is a strongly-typed wrapper around `Object.entries`. It takes an object `obj`
 * of type `T` and returns an array of key-value pairs (tuples) where each key is a key of `T` and
 * each value is the corresponding value from `T`. The return type is inferred based on the type
 * of the input object, providing better type safety and autocompletion in TypeScript.
 *
 * @template T - The type of the input object.
 * @param {T} obj - The object whose entries are to be retrieved.
 * @returns {Entries<T>} - An array of key-value pairs (tuples) representing the entries of the object.
 *
 * @example
 * const user = { id: 1, name: 'John', age: 30 }
 * const entries = objectEntries(user)
 * // entries is of type ['id', number] | ['name', string] | ['age', number][]
 *
 * @note
 * This function uses type assertions to cast the result of `Object.entries` to `Entries<T>`.
 * While this is generally safe for typical objects, it may not be suitable for objects with
 * complex prototype chains or non-enumerable properties.
 */
export function objectEntries<T extends { [key: string]: unknown }>(obj: T): Entries<T> {
    return Object.entries(obj) as Entries<T>
}
