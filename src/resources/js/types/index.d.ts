import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    is_admin: boolean;
    is_banned: boolean;
}

export enum TagType {
    DISCIPLINE = 'Discipline',
    MEDIA = 'Media',
    STYLE = 'Style',
}

export interface Tag {
    id: number;
    label: string;
    type: TagType;
    active: boolean;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};
