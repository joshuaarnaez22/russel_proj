import React from 'react';
import LoginFields from './LoginFields';
const BgProps = {
    height: '100%',
    width: '100%',
    pos: 'absolute',
    zIndex: '0',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any;

import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Flex, Image } from '@chakra-ui/react';

const schema = yup.object().shape({
    username: yup.string().required('Username is required.'),
    password: yup.string().required('Password is required.'),
    confirmPassword: yup
        .string()
        .required('Confirm Password is required.')
        .oneOf([yup.ref('password'), null], 'Passwords do not match.'),
});

const Login = () => {
    const formMethods = useForm({
        resolver: yupResolver(schema),
    });
    const { trigger } = formMethods;
    const onSubmit = () => {
        console.log(123);
        trigger('username');
        trigger('password');
        trigger('confirmPassword');
    };
    return (
        <>
            <Image src="loginBg.jpg" alt="bg" {...BgProps} />
            <Flex
                height="100vh"
                position="relative"
                justify="center"
                align="center"
                direction="column"
            >
                <FormProvider {...formMethods}>
                    <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                        <LoginFields />
                    </form>
                </FormProvider>
            </Flex>
        </>
    );
};

export default Login;
