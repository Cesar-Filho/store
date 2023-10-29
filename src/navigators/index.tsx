import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BottomTab} from './Tabs';
import {Routes} from './routes';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.BOTTOM_TAB}
        component={BottomTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
