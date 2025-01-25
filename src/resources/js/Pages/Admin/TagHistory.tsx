import MainLayout from '@/Layouts/MainLayout';
import { User } from '@/types';
import { Group, List, Stack, Text, Timeline } from '@mantine/core';
import {
    IconCheck,
    IconEdit,
    IconMail,
    IconTagOff,
    IconTagPlus,
    IconX,
} from '@tabler/icons-react';
import { ReactNode } from 'react';

/**
 * The art attribute that tags of this type describe
 */
enum TagType {
    DISCIPLINE = 'Discipline',
    MEDIA = 'Media',
    STYLE = 'Style',
}

/**
 * The actions that can be performed on a tag
 */
enum TagAction {
    CREATED = 'Created',
    UPDATED = 'Updated',
    REQUESTED = 'Requested',
    APPROVED = 'Approved',
    DENIED = 'Denied',
    RETIRED = 'Retired',
}

/**
 * Representation of a step in a tag's change history
 */
interface TagHistory {
    id: number;
    tagId: number;
    timestamp: string;
    label: string;
    type: TagType;
    action: TagAction;
    actionNote: string | null;
    actorId: number;
    actor: User;
}

/**
 * Representation of a tag
 */
interface Tag {
    id: number;
    history: TagHistory[];
}

/**
 * Retrieve the Icon associated with the provided TagAction
 * @param action the action to get the icon for
 * @return the Icon associated with the provided action
 */
function getTagActionIcon(action: TagAction) {
    switch (action) {
        case TagAction.CREATED:
            return <IconTagPlus />;
        case TagAction.UPDATED:
            return <IconEdit />;
        case TagAction.REQUESTED:
            return <IconMail />;
        case TagAction.APPROVED:
            return <IconCheck />;
        case TagAction.DENIED:
            return <IconX />;
        case TagAction.RETIRED:
            return <IconTagOff />;
    }
}

/**
 * Retrieve the color associated with the provided TagAction
 * @param action the action to get the color for
 * @return the color associated with the provided action
 */
function getTagActionColor(action: TagAction) {
    switch (action) {
        case TagAction.CREATED:
            return 'green';
        case TagAction.UPDATED:
            return 'ac-purple';
        case TagAction.REQUESTED:
            return 'ac-blue';
        case TagAction.APPROVED:
            return 'green';
        case TagAction.DENIED:
            return 'ac-orange';
        case TagAction.RETIRED:
            return 'ac-orange';
    }
}

/**
 * Render the differences between two steps in TagHistory
 * @param first the earlier TagHistory record, or null if there is no earlier record
 * @param second the later TagHistory record
 * @constructor
 */
function HistoryDiffs({
    first,
    second,
}: {
    first: TagHistory | null;
    second: TagHistory;
}) {
    if (
        first != null &&
        first.label === second.label &&
        first.type == second.type
    )
        return null;
    return (
        <Stack gap={0}>
            <Text>Changes:</Text>
            <List withPadding>
                {(first == null || first.label !== second.label) && (
                    <List.Item>
                        <Group>
                            <Text fz={'sm'}>Label: </Text>
                            {first != null && (
                                <Text fz={'sm'} td={'line-through'}>
                                    {first.label}
                                </Text>
                            )}
                            <Text fz={'sm'}>{second.label}</Text>
                        </Group>
                    </List.Item>
                )}
                {(first == null || first.type !== second.type) && (
                    <List.Item>
                        <Group>
                            <Text fz={'sm'}>Type: </Text>
                            {first != null && (
                                <Text fz={'sm'} td={'line-through'}>
                                    {first.type}
                                </Text>
                            )}
                            <Text fz={'sm'}>{second.type}</Text>
                        </Group>
                    </List.Item>
                )}
            </List>
        </Stack>
    );
}

//TODO: Make me a component instead of a page - display history to users who have requested a tag, and
// on the edit page for a tag
export default function TagHistory(): ReactNode {
    const mockAdmin: User = {
        id: 1,
        name: 'Admin User',
        email: 'au1234@rit.edu',
        is_admin: true,
        is_banned: false,
    };
    const mockUser: User = {
        id: 2,
        name: 'Standard User',
        email: 'su5678@rit.edu',
        is_admin: false,
        is_banned: false,
    };
    const tags: Tag[] = [
        {
            id: 1,
            history: [
                {
                    id: 1,
                    tagId: 1,
                    timestamp: '2025-01-24T20:40:00Z',
                    label: 'NSFW',
                    type: TagType.STYLE,
                    action: TagAction.REQUESTED,
                    actionNote: null,
                    actorId: mockUser.id,
                    actor: mockUser,
                },
                {
                    id: 2,
                    tagId: 1,
                    timestamp: '2025-01-24T20:48:00Z',
                    label: 'NSFW',
                    type: TagType.STYLE,
                    action: TagAction.DENIED,
                    actionNote: 'Against TOS',
                    actorId: mockAdmin.id,
                    actor: mockAdmin,
                },
                {
                    id: 5,
                    tagId: 1,
                    timestamp: '2025-01-24T20:58:00Z',
                    label: 'NSFW',
                    type: TagType.STYLE,
                    action: TagAction.APPROVED,
                    actionNote: 'TOS Updated, no longer against TOS',
                    actorId: mockAdmin.id,
                    actor: mockAdmin,
                },
            ],
        },
        {
            id: 2,
            history: [
                {
                    id: 3,
                    tagId: 2,
                    timestamp: '2025-01-24T20:55:00Z',
                    label: '2DD',
                    type: TagType.STYLE,
                    action: TagAction.CREATED,
                    actionNote: null,
                    actorId: mockAdmin.id,
                    actor: mockAdmin,
                },
                {
                    id: 4,
                    tagId: 2,
                    timestamp: '2025-01-24T20:56:00Z',
                    label: '2D',
                    type: TagType.STYLE,
                    action: TagAction.UPDATED,
                    actionNote: 'Typo in label',
                    actorId: mockAdmin.id,
                    actor: mockAdmin,
                },
                {
                    id: 6,
                    tagId: 2,
                    timestamp: '2025-01-24T20:59:00Z',
                    label: '2D',
                    type: TagType.STYLE,
                    action: TagAction.RETIRED,
                    actionNote: '2D art is now against the TOS',
                    actorId: mockAdmin.id,
                    actor: mockAdmin,
                },
            ],
        },
    ];

    return (
        <MainLayout title={'Tag History'}>
            <Stack gap={'xl'}>
                {tags.map((tag) => {
                    return (
                        <Timeline
                            key={tag.id}
                            active={tag.history.length}
                            bulletSize={36}
                        >
                            {tag.history.map((history, index) => {
                                let previousHistory: TagHistory | null = null;
                                if (index != 0) {
                                    previousHistory = tag.history[index - 1];
                                }
                                return (
                                    <Timeline.Item
                                        key={history.id}
                                        title={history.action}
                                        bullet={getTagActionIcon(
                                            history.action,
                                        )}
                                        color={getTagActionColor(
                                            history.action,
                                        )}
                                    >
                                        <Text c={'dimmed'} size={'xs'}>
                                            by {history.actor.name} (
                                            {history.actor.email}) at{' '}
                                            {history.timestamp}
                                        </Text>
                                        {/*TODO: Render the timestamp in local time (and local format) instead of UTC ISO-8601*/}
                                        <HistoryDiffs
                                            first={previousHistory}
                                            second={history}
                                        />
                                        {history.actionNote && (
                                            <Group>
                                                <Text>Reason:</Text>
                                                <Text c={'dimmed'}>
                                                    {history.actionNote}
                                                </Text>
                                            </Group>
                                        )}
                                    </Timeline.Item>
                                );
                            })}
                        </Timeline>
                    );
                })}
            </Stack>
        </MainLayout>
    );
}
