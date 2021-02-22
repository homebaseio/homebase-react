import { expectType, expectError } from 'tsd'
import {
  HomebaseProvider,
  useTransact,
  useEntity,
  useQuery,
  useClient,
  Entity,
  Transaction,
  homebaseClient,
} from '.'

expectType<React.ReactElement>(HomebaseProvider({ children: [] }))
expectError(HomebaseProvider('a'))
expectError(HomebaseProvider(1))

expectType<[(transaction: Transaction) => void]>(useTransact())
expectError(useTransact('blurb'))

expectType<[Entity]>(useEntity(1))
expectError(useEntity())

expectType<[Entity[]]>(useQuery({}))
expectType<[Entity[]]>(useQuery('a datalog query could live here'))
expectError(useQuery(1))

expectType<[homebaseClient]>(useClient())