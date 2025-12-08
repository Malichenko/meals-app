/**
 * Type definition for the entries of an object.
 *
 * The `Entries` type takes a generic type `T` and maps each key of `T` to a tuple of `[key, value]`.
 * It then constructs an array of these tuples. This type definition helps in maintaining type safety
 * and ensures that the entries returned by `objectEntries` correctly reflect the keys and values of
 * the original object.
 *
 * @template T - The type of the object whose entries are being retrieved.
 */
export type Entries<T> = {
  [K in keyof T]-?: [K, T[K]]; // Add -? to remove optionality
}[keyof T][];
