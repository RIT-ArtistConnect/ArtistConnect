import MainLayout from '@/Layouts/MainLayout';
import TagManagementButtons from '@/Pages/Admin/Partials/TagManagementButtons';
import { Tag } from '@/types';
import { Link } from '@inertiajs/react';
import { Anchor, Table, Text } from '@mantine/core';

export default function Tags({ tags }: { tags: Tag[] }) {
    return (
        <MainLayout title={'Tags'}>
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
