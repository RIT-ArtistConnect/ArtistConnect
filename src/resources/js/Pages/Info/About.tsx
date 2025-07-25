import MainLayout from '@/Layouts/MainLayout';
import { Container, Stack, Text, Title } from '@mantine/core';

export default function Homepage() {
    const sectionHeaderGap = 2;

    return (
        <MainLayout title={"About"}>
                <Stack gap={40}>
                    <Stack gap={1}>
                        <Text>
                            RIT ArtistConnect is an unofficial database of
                            creatives at RIT. This website seeks to connect
                            students, faculty, and alumni with artists to help
                            with personal, academic, and professional artistic
                            needs. Any member of the community with an active
                            RIT email address can join for free, and users who
                            fill out our submission form at the bottom of this
                            page.
                        </Text>
                    </Stack>
                    <Stack gap={sectionHeaderGap}>
                        <Title order={2}>ArtistConnect for clients</Title>
                        <Text>
                            When you sign up for ArtistConnect, you can search
                            through the database and contact artists of various
                            disciplines.{' '}
                        </Text>
                    </Stack>
                    <Stack gap={sectionHeaderGap}>
                        <Title order={2}>ArtistConnect for artists</Title>
                        <Text>
                            With an account, you can create up to three
                            connected artist profiles to promote your artwork.
                            Artist Profiles include information including: a
                            short bio about you and your work, up to four
                            featured pieces, links to external social media
                            accounts, and a customizable contact button on your
                            profile. Artist Profiles are free to create, though
                            they require additional moderator verification.
                        </Text>
                    </Stack>
                </Stack>
        </MainLayout>
    );
}
