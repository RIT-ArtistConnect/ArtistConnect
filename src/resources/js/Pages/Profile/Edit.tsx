import MainLayout from '@/Layouts/MainLayout';
import { PageProps } from '@/types';
import { Stack } from '@mantine/core';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <MainLayout title={'Account'}>
            <Stack gap={'lg'}>
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                />
                <UpdatePasswordForm />
                <DeleteUserForm />
            </Stack>
        </MainLayout>
    );
}
