import MainLayout from '@/Layouts/MainLayout';
import { Link, useForm } from '@inertiajs/react';
import { Button, Group, PasswordInput, Stack, TextInput } from '@mantine/core';
import { FormEventHandler } from 'react';

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
        <MainLayout title={'Register'}>
            <form onSubmit={submit}>
                <Stack gap={'lg'} mt={'lg'}>
                    <TextInput
                        label={'Name'}
                        id={'name'}
                        value={data.name}
                        autoComplete={'name'}
                        autoFocus={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        error={errors.name}
                        styles={{ input: { backgroundColor: '#fff' } }}
                    />
                    <TextInput
                        label={'Email'}
                        id="email"
                        name="email"
                        value={data.email}
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        error={errors.email}
                        styles={{ input: { backgroundColor: '#fff' } }}
                    />
                    <PasswordInput
                        label={'Password'}
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                        error={errors.password}
                        styles={{ input: { backgroundColor: '#fff' } }}
                    />
                    <PasswordInput
                        label={'Confirm Password'}
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
                        styles={{ input: { backgroundColor: '#fff' } }}
                    />
                    <Group align={'center'} justify={'end'} gap={'lg'}>
                        <Link href={route('login')} as={'a'}>
                            Already registered?
                        </Link>

                        <Button type={'submit'} loading={processing}>
                            Register
                        </Button>
                    </Group>
                </Stack>
            </form>
        </MainLayout>
    );
}
