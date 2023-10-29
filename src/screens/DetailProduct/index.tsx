import React from 'react';
import {SharedElement} from 'react-navigation-shared-element';

import {RootStackScreenProps, Routes} from '@navigators/routes';

import S from './styles';

export function DetailProductScreen(
  props: RootStackScreenProps<Routes.DETAIL_PRODUCT>,
) {
  const {item} = props.route.params;

  return (
    <S.Container>
      <S.Content>
        <S.WrapperImage>
          <SharedElement id={`item.${item.id}.photo`}>
            <S.Image source={{uri: item.image}} resizeMode="contain" />
          </SharedElement>
        </S.WrapperImage>

        <S.Title variation="title">{item.title}</S.Title>
        <S.Description variation="subtitle">{item.description}</S.Description>
      </S.Content>
    </S.Container>
  );
}
