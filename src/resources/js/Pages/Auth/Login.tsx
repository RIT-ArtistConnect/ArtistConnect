import { Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import MainLayout from "@/Layouts/MainLayout";
import {Button, Checkbox, Group, Stack, Text, TextInput} from "@mantine/core";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <MainLayout title={"Log in"}>
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
                        autoComplete="username"
                        autoFocus={true}
                        onChange={(e) => setData('email', e.target.value)}
                        error={errors.email}
                        required
                    />
                    <TextInput
                        label={"Password"}
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        error={errors.password}
                        required
                    />
                    <Group align={"center"} justify={"end"} gap={"lg"}>
                        <Checkbox
                            label={"Remember me"}
                            name={"remember"}
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        {canResetPassword && (
                            <Link as={"a"}
                                href={route('password.request')}
                            >
                                Forgot your password?
                            </Link>
                        )}
                        <Button type={"submit"} loading={processing}>
                            Log in
                        </Button>
                    </Group>
                </Stack>
            </form>
        </MainLayout>
    );
}
