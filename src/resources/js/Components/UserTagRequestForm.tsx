//"use client";


import { Link, useForm, usePage } from '@inertiajs/react';
import {
    Alert,
    Button,
    Group,
    Stack,
    Text,
    TextInput,
    Title,
} from '@mantine/core';
import { FormEventHandler } from 'react';

export default function UpdateProfileInformation() {
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
            <Title order={2}>Account Information</Title>
            <Text size={'sm'} c={'dimmed'}>
                Update your account's user information and email address.
            </Text>

            <form onSubmit={submit}>
                <Stack gap={'lg'} mt={'lg'}>
                    <TextInput
                        label={'Name'}
                        id="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        autoFocus={true}
                        autoComplete="name"
                        error={errors.name}
                    />
                    <TextInput
                        label={'Email'}
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                        error={errors.email}
                    />
                    {mustVerifyEmail && user.email_verified_at === null && (
                        <Alert color={'ac-yellow'}>
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
                                    A new verification link has been sent to
                                    your email address.
                                </div>
                            )}
                        </Alert>
                    )}
                    <Group align={'center'} justify={'end'} gap={'md'}>
                        <Button type={'submit'} loading={processing}>
                            {recentlySuccessful ? 'Saved' : 'Save'}
                        </Button>
                    </Group>
                </Stack>
            </form>
        </section>
    );
}

/*
import { useState } from 'react'
import { router } from '@inertiajs/react'

export default function Edit(){
    const [values, setValues] = useState({
        //THESE CORRESPOND TO INPUT FIELDS OF THE FORM.
        //CHANGE TO TAG-RELATED FIELDS.
        first_name: "",
        last_name: "",
        email: "",
    })

    function handleChange(e){
        //UDATES VALUES WHEN USER TYPES IN A FIELD

        //USES THE INPUT FIELD'S id
        //AS THE KEY TO KNOW WHICH PART OF values TO UPDATE
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e){
        //SENDS DATA TO THE SERVER
        e.preventDefault()
        //CHANGE ENDPOINT FROM /users TO /<tag-related>
        router.post('/users', values)
    }

    return (
        <form onSubmit={handleSubmit}>

            //Replace with Mantine Stuff
          <label htmlFor="first_name">First name:</label>
          <input id="first_name" value={values.first_name} onChange={handleChange} />
          <label htmlFor="last_name">Last name:</label>
          <input id="last_name" value={values.last_name} onChange={handleChange} />
          <label htmlFor="email">Email:</label>
          <input id="email" value={values.email} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      )

}
*/

