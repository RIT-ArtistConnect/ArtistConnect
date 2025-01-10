import { Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import MainLayout from "@/Layouts/MainLayout";
import {Button, Group, Stack, TextInput, Title} from "@mantine/core";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <MainLayout title={"Register"}>
            <Title order={1}>Register</Title>
            <form onSubmit={submit}>
                <Stack gap={"lg"} mt={"lg"}>
                    <TextInput
                        label={"Name"}
                        id={"name"}
                        value={data.name}
                        autoComplete={"name"}
                        autoFocus={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        error={errors.name}
                    />
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
                        onChange={(e) => setData('password', e.target.value)}
                        required
                        error={errors.password}
                    />
                    <TextInput
                        label={"Confirm Password"}
                        id="password_confirmation"
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
                    <Group align={"center"} justify={"end"} gap={"lg"}>
                        <Link href={route('login')} as={"a"}>
                            Already registered?
                        </Link>

                        <Button type={"submit"} disabled={processing}>
                            Register
                        </Button>
                    </Group>
                </Stack>
            </form>
        </MainLayout>
    );
}
