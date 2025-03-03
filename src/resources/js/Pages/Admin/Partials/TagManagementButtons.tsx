import TooltipActionIcon from '@/Components/TooltipActionIcon';
import { Tag } from '@/types';
import { TagAction, TagActionImperative } from "@/types/enums";
import { useForm } from '@inertiajs/react';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { modals } from '@mantine/modals';
import { IconCheck, IconEdit, IconTagOff, IconX } from '@tabler/icons-react';
import { FormEvent } from 'react';

function TagManagementModal({
    action,
    routeName,
    returnRoute,
    tag,
}: {
    action: TagAction;
    routeName: string;
    returnRoute: string;
    tag: Tag;
}) {
    const defaultConfirmFields = {
        tag: tag.id,
        note: '',
        returnRoute: returnRoute,
    };
    const defaultEditFields = {
        tag: tag.id,
        note: '',
        label: tag.label,
        type: tag.type,
        returnRoute: returnRoute,
    };
    const { data, setData, post, processing, errors } = useForm(
        action == TagAction.UPDATED ? defaultEditFields : defaultConfirmFields,
    );

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route(routeName, data), {
            onSuccess: () => {
                modals.closeAll();
            },
        });
    };

    return (
        <form onSubmit={submit}>
            <Stack>
                <TextInput
                    label={'Note/Reason'}
                    required={[
                        TagAction.UPDATED,
                        TagAction.DENIED,
                        TagAction.RETIRED,
                    ].includes(action)}
                    value={data.note}
                    onChange={(e) => {
                        setData('note', e.currentTarget.value);
                    }}
                    error={errors.note}
                    disabled={processing}
                />

                <Group>
                    <Button
                        color={'gray'}
                        onClick={modals.closeAll}
                        disabled={processing}
                    >
                        Cancel
                    </Button>
                    <Button color={'ac-blue'} loading={processing} type={'submit'}>
                        {TagActionImperative(action)}
                    </Button>
                </Group>
            </Stack>
        </form>
    );
}

export default function TagManagementButtons({
    tag,
    returnRoute,
}: {
    tag: Tag;
    returnRoute: string;
}) {
    const openModal = (action: TagAction) =>
        modals.open({
            title: `${TagActionImperative(action)} Tag?`,
            children: (
                <TagManagementModal
                    action={action}
                    routeName={`admin.tags.${TagActionImperative(action).toLowerCase()}`}
                    returnRoute={returnRoute}
                    tag={tag}
                />
            ),
        });

    return (
        <Group gap={'sm'}>
            {tag.latest_history.action == TagAction.REQUESTED && (
                <>
                    <TooltipActionIcon
                        tooltip={TagActionImperative(TagAction.APPROVED)}
                        color={'green'}
                        onClick={() => openModal(TagAction.APPROVED)}
                    >
                        <IconCheck />
                    </TooltipActionIcon>
                    <TooltipActionIcon
                        tooltip={TagActionImperative(TagAction.DENIED)}
                        color={'red'}
                        onClick={() => openModal(TagAction.DENIED)}
                    >
                        <IconX />
                    </TooltipActionIcon>
                </>
            )}
            {tag.active && (
                <TooltipActionIcon
                    tooltip={TagActionImperative(TagAction.RETIRED)}
                    color={'red'}
                    onClick={() => openModal(TagAction.RETIRED)}
                >
                    <IconTagOff />
                </TooltipActionIcon>
            )}
            <TooltipActionIcon
                tooltip={TagActionImperative(TagAction.UPDATED)}
                color={'ac-purple'}
                onClick={() => openModal(TagAction.UPDATED)}
            >
                <IconEdit />
            </TooltipActionIcon>
        </Group>
    );
}
