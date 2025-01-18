import { Anchor, Card, Image, SimpleGrid, Text, Title } from '@mantine/core';

interface Link {
    display: string;
    href: string;
}

interface Artist {
    name: string;
    imageSrc: string;
    links: Link[];
}
export default function FeaturedArtists() {
    const artists = Array(6).fill({
        name: 'Artist Name',
        imageSrc: 'https://placehold.co/300x300',
        links: [
            { display: '@ArtistName on Twitter', href: '' },
            { display: '@ArtistName on Bluesky', href: '' },
        ],
    });
    return (
        <>
            <Title order={2} my={'md'}>
                Featured Artists
            </Title>
            <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 3 }}>
                {artists.map((artist: Artist) => {
                    return (
                        <Card shadow="sm" padding="lg" key={artist.name}>
                            <Card.Section>
                                <Image src={artist.imageSrc} h={300} />
                            </Card.Section>

                            <Text fw={500} size="lg" mt="md">
                                {artist.name}
                            </Text>

                            {artist.links.map((link: Link) => {
                                return (
                                    <Anchor
                                        mt="xs"
                                        size="sm"
                                        href={link.href}
                                        key={link.display}
                                    >
                                        {link.display}
                                    </Anchor>
                                );
                            })}
                        </Card>
                    );
                })}
            </SimpleGrid>
        </>
    );
}
