import React from 'react';
import LoginFields from './LoginFields';
const BgProps = {
  height: '100%',
  width: '100%',
  pos: 'absolute',
  zIndex: '0',
} as any;
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Flex, Image, useToast } from '@chakra-ui/react';
import { loginAuth } from '@/services/auth';
const schema = yup.object().shape({
  username: yup.string().required('Username is required.'),
  password: yup.string().required('Password is required.'),
});

const Login = () => {
  const router = useRouter();
  const formMethods = useForm({
    resolver: yupResolver(schema),
  });

  const toast = useToast();

  const onSubmit = async (payload: any) => {
    try {
      const { data } = await loginAuth(payload);
      const { token, role } = await data;
      localStorage.setItem('token', token);
      router.push(`${role}/dashboard`);
    } catch (error) {
      console.log(error);
    }
  };

  const toastUI = (type: number, description: string) => {
    toast({
      status: type == 1 ? 'success' : 'error',
      variant: 'left-accent',
      position: 'top-right',
      isClosable: true,
      title: 'Account created.',
      description: `${description}`,
      duration: 5000,
    });
  };
  return (
    <>
      <Image src="loginBg.jpg" alt="bg" {...BgProps} />
      <Flex
        height="100vh"
        position="relative"
        pt="50px"
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
