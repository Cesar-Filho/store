import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import Config from 'react-native-config';
import {IProduct} from './interface';

interface IGetAllProducts {
  limit?: number;
  sort?: 'asc' | 'desc';
}

export const apiSlice = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({baseUrl: Config.BASE_URL}),
  tagTypes: ['Products'],
  endpoints: build => ({
    allProducts: build.query<IProduct[], IGetAllProducts>({
      query: ({...params}) => ({url: 'products', params}),
    }),
  }),
});

export const {useAllProductsQuery} = apiSlice;
