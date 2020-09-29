/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useRef } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    View,
    ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { Container, Title, BackToSignIn, BackToSignInText } from './style';
import logoImg from '../../assets/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const InputPasswordRef = useRef();
    const navigation = useNavigation();
    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
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
                        <Form
                            style={{ width: '100%' }}
                            ref={formRef}
                            onSubmit={(data: object) => {
                                console.log(data);
                            }}
                        >
                            <Input
                                name="name"
                                icon="user"
                                placeholder="Nome"
                                returnKeyType="next"
                                onSubmitEditing={(data: object) => {
                                    console.log(data);
                                }}
                            />
                            <Input
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                name="email"
                                icon="mail"
                                placeholder="E-mail"
                                returnKeyType="next"
                            />
                            <Input
                                name="password"
                                icon="lock"
                                placeholder="Senha"
                                secureTextEntry
                                returnKeyType="send"
                                onSubmitEditing={() =>
                                    formRef.current?.submitForm()}
                            />
                            <Button
                                onPress={() => formRef.current?.submitForm()}
                            >
                                Crie sua conta
                            </Button>
                        </Form>
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
