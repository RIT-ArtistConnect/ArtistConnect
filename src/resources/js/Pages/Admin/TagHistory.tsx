import MainLayout from '@/Layouts/MainLayout';
import { TagHistory } from '@/types';
import { TagAction } from '@/types/enums';
import { Group, List, Stack, Text, Timeline } from '@mantine/core';
import {
    IconCheck,
    IconEdit,
    IconMail,
    IconTagOff,
    IconTagPlus,
    IconX,
} from '@tabler/icons-react';
import { DateTime } from 'luxon';
import { ReactNode } from 'react';

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
export default function TagHistoryPage({
    history,
}: {
    history: TagHistory[];
}): ReactNode {
    return (
        <MainLayout title={'Tag History'}>
            <Timeline active={history.length} bulletSize={36}>
                {history &&
                    history.map((entry, index) => {
                        let previousHistory: TagHistory | null = null;
                        if (index != 0) {
                            previousHistory = history[index - 1];
                        }
                        return (
                            <Timeline.Item
                                key={entry.id}
                                title={entry.action}
                                bullet={getTagActionIcon(entry.action)}
                                color={getTagActionColor(entry.action)}
                            >
                                <Text c={'dimmed'} size={'xs'}>
                                    by {entry.actor.name} ({entry.actor.email})
                                    on{' '}
                                    {DateTime.fromISO(entry.created_at)
                                        .toLocal()
                                        .toLocaleString({
                                            month: 'numeric',
                                            day: 'numeric',
                                            year: 'numeric',
                                            hour: 'numeric',
                                            minute: 'numeric',
                                            timeZoneName: 'short',
                                        })}
                                </Text>
                                <HistoryDiffs
                                    first={previousHistory}
                                    second={entry}
                                />
                                {entry.action_note && (
                                    <Group>
                                        <Text>Reason:</Text>
                                        <Text c={'dimmed'}>
                                            {entry.action_note}
                                        </Text>
                                    </Group>
                                )}
                            </Timeline.Item>
                        );
                    })}
            </Timeline>
        </MainLayout>
    );
}
