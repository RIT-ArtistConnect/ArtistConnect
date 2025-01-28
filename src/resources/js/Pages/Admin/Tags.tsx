import MainLayout from '@/Layouts/MainLayout';
import { Tag } from '@/types';
import { Link } from '@inertiajs/react';
import { Anchor } from '@mantine/core';

export default function Tags({ tags }: { tags: Tag[] }) {
    return (
        <MainLayout title={'Tags'}>
            <ul>
                {tags.map((tag) => {
                    return (
                        <Anchor
                            component={Link}
                            href={route('admin.tags.history', tag.id)}
                            key={tag.label}
                        >
                            {JSON.stringify(tag)}
                        </Anchor>
                    );
                })}
            </ul>
        </MainLayout>
    );
}
