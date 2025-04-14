import UserTagRequestForm from '@/Components/UserTagRequestForm';
import MainLayout from '@/Layouts/MainLayout';
import TagManagementButtons from '@/Pages/Admin/Partials/TagManagementButtons';
import { Tag } from '@/types';
import { useForm, Link, Head } from '@inertiajs/react';
import { useState} from 'react'
import { Modal, Button, Anchor, Table, Text, ModalStack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {modals, ModalsProvider} from '@mantine/modals';

export default function Tags({ tags }: { tags: Tag[] }) {
    const [opened, {open, close}] = useDisclosure(false);
    const initialState = {name: null, type: null}

    const openModal = () => modals.open({
        title: "Create a Tag",
        children: <UserTagRequestForm user={{is_admin: true}}/>
    });

    return (
        <MainLayout title={'Tags'}>
            <Button
             variant='filled'
             onClick={openModal}
             >Create a Tag</Button>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Label</Table.Th>
                        <Table.Th>Status</Table.Th>
                        <Table.Th>Type</Table.Th>
                        <Table.Th>Actions</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {tags.map((tag) => {
                        return (
                            <Table.Tr key={tag.label}>
                                <Table.Td>
                                    <Anchor
                                        component={Link}
                                        href={route(
                                            'admin.tags.history',
                                            tag.id,
                                        )}
                                    >
                                        {tag.label}
                                    </Anchor>
                                </Table.Td>
                                <Table.Td>
                                    <Text c={tag.active ? 'green' : 'red'}>
                                        {tag.latest_history.action}
                                    </Text>
                                </Table.Td>
                                <Table.Td>{tag.type}</Table.Td>
                                <Table.Td>
                                    <TagManagementButtons tag={tag} />
                                </Table.Td>
                            </Table.Tr>
                        );
                    })}
                </Table.Tbody>
            </Table>
        </MainLayout>
    );
}
