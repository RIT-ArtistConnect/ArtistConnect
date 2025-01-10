import MainLayout from "@/Layouts/MainLayout";
import {Card} from "@mantine/core";

export default function Dashboard() {
    return (
        <MainLayout title={"Dashboard"}>
            <Card shadow={"md"}>
                You're logged in!
            </Card>
        </MainLayout>
    );
}
