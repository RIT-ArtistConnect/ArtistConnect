import MainLayout from "@/Layouts/MainLayout";
import {Card, Grid, Stack, Title} from "@mantine/core";
import {Link} from "@inertiajs/react";
import {IconUsers} from "@tabler/icons-react";

export default function AdminHome({userCount}: {userCount: number}) {
    return <MainLayout title={"Admin Homepage"}>
        <Grid>
            <Grid.Col span={4}>
                <Link href={route("admin.users")}>
                    <Card bg={"ac-blue"}>
                        <Stack gap={"md"}>
                            <IconUsers/>
                            <Title order={3}>{userCount} Users</Title>
                        </Stack>
                    </Card>
                </Link>
            </Grid.Col>
        </Grid>
    </MainLayout>
}
