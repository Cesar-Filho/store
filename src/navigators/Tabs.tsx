import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabBarIcon} from '@components/TabBarIcon';
import {ITabIcon} from './interface';
import {HomeTab} from './HomeTab';
import {Routes} from './routes';

const Tab = createBottomTabNavigator();

const HomeTabIcon = ({color, size}: ITabIcon) => (
  <TabBarIcon name="home" color={color} size={size} />
);

const CartTabIcon = ({color, size}: ITabIcon) => (
  <TabBarIcon name="shopping" color={color} size={size} />
);

export function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={Routes.HOME_TAB}
        component={HomeTab}
        options={{
          title: 'Início',
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tab.Screen
        name={Routes.CART}
        component={HomeTab}
        options={{
          title: 'Carrinho',
          tabBarIcon: CartTabIcon,
        }}
      />
    </Tab.Navigator>
  );
}
