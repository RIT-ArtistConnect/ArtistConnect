import MainLayout from '@/Layouts/MainLayout';
import InfoSection from './Partials/InfoSection';

import { Accordion, Anchor, Box, Grid, List, Stack, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function Resources() {
    const isMobile = !useMediaQuery('(min-width: 45em)');

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
                                    <List.Item>
                                        <Anchor
                                            href={
                                                'https://www.rit.edu/facilities/fab-lab'
                                            }
                                            target={'_blank'}
                                        >
                                            RIT FabLab
                                        </Anchor>{' '}
                                        (Located in BOO-2574)
                                    </List.Item>
                                    <List.Item>
                                        <Anchor
                                            href={'https://make.rit.edu/app'}
                                            target={'_blank'}
                                        >
                                            SHED Makerspace
                                        </Anchor>
                                    </List.Item>
                                    <List.Item>
                                        <Anchor
                                            href={
                                                'https://www.rit.edu/facilities/foundations-studio-labs'
                                            }
                                            target={'_blank'}
                                        >
                                            Foundations Studio Labs
                                        </Anchor>
                                    </List.Item>
                                    <List.Item>
                                        <Anchor
                                            href={
                                                'https://www.rit.edu/magic/work-us#facilities'
                                            }
                                            target={'_blank'}
                                        >
                                            MAGIC Studio Spaces
                                        </Anchor>
                                    </List.Item>
                                    <List.Item>
                                        <Anchor
                                            href={
                                                'https://www.rit.edu/facilities'
                                            }
                                            target={'_blank'}
                                        >
                                            Full list of RIT Student Spaces
                                        </Anchor>
                                    </List.Item>
                                </List>
                            </InfoSection>
                        </InfoSection>
                        <InfoSection title={'How do I...'} order={2}>
                            <InfoSection title={'For Artists'} order={3}>
                                <Accordion chevronPosition="left">
                                    <Accordion.Item value="item-1">
                                        <Accordion.Control>
                                            Make an invoice?
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            Etiam accumsan dapibus leo. Donec
                                            rhoncus vestibulum odio in
                                            scelerisque. Morbi in nibh at ligula
                                            euismod dictum. Vestibulum vitae
                                            felis sed urna sagittis ultrices.
                                            Curabitur sit amet lorem pharetra
                                            leo aliquet volutpat. Nunc vitae
                                            orci elementum, hendrerit ipsum nec,
                                            aliquam lacus. Sed dictum ipsum
                                            sapien, sit amet lacinia orci
                                            vestibulum vel. Quisque nunc erat,
                                            pellentesque at ligula eu, rutrum
                                            ornare libero.
                                        </Accordion.Panel>
                                    </Accordion.Item>

                                    <Accordion.Item value="item-2">
                                        <Accordion.Control>
                                            Many payment processors, such as
                                            Paypal, have a native invoicing
                                            system in them.
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            Etiam accumsan dapibus leo. Donec
                                            rhoncus vestibulum odio in
                                            scelerisque. Morbi in nibh at ligula
                                            euismod dictum. Vestibulum vitae
                                            felis sed urna sagittis ultrices.
                                            Curabitur sit amet lorem pharetra
                                            leo aliquet volutpat. Nunc vitae
                                            orci elementum, hendrerit ipsum nec,
                                            aliquam lacus. Sed dictum ipsum
                                            sapien, sit amet lacinia orci
                                            vestibulum vel. Quisque nunc erat,
                                            pellentesque at ligula eu, rutrum
                                            ornare libero.
                                        </Accordion.Panel>
                                    </Accordion.Item>

                                    <Accordion.Item value="item-3">
                                        <Accordion.Control>
                                            Calculate my rates?
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            Etiam accumsan dapibus leo. Donec
                                            rhoncus vestibulum odio in
                                            scelerisque. Morbi in nibh at ligula
                                            euismod dictum. Vestibulum vitae
                                            felis sed urna sagittis ultrices.
                                            Curabitur sit amet lorem pharetra
                                            leo aliquet volutpat. Nunc vitae
                                            orci elementum, hendrerit ipsum nec,
                                            aliquam lacus. Sed dictum ipsum
                                            sapien, sit amet lacinia orci
                                            vestibulum vel. Quisque nunc erat,
                                            pellentesque at ligula eu, rutrum
                                            ornare libero.
                                        </Accordion.Panel>
                                    </Accordion.Item>

                                    <Accordion.Item value="item-4">
                                        <Accordion.Control>
                                            Find a marketplace?
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            Etiam accumsan dapibus leo. Donec
                                            rhoncus vestibulum odio in
                                            scelerisque. Morbi in nibh at ligula
                                            euismod dictum. Vestibulum vitae
                                            felis sed urna sagittis ultrices.
                                            Curabitur sit amet lorem pharetra
                                            leo aliquet volutpat. Nunc vitae
                                            orci elementum, hendrerit ipsum nec,
                                            aliquam lacus. Sed dictum ipsum
                                            sapien, sit amet lacinia orci
                                            vestibulum vel. Quisque nunc erat,
                                            pellentesque at ligula eu, rutrum
                                            ornare libero.
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>
                            </InfoSection>
                            <InfoSection title={'For Clients'} order={3}>
                                <Accordion chevronPosition="left">
                                    <Accordion.Item value="item-1">
                                        <Accordion.Control>
                                            Contact an artist?
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            Etiam accumsan dapibus leo. Donec
                                            rhoncus vestibulum odio in
                                            scelerisque. Morbi in nibh at ligula
                                            euismod dictum. Vestibulum vitae
                                            felis sed urna sagittis ultrices.
                                            Curabitur sit amet lorem pharetra
                                            leo aliquet volutpat. Nunc vitae
                                            orci elementum, hendrerit ipsum nec,
                                            aliquam lacus. Sed dictum ipsum
                                            sapien, sit amet lacinia orci
                                            vestibulum vel. Quisque nunc erat,
                                            pellentesque at ligula eu, rutrum
                                            ornare libero.
                                        </Accordion.Panel>
                                    </Accordion.Item>

                                    <Accordion.Item value="item-2">
                                        <Accordion.Control>
                                            Create a moodboard?
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            Etiam accumsan dapibus leo. Donec
                                            rhoncus vestibulum odio in
                                            scelerisque. Morbi in nibh at ligula
                                            euismod dictum. Vestibulum vitae
                                            felis sed urna sagittis ultrices.
                                            Curabitur sit amet lorem pharetra
                                            leo aliquet volutpat. Nunc vitae
                                            orci elementum, hendrerit ipsum nec,
                                            aliquam lacus. Sed dictum ipsum
                                            sapien, sit amet lacinia orci
                                            vestibulum vel. Quisque nunc erat,
                                            pellentesque at ligula eu, rutrum
                                            ornare libero.
                                        </Accordion.Panel>
                                    </Accordion.Item>

                                    <Accordion.Item value="item-3">
                                        <Accordion.Control>
                                            Write a brief?
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            Etiam accumsan dapibus leo. Donec
                                            rhoncus vestibulum odio in
                                            scelerisque. Morbi in nibh at ligula
                                            euismod dictum. Vestibulum vitae
                                            felis sed urna sagittis ultrices.
                                            Curabitur sit amet lorem pharetra
                                            leo aliquet volutpat. Nunc vitae
                                            orci elementum, hendrerit ipsum nec,
                                            aliquam lacus. Sed dictum ipsum
                                            sapien, sit amet lacinia orci
                                            vestibulum vel. Quisque nunc erat,
                                            pellentesque at ligula eu, rutrum
                                            ornare libero.
                                        </Accordion.Panel>
                                    </Accordion.Item>

                                    <Accordion.Item value="item-4">
                                        <Accordion.Control>
                                            Avoid scams?
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            Etiam accumsan dapibus leo. Donec
                                            rhoncus vestibulum odio in
                                            scelerisque. Morbi in nibh at ligula
                                            euismod dictum. Vestibulum vitae
                                            felis sed urna sagittis ultrices.
                                            Curabitur sit amet lorem pharetra
                                            leo aliquet volutpat. Nunc vitae
                                            orci elementum, hendrerit ipsum nec,
                                            aliquam lacus. Sed dictum ipsum
                                            sapien, sit amet lacinia orci
                                            vestibulum vel. Quisque nunc erat,
                                            pellentesque at ligula eu, rutrum
                                            ornare libero.
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>
                            </InfoSection>
                        </InfoSection>
                        <InfoSection
                            title={'Online Artist Marketplaces'}
                            order={2}
                        >
                            <List>
                                <List.Item>
                                    <Anchor
                                        href={'https://artistree.io'}
                                        target={'_blank'}
                                    >
                                        https://artistree.io
                                    </Anchor>
                                </List.Item>
                                <List.Item>
                                    <Anchor
                                        href={'https://ko-fi.com'}
                                        target={'_blank'}
                                    >
                                        https://ko-fi.com
                                    </Anchor>
                                </List.Item>
                                <List.Item>
                                    <Anchor
                                        href={'https://vgen.co'}
                                        target={'_blank'}
                                    >
                                        https://vgen.co
                                    </Anchor>
                                </List.Item>
                            </List>
                        </InfoSection>
                        <InfoSection
                            title={'Looking Beyond ArtistConnect'}
                            order={2}
                        >
                            <List>
                                <List.Item>
                                    Looking for a portrait photographer at
                                    RIT?{' '}
                                </List.Item>
                                <List withPadding>
                                    <List.Item>
                                        <Anchor
                                            href={'https://modelsatrit.com/'}
                                            target={'_blank'}
                                        >
                                            Models at RIT
                                        </Anchor>
                                    </List.Item>
                                </List>
                                <List.Item>
                                    Looking for a portrait photographer at RIT?
                                </List.Item>
                                <List withPadding>
                                    <List.Item>
                                        <Anchor
                                            href={
                                                'https://commandg.cad.rit.edu/'
                                            }
                                            target={'_blank'}
                                        >
                                            Command + G
                                        </Anchor>
                                    </List.Item>
                                </List>
                                <List.Item>
                                    Creative Industry Day Index
                                </List.Item>
                                <List withPadding>
                                    <List.Item>
                                        <Anchor
                                            href={
                                                'https://creativity.cad.rit.edu/index.php'
                                            }
                                            target={'_blank'}
                                        >
                                            https://creativity.cad.rit.edu/index.php
                                        </Anchor>
                                    </List.Item>
                                </List>
                            </List>
                        </InfoSection>
                    </Stack>
                </Grid.Col>
            </Grid>
        </MainLayout>
    );
}
