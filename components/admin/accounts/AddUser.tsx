import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Button,
  Collapse,
  Input,
  FormControl,
  Select,
  FormLabel,
  Stack,
  FormHelperText,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { thinnerScollbar } from '@/components/Scrollbar';

const AddUser = ({ isOpen, onClose }: any) => {
  const schema = yup.object().shape({
    email: yup.string().email('Invalid Email').required('Email is required.'),
    username: yup.string().required('Username is required.'),
    role: yup.string().required('role is required.'),
    confirm: yup
      .string()
      .required('Confirm Password is required.')
      .oneOf([yup.ref('password'), null], 'Passwords do not match.'),
    password: yup.string().required('Password is required.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      isCentered
    >
      <ModalOverlay />
      <ModalContent h="90vh" overflowY="auto" sx={thinnerScollbar}>
        <ModalHeader>Add User</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <Stack gap="3">
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Email"
                  autoComplete="off"
                  _placeholder={{
                    color: 'white',
                    opacity: '.5',
                    fontFamily: 'lexendDeca',
                    fontSize: 'SubHeader.lg',
                  }}
                  {...register('email')}
                />
                <Collapse in={errors.email ? true : false}>
                  {errors.email && (
                    <FormHelperText fontSize="SubHeader.md" color="red">
                      {errors.email.message as string}
                    </FormHelperText>
                  )}
                </Collapse>
              </FormControl>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                  placeholder="Username"
                  autoComplete="off"
                  _placeholder={{
                    color: 'white',
                    opacity: '.5',
                    fontFamily: 'lexendDeca',
                    fontSize: 'SubHeader.lg',
                  }}
                  {...register('username')}
                />
                <Collapse in={errors.username ? true : false}>
                  {errors.username && (
                    <FormHelperText fontSize="SubHeader.md" color="red">
                      {errors.username.message as string}
                    </FormHelperText>
                  )}
                </Collapse>
              </FormControl>
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Select
                  placeholder="Select Role"
                  variant="normal"
                  {...register('role')}
                >
                  <option value="admin">Admin</option>
                  <option value="foster">Foster</option>
                </Select>
                <Collapse in={errors.role ? true : false}>
                  {errors.role && (
                    <FormHelperText fontSize="SubHeader.md" color="red">
                      {errors.role.message as string}
                    </FormHelperText>
                  )}
                </Collapse>
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="Password"
                  autoComplete="off"
                  _placeholder={{
                    color: 'white',
                    opacity: '.5',
                    fontFamily: 'lexendDeca',
                    fontSize: 'SubHeader.lg',
                  }}
                  {...register('password')}
                />
                <Collapse in={errors.password ? true : false}>
                  {errors.password && (
                    <FormHelperText fontSize="SubHeader.md" color="red">
                      {errors.password.message as string}
                    </FormHelperText>
                  )}
                </Collapse>
              </FormControl>
              <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  placeholder="Confirm Password"
                  autoComplete="off"
                  _placeholder={{
                    color: 'white',
                    opacity: '.5',
                    fontFamily: 'lexendDeca',
                    fontSize: 'SubHeader.lg',
                  }}
                  {...register('confirm')}
                />
                <Collapse in={errors.password ? true : false}>
                  {errors.password && (
                    <FormHelperText fontSize="SubHeader.md" color="red">
                      {errors.password.message as string}
                    </FormHelperText>
                  )}
                </Collapse>
              </FormControl>
            </Stack>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={handleSubmit(onSubmit)}>
            Create User
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddUser;
