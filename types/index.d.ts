/**
 * A database transaction
 */
export type Transaction = Array<object>;
export type Schema = object;
/**
 * Homebase configuration.
 */
export type config = {schema?: Schema, initialData?: Transaction };
export type Entity = {
  get: (...params:string[]) => any;
}
/**
 * Facts are richer key-value pairs that represent your data.
 */
export type Datom = [number, string, string | number | object | Array<any>, number, boolean];
/**
 * the homebaseClient object allows you to interact with the backend database
 */
export type homebaseClient = {
  /**
   * Serializes the whole db including the schema to a string
   */
  dbToString: () => string,
  /**
   * Replaces the current db with one generated by the `dbstring`
   * @param dbstring a serialized db string
   */
  dbFromString: (dbString: string) => any,
  /**
   * returns an array of `datoms` saved in the db.
   * `datoms` are the smallest unit of data in the database and similar to a key-value pair
     they are arrays of `[entityId, attribute, value, transactionId, isAddedBoolean]`
   */
  dbToDatoms: () => Datom[],
  /**
   * Adds a listener function to the given transactions so you can save data to your backend
   * @param listener - a function to call to save data on transact
   */
  addTransactListener: (listener: () => any) => any,
  /**
   * Remove transaction listener. Particularly useful since only 1 listener can be added per `useClient` scope.
   */
  removeTransactListener: () => any,
  /**
   * Use this to sync data from your backend into the client
   */
  transactSilently: (transaction: Transaction) => any
}

/**
 * React provider for Homebase. You must wrap Homebase applications in HomebaseProvider.
 * @param props.config an object with optional schema and initialData parameters.
 * @param props.children children elements
 */
export function HomebaseProvider(props: {config?:config, children:any}): any;
/**
 * React hook to transact data to the database
 */
export function useTransact(): [(transaction:Transaction) => any];
/**
 * React hook to return a single entity by `lookup`
 * @param lookup query or id to lookup an entity
 */
export function useEntity(lookup: object | number): [Entity];
/**
 *
 * @param query query object or datalog string
 * @param args any additional query arguments
 */
export function useQuery(query: object | string, ...args: any): [Array<Entity>];
export function useClient(): homebaseClient;
