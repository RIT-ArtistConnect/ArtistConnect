import RouteActionIcon from '@/Components/RouteActionIcon';
import { Tag } from '@/types';
import { TagAction } from '@/types/enums';
import { Group } from '@mantine/core';
import { IconCheck, IconEdit, IconTagOff, IconX } from '@tabler/icons-react';

export default function TagManagementButtons({ tag }: { tag: Tag }) {
    return (
        <Group gap={'sm'}>
            {tag.latest_history.action == TagAction.REQUESTED && (
                <>
                    <RouteActionIcon
                        label={'Approve'}
                        color={'green'}
                        routeName={'admin.tags.approve'}
                        params={{
                            tag: tag.id,
                            returnRoute: 'admin.tags',
                            note: '',
                        }}
                    >
                        <IconCheck />
                    </RouteActionIcon>
                    <RouteActionIcon
                        label={'Deny'}
                        color={'red'}
                        routeName={'admin.tags.deny'}
                        params={{
                            tag: tag.id,
                            returnRoute: 'admin.tags',
                            note: '',
                        }}
                    >
                        <IconX />
                    </RouteActionIcon>
                </>
            )}
            {tag.active && (
                <RouteActionIcon
                    label={'Retire'}
                    color={'red'}
                    routeName={'admin.tags.retire'}
                    params={{
                        tag: tag.id,
                        returnRoute: 'admin.tags',
                        note: '',
                    }}
                >
                    <IconTagOff />
                </RouteActionIcon>
            )}
            <RouteActionIcon
                label={'Update'}
                color={'ac-purple'}
                routeName={'admin.tags.update'}
                params={{ tag: tag.id, returnRoute: 'admin.tags', note: '' }}
            >
                <IconEdit />
            </RouteActionIcon>
        </Group>
    );
}
