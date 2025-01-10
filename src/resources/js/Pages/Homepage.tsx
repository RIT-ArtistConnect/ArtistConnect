import { Head } from '@inertiajs/react';
import MainLayout from "@/Layouts/MainLayout";
import {Container, Text, Title} from "@mantine/core";

export default function Homepage() {
    return (
        <MainLayout>
            <Container>
                <Title order={1}>Welcome to RIT ArtistConnect!</Title>
                <Text>
                    ArtistConnect is an unofficial resource to connect RIT artists who are accepting commissions with interested parties in the RIT community.
                </Text>
            </Container>
        </MainLayout>
    );
}
