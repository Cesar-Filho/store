import React, {useMemo, useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {useAllProductsQuery} from '@store/modules/api';
import {LAYOUT_CARD} from '@components/Item/styles';
import {Fallback} from '@components/Fallback';
import {IProduct} from '@store/modules/api/interface';
import {Loading} from '@components/Loading';
import {Item} from '@components/Item';

import S from './styles';

export function ListProductsScreen() {
  const {data, isLoading} = useAllProductsQuery({});
  const [search, _setSearch] = useState('');

  const list = useMemo(
    () => data?.filter(item => item.title.includes(search)),
    [data, search],
  );

  const renderItem: ListRenderItem<IProduct> = ({item}) => <Item {...item} />;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        initialNumToRender={10}
        ListEmptyComponent={Fallback}
        keyExtractor={item => String(item.id)}
        getItemLayout={(_data, index) => ({
          length: LAYOUT_CARD,
          index,
          offset: LAYOUT_CARD * index,
        })}
      />
    </S.Container>
  );
}
