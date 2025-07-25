import MainLayout from '@/Layouts/MainLayout';
import InfoSection from './Partials/InfoSection';

import { Box, Grid, Stack, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function Homepage() {
    const isMobile = !useMediaQuery('(min-width: 45em)');
    console.log(isMobile);

    return (
        <MainLayout>
            <Grid columns={4}>
                <Grid.Col span={"auto"}>
                    <Box bg="red.5" p="40" h="100%" w={isMobile ? "20em" : "10em"} m="auto"></Box>
                </Grid.Col>
                <Grid.Col span={isMobile ? 4 : 3}>
                    <Stack gap={30}>
                        <InfoSection title={'About'} order={1}>
                            <Text>
                                RIT ArtistConnect is an unofficial database of
                                creatives at RIT. This website seeks to connect
                                students, faculty, and alumni with artists to
                                help with personal, academic, and professional
                                artistic needs. Any member of the community with
                                an active RIT email address can join for free,
                                and users who fill out our submission form at
                                the bottom of this page.
                            </Text>
                        </InfoSection>
                        <InfoSection
                            title={'ArtistConnect for clients'}
                            order={2}
                        >
                            <Text>
                                When you sign up for ArtistConnect, you can
                                search through the database and contact artists
                                of various disciplines.
                            </Text>
                        </InfoSection>
                        <InfoSection
                            title={'ArtistConnect for artists'}
                            order={2}
                        >
                            <Text>
                                With an account, you can create up to three
                                connected artist profiles to promote your
                                artwork. Artist Profiles include information
                                including: a short bio about you and your work,
                                up to four featured pieces, links to external
                                social media accounts, and a customizable
                                contact button on your profile. Artist Profiles
                                are free to create, though they require
                                additional moderator verification.
                            </Text>
                        </InfoSection>
                    </Stack>
                </Grid.Col>
            </Grid>
        </MainLayout>
    );
}
