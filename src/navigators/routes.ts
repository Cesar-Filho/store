import {StackScreenProps} from '@react-navigation/stack';
import {IProduct} from '@store/modules/api/interface';

export enum Routes {
  LOGIN = 'LOGIN',
  LIST_PRODUCTS = 'LIST_PRODUCTS',
  DETAIL_PRODUCT = 'DETAIL_PRODUCT',
  CART = 'CART',

  HOME_TAB = 'HOME_TAB',
  BOTTOM_TAB = 'BOTTOM_TAB',
}

export type RootStackParamList = {
  [Routes.LOGIN]: undefined;
  [Routes.LIST_PRODUCTS]: undefined;
  [Routes.DETAIL_PRODUCT]: {item: IProduct};
  [Routes.CART]: undefined;

  [Routes.HOME_TAB]: undefined;
  [Routes.BOTTOM_TAB]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
