import ApplicationLogo from '@/Components/ApplicationLogo';
import MantineNavLink from '@/Components/MantineNavLink';
import { Head, usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';
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
import UnstyledLink from "@/Components/UnstyledLink";

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
                footer={{ height: 120, offset: false }}
            >
                <AppShell.Header>
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
                                <MantineNavLink href={''}>
                                    About
                                </MantineNavLink>
                                {user && (
                                    <>
                                        {user.email_verified_at && (
                                            <>
                                                <MantineNavLink href={''}>
                                                    Discover
                                                </MantineNavLink>
                                                <MantineNavLink href={''}>
                                                    Submit
                                                </MantineNavLink>
                                                <MantineNavLink href={''}>
                                                    Resources
                                                </MantineNavLink>
                                            </>
                                        )}
                                    </>
                                )}
                                {user && user.is_admin && (
                                    <MantineNavLink
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
                                                    router.post(route('logout'))
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
                                <MantineNavLink href={route('register')}>
                                    Register
                                </MantineNavLink>
                                <MantineNavLink href={route('login')}>
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
                                <MantineNavLink fullWidth href={route('admin')}>
                                    Admin
                                </MantineNavLink>
                            )}
                            <MantineNavLink fullWidth href={''}>
                                About
                            </MantineNavLink>
                            {user.email_verified_at && (
                                <>
                                    <MantineNavLink fullWidth href={''}>
                                        Discover
                                    </MantineNavLink>
                                    <MantineNavLink fullWidth href={''}>
                                        Submit
                                    </MantineNavLink>
                                    <MantineNavLink fullWidth href={''}>
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
                                fullWidth
                                href={route('profile.edit')}
                            >
                                Account
                            </MantineNavLink>
                            <Button
                                fullWidth
                                onClick={() => {
                                    router.post(route('logout'))
                                }}
                                variant={'subtle'}
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <MantineNavLink fullWidth href={route('register')}>
                                Register
                            </MantineNavLink>
                            <MantineNavLink fullWidth href={route('login')}>
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
                <AppShell.Footer style={{ position: 'relative' }}>
                    <Group
                        gap={'xl'}
                        justify={'end'}
                        align={'start'}
                        pe={'xl'}
                        pt={'sm'}
                    >
                        <Stack gap={'0.2em'}>
                            <Title order={4}>ArtistConnect</Title>
                            <Anchor href={''}>Terms of Service</Anchor>
                            <Anchor href={''}>Privacy Policy</Anchor>
                            <Anchor href={''}>Email</Anchor>
                        </Stack>
                        <Stack
                            gap={'0.2em'}
                            h={120}
                            justify={'start'}
                            align={'start'}
                        >
                            <Title order={4}>RIT Drawing Club</Title>
                            <Anchor href={''}>CampusGroups</Anchor>
                            <Anchor href={''}>Discord Server</Anchor>
                            <Anchor href={''}>Email</Anchor>
                        </Stack>
                    </Group>
                </AppShell.Footer>
            </AppShell>
        </>
    );
}
