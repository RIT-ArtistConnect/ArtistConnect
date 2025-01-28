//"use client";
/**
 * The fields required for the Tag are:

    Tag Name [string]
    Type [enum TagType, options below]
        Discipline
        Media
        Style

Make the form as a component, and create a separate page DevTesting 
(/devtesting) to aid in your development and testing of the component. 
The form should use the Inertia useForm hook (not the Mantine one)

The form should either:

    take a prop to determine whether an admin user submitting the form should skip the request flow
    use the active user to show the user a choice (similar to the GitHub issue close with comment button - see below)
    if the active user is an admin, should they always skip the request flow?

 */


import { Link, useForm, usePage } from '@inertiajs/react';
import {
    Alert,
    Button,
    Group,
    Select,
    Stack,
    Text,
    TextInput,
    Title,
} from '@mantine/core';
import { FormEventHandler } from 'react';

//The Tag Stuff
let name: String = "";

enum TagType{
    Discipline = "Discipline",
    Media = "Media",
    Style = "Style"
}
//


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
            <Title order={2}>User Tag Request Form</Title>
            
            <Text size={'sm'} c={'dimmed'}>
                Request a tag to be added to your profile. If you are an admin, this will automatically be processed.
                {/**Change? */}
                
            </Text>

            <form onSubmit={submit}>
                <Select
                label="Your favorite library"
                placeholder="Pick value"
                data={[TagType.Discipline, TagType.Media, TagType.Style]}
                />

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

