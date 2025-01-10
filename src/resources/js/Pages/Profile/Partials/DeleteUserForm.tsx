import { useForm } from '@inertiajs/react';
import { FormEventHandler, useRef, useState } from 'react';
import {Button, Group, Modal, Stack, Text, TextInput, Title} from "@mantine/core";

export default function DeleteUserForm() {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section>
            <Title order={2}>
                Delete Account
            </Title>
            <Text size={"sm"} c={"dimmed"}>
                Once your account is deleted, all of its resources and data
                will be permanently deleted. Before deleting your account,
                please download any data or information that you wish to
                retain.
            </Text>

            <Button color={"ac-orange"} mt={"lg"} mb={"lg"} onClick={confirmUserDeletion}>
                Delete Account
            </Button>

            <Modal
                opened={confirmingUserDeletion}
                onClose={closeModal}
                title={"Are you sure you want to delete your account?"}
            >
                <form onSubmit={deleteUser}>
                    <Text c={"dimmed"} size={"sm"}>
                        Once your account is deleted, all of its resources and
                        data will be permanently deleted. Please enter your
                        password to confirm you would like to permanently delete
                        your account.
                    </Text>

                    <Stack gap={"lg"} mt={"lg"}>
                        <TextInput
                            label={"Password"}
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            className="mt-1 block w-3/4"
                            autoFocus
                            placeholder="Password"
                            required
                            error={errors.password}
                        />
                        <Group align={"center"} justify={"end"} gap={"md"}>
                            <Button color={"gray"} onClick={closeModal}>Cancel</Button>
                            <Button color={"ac-orange"} type={"submit"} disabled={processing}>Delete Account</Button>
                        </Group>
                    </Stack>
                </form>
            </Modal>
        </section>
    );
}
