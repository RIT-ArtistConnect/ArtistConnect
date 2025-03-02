import MainLayout from '@/Layouts/MainLayout';
import { Link, useForm } from '@inertiajs/react';
import {
    Button,
    Checkbox,
    Group,
    PasswordInput,
    Stack,
    Text,
    TextInput,
} from '@mantine/core';
import { FormEventHandler } from 'react';

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm<{
        email: string;
        password: string;
        remember: boolean;
    }>({
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
        <MainLayout title={'Log in'}>
            {status && (
                <Text c={'green'} size={'sm'} fw={'bold'}>
                    {status}
                </Text>
            )}

            <form onSubmit={submit}>
                <Stack gap={'lg'} mt={'lg'}>
                    <TextInput
                        label={'Email'}
                        id="email"
                        name="email"
                        value={data.email}
                        autoComplete="username"
                        autoFocus={true}
                        onChange={(e) => setData('email', e.target.value)}
                        error={errors.email}
                        required
                        styles={{ input: { backgroundColor: '#fff' } }}
                    />
                    <PasswordInput
                        label={'Password'}
                        id="password"
                        name="password"
                        value={data.password}
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        error={errors.password}
                        required
                    />
                    <Group align={'center'} justify={'end'} gap={'lg'}>
                        <Checkbox
                            label={'Remember me'}
                            name={'remember'}
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        {canResetPassword && (
                            <Link as={'a'} href={route('password.request')}>
                                Forgot your password?
                            </Link>
                        )}
                        <Button type={'submit'} loading={processing}>
                            Log in
                        </Button>
                    </Group>
                </Stack>
            </form>
        </MainLayout>
    );
}
