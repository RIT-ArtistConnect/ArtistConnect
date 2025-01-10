import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import MainLayout from "@/Layouts/MainLayout";
import {Container, Text, Title} from "@mantine/core";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <MainLayout>
            <Head title="RIT ArtistConnect" />
            <Container mt={"lg"}>
                <Title order={1}>Welcome to RIT ArtistConnect!</Title>
                <Text>
                    ArtistConnect is an unofficial resource to connect RIT artists who are accepting commissions with interested parties in the RIT community.
                </Text>
            </Container>
        </MainLayout>
    );
}
