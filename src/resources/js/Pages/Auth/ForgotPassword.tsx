import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import MainLayout from "@/Layouts/MainLayout";
import {Button, Group, Stack, Text, TextInput} from "@mantine/core";

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <MainLayout title={"Forgot Password"}>
            <Text c={"dimmed"}>
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </Text>

            {status && (
                <Text c={"green"} size={"sm"} fw={"bold"}>
                    {status}
                </Text>
            )}

            <form onSubmit={submit}>
                <Stack gap={"lg"} mt={"lg"}>
                  <TextInput
                    label={"Email"}
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    autoFocus={true}
                    onChange={(e) => setData('email', e.target.value)}
                    required
                    error={errors.email}
                  />
                  <Group align={"center"} justify={"end"}>
                      <Button type={"submit"} loading={processing}>
                          Email Password Reset Link
                      </Button>
                  </Group>
                </Stack>
            </form>
        </MainLayout>
    );
}
