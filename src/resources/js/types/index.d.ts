import { TagAction, TagType } from '@/types/enums';
import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    is_admin: boolean;
    is_banned: boolean;
}

/**
 * Representation of a step in a tag's change history
 */
export interface TagHistory {
    id: number;
    tag_id: number;
    created_at: string;
    updated_at: string;
    label: string;
    type: TagType;
    action: TagAction;
    action_note: string | null;
    actor_id: number;
    actor: User;
}

/**
 * Representation of a tag
 */
export interface Tag {
    id: number;
    history: TagHistory[];
    label: string;
    type: TagType;
    active: boolean;
    updated_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};
