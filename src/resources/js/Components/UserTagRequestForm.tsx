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

import { TagType } from '@/types/enums';
import { useForm, usePage } from '@inertiajs/react';
import {
    Button,
    CloseButton,
    Group,
    Input,
    Select,
    Stack,
    Text,
    TextInput,
    Title,
} from '@mantine/core';
import { FormEventHandler, use, useEffect, useState } from 'react';


//

// export default function UserTagRequestForm() {
//     const user = usePage().props.auth.user;

//     const { data, setData, patch, errors, processing, recentlySuccessful } =
//         useForm({
//             name: user.name,
//             email: user.email,
//         });//Get rid of this...???

//     const submit: FormEventHandler = (e) => {
//         e.preventDefault();

//         patch(route('profile.update'));//and rid of this probably
//     };

export default function UserTagRequestForm(){

    //Set up state to store selected Type
    const [selectedType, setselectedType] = useState("");
    const [chosenName, setchosenName] = useState("Enter a name");
    //Initial value is empty

    //Reset form when modal is closed
    //The resetting works without this???
    // useEffect(()=>{
    //     setselectedType("");
    //     setchosenName("Enter a name");
    // }, [close]);

    const handleSelectChange = (value: string | null) =>{
        if(value !== null){
            setselectedType(value); //Updates state w/ selected Type
            console.log("Selected Type: ", value); // Shows selected Type
        }else{
            setselectedType("");
        }
    }

    const handleNameChange = (value: string) =>{
        setchosenName(value); //Updates state w/ selected Type
        console.log("Selected Type: ", value); // Shows selected Type
    }

    const submit = (event: React.FormEvent) => {
        event.preventDefault(); //Stops page from reloading on form submission
        //Need to submit both selectedType and chosenName and maybe other things too??
        console.log("Form submitted w/ selected Type:", selectedType);
        //Here can send to backend?
    }

    return (
        <section>
            <Title order={2}>User Tag Request Form</Title>

            <Text size={'sm'} c={'dimmed'}>
                Request a tag to be added to your profile. If you are an admin,
                this will automatically be processed.
            </Text>

            <form onSubmit={submit}>

                <Input
                
                placeholder="Clearable input"
                value={chosenName}
                onChange={(event)=>handleNameChange(event.target.value)} //Fixed
                rightSectionPointerEvents='all'
                mt="md"//Margin top
                rightSection={chosenName && <CloseButton
                        aria-label="Clear input"
                        onClick={()=> setchosenName('')}
                    />}
                
                />

                <Select
                    label="Requested Tag Type"
                    placeholder="Pick a type"
                    data={[TagType.DISCIPLINE, TagType.MEDIA, TagType.STYLE]}
                    value={selectedType}
                    onChange={(value) => handleSelectChange(value)}
                />

                <Button
                    type="submit" //Unsure exactly what a type does here
                    style={({ marginTop: 10})}
                    //onClick={submit}//Is this part necessary?
                >
                    Submit
                </Button>
            </form>
        </section>
    );
}

