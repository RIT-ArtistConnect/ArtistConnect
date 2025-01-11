import {ReactNode} from "react";
import {Head, usePage} from "@inertiajs/react";
import {
    AppShell,
    Burger,
    Button,
    Container,
    Group,
    Menu,
    Stack,
    Text,
    Title
} from "@mantine/core";
import ApplicationLogo from "@/Components/ApplicationLogo";
import MantineNavLink from "@/Components/MantineNavLink";
import {useDisclosure} from '@mantine/hooks'

export interface MainLayoutProps {
    children: ReactNode
    title?: string
}

export default function MainLayout(props: MainLayoutProps) {
    const user = usePage().props.auth.user;
    const [opened, {toggle}] = useDisclosure(false)
    return <>
        <Head title={props.title || "RIT ArtistConnect"} />
        <AppShell
            header={{height: 60}}
            navbar={{width: 300, breakpoint: 'sm', collapsed: {desktop: true, mobile: !opened}}}
        >
            <AppShell.Header>
                <Group h={60} justify={"space-between"} align={"center"} ps={"md"} pe={"md"}>
                    <Group gap={"md"}>
                        <Group gap={"md"}>
                            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                            <ApplicationLogo height={"50px"}/>
                        </Group>
                        <Group gap={"md"} visibleFrom={"sm"}>
                            {user && <MantineNavLink href={route('dashboard')}>Dashboard</MantineNavLink>}
                            {(user && user.is_admin) && <MantineNavLink fullWidth href={route('admin')}>Admin</MantineNavLink>}
                        </Group>
                    </Group>
                    {user
                        ? <Group visibleFrom={"sm"}>
                            <Menu shadow={"md"}>
                                <Menu.Target>
                                    <Button variant={"subtle"}>{user.name}</Button>
                                </Menu.Target>
                                <Menu.Dropdown>
                                    <Menu.Item p={0}>
                                        <MantineNavLink fullWidth variant={"subtle"} href={route('profile.edit')}>Account</MantineNavLink>
                                    </Menu.Item>
                                    <Menu.Item p={0}>
                                        <MantineNavLink fullWidth variant={"subtle"} href={route('logout')} method={"post"}>Logout</MantineNavLink>
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </Group>
                        : <Group>
                            <MantineNavLink href={route('register')}>Register</MantineNavLink>
                            <MantineNavLink href={route('login')}>Login</MantineNavLink>
                        </Group>}
                </Group>
            </AppShell.Header>
            <AppShell.Navbar py={"md"} px={4}>
                {user
                ? <>
                    {user.is_admin && <MantineNavLink fullWidth href={route('admin')}>Admin</MantineNavLink>}
                    <MantineNavLink fullWidth href={route('dashboard')}>Dashboard</MantineNavLink>
                    <hr/>
                    <Stack my={"xs"} ms={"lg"} gap={"0"}>
                        <Text size={"md"}>{user.name}</Text>
                        <Text size={"sm"} c={"dimmed"}>{user.email}</Text>
                    </Stack>
                    <hr/>
                    <MantineNavLink fullWidth href={route('profile.edit')}>Account</MantineNavLink>
                    <MantineNavLink fullWidth href={route('logout')} method={"post"}>Logout</MantineNavLink>
                </>
                : <>
                    <MantineNavLink fullWidth href={route('register')}>Register</MantineNavLink>
                    <MantineNavLink fullWidth href={route('login')}>Login</MantineNavLink>
                </>}
            </AppShell.Navbar>
            <AppShell.Main>
                <Container mt={"xl"}>
                    {props.title && <Title order={1} mb={"md"}>{props.title}</Title>}
                    {props.children}
                </Container>
            </AppShell.Main>
        </AppShell>
    </>
}
