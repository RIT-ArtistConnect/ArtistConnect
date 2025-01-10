import { useForm } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';
import {Button, Group, Stack, Text, TextInput, Title} from "@mantine/core";

export default function UpdatePasswordForm() {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <section>
            <Title order={2}>Update Password</Title>
            <Text size={"sm"} c={"dimmed"}>
                Ensure your account is using a long, random password to stay
                secure.
            </Text>

            <form onSubmit={updatePassword}>
                <Stack gap={"lg"} mt={"lg"}>
                    <TextInput
                        label={"Current Password"}
                        required
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) =>
                            setData('current_password', e.target.value)
                        }
                        type="password"
                        autoComplete="current-password"
                        error={errors.current_password}
                    />
                    <TextInput
                        label={"New Password"}
                        required
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        error={errors.password}
                    />
                    <TextInput
                        label={"Confirm Password"}
                        required
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        type="password"
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        error={errors.password_confirmation}
                    />
                    <Group align={"center"} justify={"end"} gap={"md"}>
                        <Button disabled={processing}>{recentlySuccessful ? "Saved" : "Save"}</Button>
                    </Group>
                </Stack>
            </form>
        </section>
    );
}
