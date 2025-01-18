import { User } from '@/types';
import { router, useForm } from '@inertiajs/react';
import { ActionIcon, Group, Tooltip } from '@mantine/core';
import {
    IconUserCancel,
    IconUserDown,
    IconUserShield,
    IconUserUp,
} from '@tabler/icons-react';
import { FormEventHandler, ReactNode } from 'react';
import { RouteName, RouteParams } from 'ziggy-js';

function UserManagementButton<T extends RouteName>({
    label,
    color,
    routeName,
    params,
    children,
}: {
    label: string;
    color: string;
    routeName: T;
    params: RouteParams<T>;
    children: ReactNode;
}) {
    const { post, processing } = useForm(params);
    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route(routeName, params), {
            onFinish: () => router.reload({ only: ['users'] }),
        });
    };
    return (
        <form onSubmit={submit}>
            <Tooltip
                label={label}
                events={{ hover: true, focus: true, touch: true }}
            >
                <ActionIcon
                    bg={color}
                    type={'submit'}
                    loading={processing}
                    aria-label={label}
                >
                    {children}
                </ActionIcon>
            </Tooltip>
        </form>
    );
}

export default function UserManagementButtons({ user }: { user: User }) {
    return (
        <Group gap={'sm'}>
            <UserManagementButton
                label={user.is_admin ? 'Demote to User' : 'Promote to Admin'}
                color={'ac-blue'}
                routeName={'admin.users.setAdmin'}
                params={{ user: user.id, admin: !user.is_admin }}
            >
                {user.is_admin ? <IconUserDown /> : <IconUserUp />}
            </UserManagementButton>
            <UserManagementButton
                label={user.is_banned ? 'Unban User' : 'Ban User'}
                color={user.is_banned ? 'ac-purple' : 'ac-orange'}
                routeName={'admin.users.setBanned'}
                params={{ user: user.id, banned: !user.is_banned }}
            >
                {user.is_banned ? <IconUserShield /> : <IconUserCancel />}
            </UserManagementButton>
        </Group>
    );
}
