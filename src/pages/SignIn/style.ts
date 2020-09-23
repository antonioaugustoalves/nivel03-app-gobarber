import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 30px ${Platform.OS === 'android' ? 140 : 80}px;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: #f4ede8;
    font-family: 'RobotoSlab-Medium';
    margin: 60px 0 20px;
`;

export const ForgotPassword = styled.TouchableOpacity`
    margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
    color: #f4ede8;
    font-family: 'RobotoSlab-Regular';
    font-size: 16px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: #312e38;
    border-top-width: 1px;
    border-top-color: #232129;
    padding: 16px 0;

    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const CreateAccountText = styled.Text`
    color: #ff9000;
    font-size: 18px;
    font-family: 'RobotoSlab-Regular';
    margin-left: 16px;
`;
