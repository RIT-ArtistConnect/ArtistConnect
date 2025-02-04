import RouteActionIcon from '@/Components/RouteActionIcon';
import { User } from '@/types';
import { Group } from '@mantine/core';
import {
    IconUserCancel,
    IconUserCheck,
    IconUserDown,
    IconUserShield,
    IconUserUp,
} from '@tabler/icons-react';

export default function UserManagementButtons({ user }: { user: User }) {
    return (
        <Group gap={'sm'}>
            {user.email_verified_at == null ? (
                <RouteActionIcon
                    label={'Manually Verify'}
                    color={'green'}
                    routeName={'admin.users.manuallyVerify'}
                    params={{ user: user.id }}
                >
                    <IconUserCheck />
                </RouteActionIcon>
            ) : (
                <RouteActionIcon
                    label={
                        user.is_admin ? 'Demote to User' : 'Promote to Admin'
                    }
                    color={'ac-blue'}
                    routeName={'admin.users.setAdmin'}
                    params={{ user: user.id, admin: !user.is_admin }}
                >
                    {user.is_admin ? <IconUserDown /> : <IconUserUp />}
                </RouteActionIcon>
            )}
            <RouteActionIcon
                label={user.is_banned ? 'Unban User' : 'Ban User'}
                color={user.is_banned ? 'ac-purple' : 'ac-orange'}
                routeName={'admin.users.setBanned'}
                params={{ user: user.id, banned: !user.is_banned }}
            >
                {user.is_banned ? <IconUserShield /> : <IconUserCancel />}
            </RouteActionIcon>
        </Group>
    );
}
