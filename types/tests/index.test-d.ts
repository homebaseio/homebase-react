import {expectType, expectError} from 'tsd';
import { HomebaseProvider, useTransact, useEntity, useQuery } from '../index';

expectType<object>(HomebaseProvider({}));
expectError(HomebaseProvider("a"));
expectError(HomebaseProvider(1));

expectType<Array<Array<object>>>(useTransact());
expectError(useTransact("blurb"));

expectType<Array<any>>(useEntity(1));
expectError(useEntity());

expectType<Array<object>>(useQuery({}));
expectError(useQuery());
