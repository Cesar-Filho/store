import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import {DetailProductScreen} from '@screens/DetailProduct';
import {ListProductsScreen} from '@screens/ListProducts';
import {Routes} from './routes';

const Stack = createSharedElementStackNavigator();

export function HomeTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.LIST_PRODUCTS}
        component={ListProductsScreen}
        options={{title: 'Produtos'}}
      />
      <Stack.Screen
        name={Routes.DETAIL_PRODUCT}
        component={DetailProductScreen}
        options={{title: 'Detalhe'}}
        sharedElements={route => {
          const {item} = route.params;
          return [`item.${item.id}.photo`];
        }}
      />
    </Stack.Navigator>
  );
}
