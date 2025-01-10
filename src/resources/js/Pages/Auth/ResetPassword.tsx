import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import MainLayout from "@/Layouts/MainLayout";
import {Button, Group, Stack, TextInput} from "@mantine/core";

export default function ResetPassword({
    token,
    email,
}: {
    token: string;
    email: string;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <MainLayout title={"Reset Password"}>
            <form onSubmit={submit}>
                <Stack gap={"lg"} mt={"lg"}>
                    <TextInput
                        label={"Email"}
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        error={errors.email}
                    />
                    <TextInput
                        label={"Password"}
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        autoComplete="new-password"
                        autoFocus={true}
                        onChange={(e) => setData('password', e.target.value)}
                        required
                        error={errors.password}
                    />
                    <TextInput
                        label={"Confirm Password"}
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                        error={errors.password_confirmation}
                    />
                    <Group align={"center"} justify={"end"}>
                        <Button disabled={processing} type={"submit"}>Reset Password</Button>
                    </Group>
                </Stack>
            </form>
        </MainLayout>
    );
}
