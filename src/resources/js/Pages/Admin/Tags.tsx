import UserTagRequestForm from '@/Components/UserTagRequestForm';
import MainLayout from '@/Layouts/MainLayout';
import TagManagementButtons from '@/Pages/Admin/Partials/TagManagementButtons';
import { Tag } from '@/types';
import { useForm, Link } from '@inertiajs/react';
import { useState} from 'react'
import { Modal, Button, Anchor, Table, Text, ModalStack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function Tags({ tags }: { tags: Tag[] }) {
    const [opened, {open, close}] = useDisclosure(false)


    return (
        <MainLayout title={'Tags'}>
            <Modal
            opened={opened}
            centered
            onClose={close}
            title = "Create Tag Form"
            >
            {
                //The Modal content!
                //Should link to user tag request form right
                UserTagRequestForm()
            }
            </Modal>
            <Button
             variant='filled'
             onClick={open}




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
