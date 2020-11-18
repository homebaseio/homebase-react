export type Transaction = Array<object>;
export type Schema = object;
export type config = {schema?: Schema, initialData?: Transaction };
export type Entity = {
  get: (...params:string[]) => any;
}

export function HomebaseProvider(props: {config?:config, children:any}): any;
export function useTransact(): [(transaction:Transaction) => any];
export function useEntity(lookup: object | number): [Entity];
export function useQuery(query: object | string, ...args: any): [Array<Entity>];
