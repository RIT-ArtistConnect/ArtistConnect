import MainLayout from "@/Layouts/MainLayout";
import {ActionIcon, Group, Table, Tooltip, useMantineTheme} from "@mantine/core";
import {User} from "@/types";
import {
    IconCircleCheck,
    IconCircleX,
    IconUserCancel,
    IconUserCheck,
    IconUserDown, IconUserQuestion, IconUserShield,
    IconUserUp
} from "@tabler/icons-react";
import {router} from "@inertiajs/react"
import axios from "axios";

export default function Users({users}: {users: User[]}) {
    const theme = useMantineTheme()
    return <MainLayout title={"Users"}>
        <Table>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>ID</Table.Th>
                    <Table.Th>Name</Table.Th>
                    <Table.Th>Email</Table.Th>
                    <Table.Th>Status</Table.Th>
                    <Table.Th>Admin</Table.Th>
                    <Table.Th>Actions</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                {users.map((user) => {
                    return <Table.Tr>
                        <Table.Td>{user.id}</Table.Td>
                        <Table.Td>{user.name}</Table.Td>
                        <Table.Td>{user.email}</Table.Td>
                        <Table.Td>{user.is_banned ? <Tooltip label={"Banned"}><IconUserCancel color={"red"}/></Tooltip> : user.email_verified_at ? <Tooltip label={"Verified Email"}><IconUserCheck color={"green"}/></Tooltip> : <Tooltip label={"Unverified"}><IconUserQuestion color={theme.colors["ac-yellow"][5]}/></Tooltip>}</Table.Td>
                        <Table.Td>{user.is_admin ? <IconCircleCheck color={"green"}/> : <IconCircleX color={"red"}/>}</Table.Td>
                        <Table.Td>
                            <Group gap={"sm"}>
                                <Tooltip label={user.is_admin ? "Demote to User" : "Promote to Admin"}>
                                    <ActionIcon bg={"ac-blue"} onClick={() => {
                                        axios.post(route('admin.users.setAdmin', {user: user.id, admin: !user.is_admin})).then(() => {
                                            router.reload({only: ['users']})
                                        })
                                    }}>{user.is_admin ? <IconUserDown/> : <IconUserUp/>}</ActionIcon>
                                </Tooltip>
                                <Tooltip label={user.is_banned ? "Unban User" : "Ban User"}>
                                    <ActionIcon bg={user.is_banned ? "ac-purple" : "ac-orange"} onClick={() => {
                                        axios.post(route('admin.users.setBanned', {user: user.id, banned: !user.is_banned})).then(() => {
                                            router.reload({only: ['users']})
                                        })
                                    }}>{user.is_banned ? <IconUserShield/> : <IconUserCancel/>}</ActionIcon>
                                </Tooltip>
                            </Group>
                        </Table.Td>
                    </Table.Tr>
                })}
            </Table.Tbody>
        </Table>
    </MainLayout>
}
