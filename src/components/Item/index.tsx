import React, {memo} from 'react';

import {Typography} from '@components/Typography';
import {IProduct} from '@store/modules/api/interface';

import S from './styles';
import {useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';

import {Routes} from '@navigators/routes';

function ItemComponent({
  id,
  title,
  description,
  category,
  image,
  price,
  rating,
}: IProduct) {
  const {navigate} = useNavigation();

  return (
    <S.Container
      onPress={() =>
        navigate(Routes.DETAIL_PRODUCT, {
          item: {id, title, category, image, price, rating, description},
        })
      }>
      <SharedElement id={`item.${id}.photo`}>
        <S.Image source={{uri: image}} resizeMode="contain" />
      </SharedElement>

      <S.Column>
        <S.Title variation="title">{title}</S.Title>
        <Typography variation="body">{category}</Typography>
        <Typography variation="subtitle">${price}</Typography>
      </S.Column>
    </S.Container>
  );
}

export const Item = memo(ItemComponent);
