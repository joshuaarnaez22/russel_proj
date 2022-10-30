import {
  TableContainer,
  Table,
  Thead,
  TableCaption,
  Tr,
  Th,
  Tbody,
  Td,
  Tag,
  TagLabel,
  Menu,
  MenuItem,
  MenuButton,
  IconButton,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { SlOptionsVertical } from 'react-icons/sl';
import UserProfile from './UserProfile';

const TableAccounts = ({ users }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <UserProfile {...{ isOpen, onOpen, onClose }} />
      <TableContainer
        maxWidth="100%"
        p="30px"
        shadow="xl"
        borderRadius="md"
        mb="20px"
      >
        <Table variant="simple">
          <TableCaption>List of users</TableCaption>
          <Thead
            fontWeight="bold"
            fontFamily="montserrat"
            fontSize="12px"
            color="gray"
            fontStyle="normal"
            letterSpacing="0.2"
          >
            <Tr>
              <Th>Username</Th>
              <Th>Role</Th>
              <Th>Status</Th>
              <Th w="5%"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map(({ _id, username, role, status }: any) => {
              return (
                <Tr
                  key={_id}
                  fontSize="12px"
                  color="gray"
                  fontStyle="normal"
                  letterSpacing="0.2"
                >
                  <Td>{username}</Td>
                  <Td>{role}</Td>
                  <Td>
                    <Tag
                      size="md"
                      borderRadius="full"
                      variant="solid"
                      colorScheme={status == 'active' ? 'green' : 'red'}
                      _hover={{
                        cursor: 'pointer',
                        transform: 'scale(1.2)',
                        transition: 'all .5s ease',
                      }}
                      transition="all .5s ease"
                    >
                      <TagLabel>{status}</TagLabel>
                    </Tag>
                  </Td>
                  <Td>
                    <Menu>
                      <MenuButton
                        _hover={{
                          cursor: 'pointer',
                          shadow: 'md',
                          bg: 'main',
                          transition: 'all .5s ease',
                        }}
                        transition="all .5s ease"
                        bg="transparent"
                        borderRadius="full"
                        as={IconButton}
                        aria-label="Options"
                        icon={<SlOptionsVertical />}
                      ></MenuButton>
                      <MenuList minWidth="180px">
                        <MenuItem>Update</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem onClick={onOpen}>View Profile</MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableAccounts;
