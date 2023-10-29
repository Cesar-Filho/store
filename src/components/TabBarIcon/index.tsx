import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface TabBarIconProps {
  name: string;
  color: string;
  size: number;
}

export function TabBarIcon({name, color, size}: TabBarIconProps) {
  return <MaterialCommunityIcons name={name} color={color} size={size} />;
}
