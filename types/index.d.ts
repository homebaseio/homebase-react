export type Transaction = Array<object>;
export type Schema = object;
export type config = {schema?: Schema, initialData?: Transaction };
export type Entity = {
  get: (...params:string[]) => any;
}
export type Datom = [number, string, string | number | object | Array<any>, number, boolean];
export type homebaseClient = {
  dbToString: () => string,
  dbFromString: (dbString: string) => void,
  dbToDatoms: () => Datom[],
  addTransactionListener: (Facts: Datom[]) => void,
  removeTransactionListener: () => void,
  transactSilently: (transaction: Transaction) => void
}

export function HomebaseProvider(props: {config?:config, children:any}): any;
export function useTransact(): [(transaction:Transaction) => any];
export function useEntity(lookup: object | number): [Entity];
export function useQuery(query: object | string, ...args: any): [Array<Entity>];
export function useClient(): homebaseClient;
