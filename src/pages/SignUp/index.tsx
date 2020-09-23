import React from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    View,
    ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, BackToSignIn, BackToSignInText } from './style';
import logoImg from '../../assets/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp: React.FC = () => {
    const navigation = useNavigation();
    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'undefined'}
                enabled
            >
                <ScrollView
                    contentContainerStyle={{ flex: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <Container>
                        <Image source={logoImg} />
                        <View>
                            <Title>Crie sua conta</Title>
                        </View>
                        <Input name="name" icon="user" placeholder="Nome" />
                        <Input name="email" icon="mail" placeholder="E-mail" />
                        <Input
                            name="password"
                            icon="lock"
                            placeholder="Senha"
                        />
                        <Button
                            onPress={() => {
                                console.log('Deu certo');
                            }}
                        >
                            Crie sua conta
                        </Button>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <BackToSignIn
                onPress={() => {
                    navigation.navigate('SignIn');
                }}
            >
                <Icon name="arrow-left" size={20} color="#FFF" />
                <BackToSignInText>Voltar</BackToSignInText>
            </BackToSignIn>
        </>
    );
};

export default SignUp;