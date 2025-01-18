import MainLayout from '@/Layouts/MainLayout';
import UserManagementButtons from '@/Pages/Admin/Partials/UserManagementButtons';
import { User } from '@/types';
import { Table, Tooltip, useMantineTheme } from '@mantine/core';
import {
    IconCircleCheck,
    IconCircleX,
    IconUserCancel,
    IconUserCheck,
    IconUserQuestion,
} from '@tabler/icons-react';

export default function Users({ users }: { users: User[] }) {
    const theme = useMantineTheme();
    return (
        <MainLayout title={'Users'}>
            <Table.ScrollContainer minWidth={500}>
                <Table>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>ID</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Email</Table.Th>
                            <Table.Th>Status</Table.Th>
                            <Table.Th>Admin</Table.Th>
                            <Table.Th>Actions</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {users.map((user) => {
                            return (
                                <Table.Tr key={user.email}>
                                    <Table.Td>{user.id}</Table.Td>
                                    <Table.Td>{user.name}</Table.Td>
                                    <Table.Td>{user.email}</Table.Td>
                                    <Table.Td>
                                        {user.is_banned ? (
                                            <Tooltip
                                                label={'Banned'}
                                                events={{
                                                    hover: true,
                                                    focus: true,
                                                    touch: true,
                                                }}
                                            >
                                                <IconUserCancel
                                                    color={'red'}
                                                    aria-label={'Banned'}
                                                />
                                            </Tooltip>
                                        ) : user.email_verified_at ? (
                                            <Tooltip
                                                label={'Verified Email'}
                                                events={{
                                                    hover: true,
                                                    focus: true,
                                                    touch: true,
                                                }}
                                            >
                                                <IconUserCheck
                                                    color={'green'}
                                                    aria-label={
                                                        'Verified Email'
                                                    }
                                                />
                                            </Tooltip>
                                        ) : (
                                            <Tooltip
                                                label={'Unverified Email'}
                                                events={{
                                                    hover: true,
                                                    focus: true,
                                                    touch: true,
                                                }}
                                            >
                                                <IconUserQuestion
                                                    color={
                                                        theme.colors[
                                                            'ac-yellow'
                                                        ][5]
                                                    }
                                                    aria-label={
                                                        'Unverified Email'
                                                    }
                                                />
                                            </Tooltip>
                                        )}
                                    </Table.Td>
                                    <Table.Td>
                                        <Tooltip
                                            label={
                                                user.is_admin
                                                    ? 'User is Admin'
                                                    : 'User is not Admin'
                                            }
                                            events={{
                                                hover: true,
                                                focus: true,
                                                touch: true,
                                            }}
                                        >
                                            {user.is_admin ? (
                                                <IconCircleCheck
                                                    color={'green'}
                                                    aria-label={'User is Admin'}
                                                />
                                            ) : (
                                                <IconCircleX
                                                    color={'red'}
                                                    aria-label={
                                                        'User is not Admin'
                                                    }
                                                />
                                            )}
                                        </Tooltip>
                                    </Table.Td>
                                    <Table.Td>
                                        <UserManagementButtons user={user} />
                                    </Table.Td>
                                </Table.Tr>
                            );
                        })}
                    </Table.Tbody>
                </Table>
            </Table.ScrollContainer>
        </MainLayout>
    );
}
