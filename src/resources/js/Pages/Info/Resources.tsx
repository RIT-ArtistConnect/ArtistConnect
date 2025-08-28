import MainLayout from '@/Layouts/MainLayout';
import InfoSection from './Partials/InfoSection';

import { Anchor, Box, Grid, List, Stack, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function Resources() {
    const isMobile = !useMediaQuery('(min-width: 45em)');
    console.log(isMobile);

    return (
        <MainLayout>
            <Grid columns={4}>
                <Grid.Col span={'auto'}>
                    <Box
                        bg="#DDDDDD"
                        p="40"
                        h="100%"
                        w={isMobile ? '20em' : '10em'}
                        m="auto"
                    ></Box>
                </Grid.Col>
                <Grid.Col span={isMobile ? 4 : 3}>
                    <Stack gap={30}>
                        <InfoSection title={'Additional Resources'} order={1}>
                            <InfoSection
                                title={'Collaborative Spaces on Campus'}
                                order={2}
                            >
                                <Text>
                                    Looking for places on campus to make your
                                    idea a reality? Here is a list of creative
                                    sources on campus.
                                </Text>
                                <List>
                                    <List.Item><Anchor href={'https://www.rit.edu/facilities/fab-lab'} target={'_blank'}>RIT FabLab</Anchor> (Located in BOO-2574)</List.Item>
                                </List>
                            </InfoSection>
                        </InfoSection>
                        <InfoSection title={'Mentorship'} order={2}>
                            <Text>
                                Underclassmen or hobbyist artists seeking
                                feedback or other forms of guidance from more
                                experienced creatives within their desired
                                field.
                            </Text>
                        </InfoSection>
                    </Stack>
                </Grid.Col>
            </Grid>
        </MainLayout>
    );
}
