/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';
import { Container, TextInput, Icon } from './style';

interface InputProps extends TextInputProps {
    name: string;
    icon: string;
}

interface InputValueReference {
    value: string;
}
const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
    const { registerField, defaultValue = '', fieldName, error } = useField(
        name,
    );
    const inputElementRef = useRef<any>(null);
    const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
    useEffect(() => {
        registerField<string>({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
            setValue(ref: any, value) {
                inputValueRef.current.value = value;
                inputElementRef.current.setNativeProps({ text: value });
            },
            clearValue() {
                inputValueRef.current.value = '';
                inputElementRef.current.clear();
            },
        });
    }, [fieldName, registerField]);
    return (
        <Container>
            <Icon name={icon} color="#666360" size={20} />
            <TextInput
                ref={inputElementRef}
                defaultValue={defaultValue}
                placeholderTextColor="#666360"
                {...rest}
                onChangeText={value => {
                    inputValueRef.current.value = value;
                }}
            />
        </Container>
    );
};

export default Input;
