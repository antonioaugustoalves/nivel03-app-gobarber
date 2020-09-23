import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, ButtonText } from './style';

interface ButtonPrps extends RectButtonProperties {
    children: string;
}
const Button: React.FC<ButtonPrps> = ({ children, ...rest }) => (
    <Container {...rest}>
        <ButtonText>{children}</ButtonText>
    </Container>
);

export default Button;
