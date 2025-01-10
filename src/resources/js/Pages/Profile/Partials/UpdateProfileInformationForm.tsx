import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import {Alert, Button, Group, Stack, Text, TextInput, Title} from "@mantine/core";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status
}: {
    mustVerifyEmail: boolean;
    status?: string;
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section>
            <Title order={2}>
                Account Information
            </Title>
            <Text size={"sm"} c={"dimmed"}>
                Update your account's user information and email address.
            </Text>

            <form onSubmit={submit}>
                <Stack gap={"lg"} mt={"lg"}>
                    <TextInput
                        label={"Name"}
                        id="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        autoFocus={true}
                        autoComplete="name"
                        error={errors.name}
                    />
                    <TextInput
                        label={"Email"}
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                        error={errors.email}
                    />
                    {mustVerifyEmail && user.email_verified_at === null && (
                        <Alert color={"orange"}>
                            Your email address is unverified.&nbsp;
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="a"
                            >
                                Click here to re-send the verification email.
                            </Link>
                            {status === 'verification-link-sent' && (
                                <div>
                                    A new verification link has been sent to your
                                    email address.
                                </div>
                            )}
                        </Alert>
                    )}
                    <Group align={"center"} justify={"end"} gap={"md"}>
                        <Button type={"submit"} disabled={processing}>{recentlySuccessful ? "Saved" : "Save"}</Button>
                    </Group>
                </Stack>
            </form>
        </section>
    );
}
