import {Card} from '@components/Card';
import {Typography} from '@components/Typography';
import styled from 'styled-components/native';

export default {
  Container: styled.ScrollView`
    padding-horizontal: ${({theme}) => theme.spacing.XS}px;
  `,

  Image: styled.Image`
    height: 100%;
  `,

  WrapperImage: styled.View`
    border-width: 1px;
    border-color: ${({theme}) => theme.colors.grey[100]};
    border-radius: ${({theme}) => theme.spacing.MD}px;
    padding: ${({theme}) => theme.spacing.MD}px;
    margin-bottom: ${({theme}) => theme.spacing.MD}px;
    width: 100%;
    height: 280px;
  `,

  Content: styled(Card)`
    margin-vertical: ${({theme}) => theme.spacing.MD}px;
  `,

  Title: styled(Typography)`
    color: ${({theme}) => theme.colors.primary};
    margin-bottom: ${({theme}) => theme.spacing.XS}px;
  `,

  Description: styled(Typography)`
    color: ${({theme}) => theme.colors.grey[700]};
  `,
};
