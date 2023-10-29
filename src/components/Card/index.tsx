import React from 'react';

import S from './styles';
import {TouchableOpacityProps} from 'react-native';

interface CardProps extends TouchableOpacityProps {
  row?: boolean;
}

export function Card({children, onPress, ...props}: CardProps) {
  return (
    <S.Container
      testID="ComponentCard"
      activeOpacity={0.8}
      disabled={onPress ? false : true}
      onPress={onPress}
      {...props}>
      {children}
    </S.Container>
  );
}
