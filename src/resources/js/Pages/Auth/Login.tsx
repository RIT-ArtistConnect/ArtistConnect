import { Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import MainLayout from "@/Layouts/MainLayout";
import {Button, Checkbox, Group, Stack, TextInput, Title} from "@mantine/core";

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
            <Title order={1}>Log In</Title>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
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
                        <Button type={"submit"} disabled={processing}>
                            Log in
                        </Button>
                    </Group>
                </Stack>
            </form>
        </MainLayout>
    );
}
