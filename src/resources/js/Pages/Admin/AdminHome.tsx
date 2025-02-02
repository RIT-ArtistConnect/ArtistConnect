import MainLayout from '@/Layouts/MainLayout';
import { Link } from '@inertiajs/react';
import { Card, SimpleGrid, Stack, Title } from '@mantine/core';
import { IconTag, IconUsers } from '@tabler/icons-react';

export default function AdminHome({
    userCount,
    tagCount,
}: {
    userCount: number;
    tagCount: number;
}) {
    return (
        <MainLayout title={'Admin Homepage'}>
            <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 3, lg: 4 }}>
                <Link href={route('admin.users')}>
                    <Card bg={'ac-blue'}>
                        <Stack gap={'md'}>
                            <IconUsers />
                            <Title order={3}>{userCount} Users</Title>
                        </Stack>
                    </Card>
                </Link>
                <Link href={route('admin.tags')}>
                    <Card bg={'ac-orange'}>
                        <Stack gap={'md'}>
                            <IconTag />
                            <Title order={3}>{tagCount} Tags</Title>
                        </Stack>
                    </Card>
                </Link>
            </SimpleGrid>
        </MainLayout>
    );
}
