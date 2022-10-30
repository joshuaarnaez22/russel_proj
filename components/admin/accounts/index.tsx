import React, { useState } from 'react';
import AddUser from './AddUser';
import {
  Flex,
  InputGroup,
  useDisclosure,
  InputLeftElement,
  Icon,
  Input,
  Button,
  Text,
  Box,
} from '@chakra-ui/react';
import { MdSearch } from 'react-icons/md';
import Loader from '@/components/global/Loader';
import TableAccounts from './TableAccounts';
const Accounts = ({ users }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setValue] = useState<string>('');

  const handleSearch = (e: any) => {
    const { value } = e.target;
    if (value) setIsLoading(true);
    else setIsLoading(false);
    setValue(value);
  };

  return (
    <>
      <Box>
        <AddUser {...{ isOpen, onClose }} />
      </Box>
      <Flex justify="space-between">
        <Text>Accounts</Text>
        <InputGroup w="300px">
          <InputLeftElement pointerEvents="none">
            <Icon as={MdSearch} color="gray.300" />
          </InputLeftElement>
          <Input
            type="tel"
            placeholder="Search"
            shadow="sm"
            variant="search"
            value={search}
            onChange={handleSearch}
          />
        </InputGroup>
        <Button onClick={onOpen}>Add User</Button>
      </Flex>
      {!isLoading ? (
        <TableAccounts users={users} />
      ) : (
        <Flex h="75vh" align="center" justify="center">
          <Loader size="24" color="gray" thickness="3px" />
        </Flex>
      )}
    </>
  );
};

export default Accounts;
