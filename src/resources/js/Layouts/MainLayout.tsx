import ApplicationLogo from '@/Components/ApplicationLogo';
import MantineNavLink from '@/Components/MantineNavLink';
import UnstyledLink from '@/Components/UnstyledLink';
import { Head, router, usePage } from '@inertiajs/react';
import {
    Anchor,
    AppShell,
    Burger,
    Button,
    Container,
    Group,
    Menu,
    Stack,
    Text,
    Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ReactNode } from 'react';

export interface MainLayoutProps {
    children: ReactNode;
    title?: string;
}

export default function MainLayout(props: MainLayoutProps) {
    const user = usePage().props.auth.user;
    const [opened, { toggle }] = useDisclosure(false);
    return (
        <>
            <Head title={props.title || 'RIT ArtistConnect'} />
            <AppShell
                header={{ height: 60 }}
                navbar={{
                    width: 300,
                    breakpoint: 'sm',
                    collapsed: { desktop: true, mobile: !opened },
                }}
                footer={{ height: 120, offset: true }}
            >
                <AppShell.Header bg={'#332258'}>
                    <Group
                        h={60}
                        justify={'space-between'}
                        align={'center'}
                        ps={'md'}
                        pe={'md'}
                    >
                        <Group gap={'md'}>
                            <Group gap={'md'}>
                                <Burger
                                    opened={opened}
                                    onClick={toggle}
                                    hiddenFrom="sm"
                                    size="sm"
                                />
                                <UnstyledLink href={route('homepage')}>
                                    <ApplicationLogo height={'40px'} />
                                </UnstyledLink>
                            </Group>
                            <Group gap={'sm'} visibleFrom={'sm'}>
                                <MantineNavLink
                                    href={route('about')}
                                    buttonProps={{ color: '#FAF8FF' }}
                                >
                                    About
                                </MantineNavLink>
                                <MantineNavLink
                                    buttonProps={{ color: '#FAF8FF' }}
                                    href={route('resources')}
                                >
                                    Resources
                                </MantineNavLink>
                                {user && (
                                    <>
                                        {user.email_verified_at && (
                                            <>
                                                <MantineNavLink
                                                    href={''}
                                                    buttonProps={{
                                                        color: '#FAF8FF',
                                                    }}
                                                >
                                                    Discover
                                                </MantineNavLink>
                                                <MantineNavLink
                                                    href={''}
                                                    buttonProps={{
                                                        color: '#FAF8FF',
                                                    }}
                                                >
                                                    Submit
                                                </MantineNavLink>
                                                <MantineNavLink
                                                    href={''}
                                                    buttonProps={{
                                                        color: '#FAF8FF',
                                                    }}
                                                >
                                                    Resources
                                                </MantineNavLink>
                                            </>
                                        )}
                                    </>
                                )}
                                {user && user.is_admin && (
                                    <MantineNavLink
                                        buttonProps={{ color: '#FAF8FF' }}
                                        fullWidth
                                        href={route('admin')}
                                    >
                                        Admin
                                    </MantineNavLink>
                                )}
                            </Group>
                        </Group>
                        {user ? (
                            <Group visibleFrom={'sm'}>
                                <Menu shadow={'md'}>
                                    <Menu.Target>
                                        <Button variant={'subtle'}>
                                            {user.name}
                                        </Button>
                                    </Menu.Target>
                                    <Menu.Dropdown>
                                        <Menu.Item p={0}>
                                            <MantineNavLink
                                                buttonProps={{
                                                    color: '#FAF8FF',
                                                }}
                                                fullWidth
                                                variant={'subtle'}
                                                href={route('profile.edit')}
                                            >
                                                Account
                                            </MantineNavLink>
                                        </Menu.Item>
                                        <Menu.Item p={0}>
                                            <Button
                                                fullWidth
                                                variant={'subtle'}
                                                onClick={() => {
                                                    router.post(
                                                        route('logout'),
                                                    );
                                                }}
                                            >
                                                Logout
                                            </Button>
                                        </Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                            </Group>
                        ) : (
                            <Group>
                                <MantineNavLink
                                    href={route('register')}
                                    buttonProps={{ color: '#FAF8FF' }}
                                >
                                    Register
                                </MantineNavLink>
                                <MantineNavLink
                                    href={route('login')}
                                    buttonProps={{ color: '#FAF8FF' }}
                                >
                                    Login
                                </MantineNavLink>
                            </Group>
                        )}
                    </Group>
                </AppShell.Header>
                <AppShell.Navbar py={'md'} px={4}>
                    {user ? (
                        <>
                            {user.is_admin && (
                                <MantineNavLink
                                    fullWidth
                                    href={route('admin')}
                                    buttonProps={{ color: '#FAF8FF' }}
                                >
                                    Admin
                                </MantineNavLink>
                            )}
                            <MantineNavLink
                                fullWidth
                                href={''}
                                buttonProps={{ color: '#FAF8FF' }}
                            >
                                About
                            </MantineNavLink>
                            {user.email_verified_at && (
                                <>
                                    <MantineNavLink
                                        fullWidth
                                        href={''}
                                        buttonProps={{ color: '#FAF8FF' }}
                                    >
                                        Discover
                                    </MantineNavLink>
                                    <MantineNavLink
                                        fullWidth
                                        href={''}
                                        buttonProps={{ color: '#FAF8FF' }}
                                    >
                                        Submit
                                    </MantineNavLink>
                                    <MantineNavLink
                                        fullWidth
                                        href={''}
                                        buttonProps={{ color: '#FAF8FF' }}
                                    >
                                        Resources
                                    </MantineNavLink>
                                </>
                            )}
                            <hr />
                            <Stack my={'xs'} ms={'lg'} gap={'0'}>
                                <Text size={'md'}>{user.name}</Text>
                                <Text size={'sm'} c={'dimmed'}>
                                    {user.email}
                                </Text>
                            </Stack>
                            <hr />
                            <MantineNavLink
                                buttonProps={{ color: '#FAF8FF' }}
                                fullWidth
                                href={route('profile.edit')}
                            >
                                Account
                            </MantineNavLink>
                            <Button
                                fullWidth
                                onClick={() => {
                                    router.post(route('logout'));
                                }}
                                variant={'subtle'}
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <MantineNavLink
                                fullWidth
                                href={route('register')}
                                buttonProps={{ color: '#FAF8FF' }}
                            >
                                Register
                            </MantineNavLink>
                            <MantineNavLink
                                fullWidth
                                href={route('login')}
                                buttonProps={{ color: '#FAF8FF' }}
                            >
                                Login
                            </MantineNavLink>
                        </>
                    )}
                </AppShell.Navbar>
                <AppShell.Main>
                    <Container mt={'xl'} mb={'lg'}>
                        {props.title && (
                            <Title order={1} mb={'md'}>
                                {props.title}
                            </Title>
                        )}
                        {props.children}
                    </Container>
                </AppShell.Main>
                <AppShell.Footer
                    style={{ position: 'relative' }}
                    bg={'#332258'}
                >
                    <Group gap={'xl'} justify={'end'} align={'start'} pe={'xl'}>
                        <Stack gap={'0.2em'}>
                            <Title order={4} c={'#FAF8FF'}>
                                ArtistConnect
                            </Title>
                            <Anchor href={''} c={'#FAF8FF'}>
                                Terms of Service
                            </Anchor>
                            <Anchor href={''} c={'#FAF8FF'}>
                                Privacy Policy
                            </Anchor>
                            <Anchor href={''} c={'#FAF8FF'}>
                                Email
                            </Anchor>
                        </Stack>
                        <Stack gap={'0.2em'} justify={'start'} align={'start'}>
                            <Title order={4} c={'#FAF8FF'}>
                                RIT Drawing Club
                            </Title>
                            <Anchor href={''} c={'#FAF8FF'}>
                                CampusGroups
                            </Anchor>
                            <Anchor href={''} c={'#FAF8FF'}>
                                Discord Server
                            </Anchor>
                            <Anchor href={''} c={'#FAF8FF'}>
                                Email
                            </Anchor>
                        </Stack>
                    </Group>
                </AppShell.Footer>
            </AppShell>
        </>
    );
}
