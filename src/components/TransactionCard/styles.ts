import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
  type: 'positive' | 'negative';
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 16px 24px;
  border-radius: 5px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text<TypeProps>`
  font-size: ${RFValue(20)}px;
  color: ${({ theme, type }) =>
    type === 'negative' ? theme.colors.attention : theme.colors.success};
  margin-top: 2px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color:  ${({ theme }) => theme.colors.text};
`;

export const CategoryName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color:  ${({ theme }) => theme.colors.text};
  margin-left: 16px;
`;

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color:  ${({ theme }) => theme.colors.text};
`;
