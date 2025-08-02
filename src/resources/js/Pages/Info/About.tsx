import MainLayout from '@/Layouts/MainLayout';
import InfoSection from './Partials/InfoSection';

import { Anchor, Box, Grid, Stack, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function Homepage() {
    const isMobile = !useMediaQuery('(min-width: 45em)');
    console.log(isMobile);

    return (
        <MainLayout>
            <Grid columns={4}>
                <Grid.Col span={'auto'}>
                    <Box
                        bg="#`DDDDDD"
                        p="40"
                        h="100%"
                        w={isMobile ? '20em' : '10em'}
                        m="auto"
                    ></Box>
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
                                an active RIT email address can join for free.
                            </Text>
                            <Text>
                                This project is created and managed by RIT
                                Drawing Club. For more information on Drawing
                                Club, please visit our <Anchor href={''}>CampusGroups page</Anchor>, <Anchor href={''}>website</Anchor>, or <Anchor href={''}>Discord server</Anchor>.
                            </Text>

                            <Text>
                                On this website, we separate artist-client
                                connections into three different categories:
                            </Text>
                        </InfoSection>
                        <InfoSection title={'Mentorship'} order={2}>
                            <Text>
                                Underclassmen or hobbyist artists seeking
                                feedback or other forms of guidance from more
                                experienced creatives within their desired
                                field.
                            </Text>
                        </InfoSection>
                        <InfoSection title={'Teamwork'} order={2}>
                            <Text>
                                Ideal for student teams seeking other students
                                to assist them with class projects, such as
                                finding additional background artists or rough
                                animators for animation thesis films, designers
                                for game assets, and so on. This option comes
                                with the expectation that a project is <Text span fs={"italic"}>
                                    unpaid or for academics.
                                </Text>
                            </Text>
                        </InfoSection>
                        <InfoSection title={'Freelance Work'} order={2}>
                            <Text>
                                The most common connection, this covers anyone
                                offering art for money. Commissioning logos for
                                a business, illustrations for personal use or
                                gifts, or any other <Text span fs={"italic"}>paid</Text> services fits under
                                this filter.
                            </Text>
                            <Text>
                                While users can browse the discover page without
                                signing in, contact information and links for
                                artists are obscured for privacy reasons.
                            </Text>
                        </InfoSection>
                        <InfoSection title={'Client Accounts'} order={2}>
                            <Text>
                                When you sign up for ArtistConnect and confirm
                                your RIT email address, you will have full
                                access to the database to find artists open for
                                a variety of services.
                            </Text>
                        </InfoSection>
                        <InfoSection title={'Artist Profiles'} order={2}>
                            <Text>
                                With an account, you can create up to three connected artist profiles to promote your artwork. With these profiles, you can showcase what services you offer, link to a portfolio website and a contact email. Artist profiles are manually verified to ensure that none of the work featured violates RIT media policies. 
                            </Text>
                        </InfoSection>
                    </Stack>
                </Grid.Col>
            </Grid>
        </MainLayout>
    );
}
