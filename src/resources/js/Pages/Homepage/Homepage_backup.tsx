import MainLayout from '@/Layouts/MainLayout';
import FeaturedArtists from '@/Pages/Homepage/Partials/FeaturedArtists';
import { Container, Text, Title } from '@mantine/core';

export default function Homepage() {
    return (
        <MainLayout>
            <Container>
                <Title order={1}>Welcome to RIT ArtistConnect!</Title>
                <Text>
                    ArtistConnect is an unofficial resource to connect RIT
                    artists who are accepting commissions with interested
                    parties in the RIT community.
                </Text>
                <FeaturedArtists />
            </Container>
        </MainLayout>
    );
}
