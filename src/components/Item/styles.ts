import {Card} from '@components/Card';
import {Typography} from '@components/Typography';
import styled from 'styled-components/native';

const HEIGHT_CARD = 200;
const MARGIN_CARD = 16;
const PADDING_FULL_CARD = 32;

export const LAYOUT_CARD = HEIGHT_CARD + MARGIN_CARD;

export default {
  Container: styled(Card)`
    flex-direction: row;
    height: ${HEIGHT_CARD}px;
    margin: ${({theme}) => theme.spacing.XS}px;
    padding-right: ${({theme}) => theme.spacing.XS}px;
  `,
  Image: styled.Image`
    width: 90px;
    height: ${HEIGHT_CARD - PADDING_FULL_CARD}px;
  `,

  Column: styled.View`
    flex: 1;
    padding-left: ${({theme}) => theme.spacing.MD}px;
    justify-content: space-evenly;
  `,

  Title: styled(Typography)`
    color: ${({theme}) => theme.colors.primary};
  `,

  PriceLabel: styled(Typography)``,
};
