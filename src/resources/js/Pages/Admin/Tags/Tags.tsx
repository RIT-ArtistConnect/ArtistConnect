import MainLayout from '@/Layouts/MainLayout';
import { Tag } from '@/types';

export default function Tags({ tags }: { tags: Tag[] }) {
    return (
        <MainLayout title={'Tags'}>
            <ul>
                {tags.map((tag) => {
                    return <li key={tag.label}>{JSON.stringify(tag)}</li>;
                })}
            </ul>
        </MainLayout>
    );
}
