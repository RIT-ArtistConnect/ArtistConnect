import {ReactNode} from "react";
import {usePage} from "@inertiajs/react";
import {AppShell, Group, MantineProvider} from "@mantine/core";
import ApplicationLogo from "@/Components/ApplicationLogo";
import MantineNavLink from "@/Components/MantineNavLink";

export interface MainLayoutProps {
    children: ReactNode
}

export default function MainLayout(props: MainLayoutProps) {
    const user = usePage().props.auth.user;
    console.log(user)
    return <MantineProvider>
        <AppShell
        header={{height: 60}}
    >
            <AppShell.Header>
                <Group h={60} justify={"space-between"} align={"center"} ps={"md"} pe={"md"}>
                    <ApplicationLogo height={"50px"}/>
                    {user
                        ? <Group>
                            <MantineNavLink href={route('logout')} active={false} method={"post"}>Logout</MantineNavLink>
                        </Group>
                        : <Group>
                            <MantineNavLink href={route('register')} active={route().current('register')}>Register</MantineNavLink>
                            <MantineNavLink href={route('login')} active={route().current('login')}>Login</MantineNavLink>
                        </Group>}
                </Group>
            </AppShell.Header>
            <AppShell.Main>
                {props.children}
            </AppShell.Main>
        </AppShell>
    </MantineProvider>
}
