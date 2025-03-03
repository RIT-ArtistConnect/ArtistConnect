/**
 * The art attribute that tags of this type describe
 */
export enum TagType {
    DISCIPLINE = 'Discipline',
    MEDIA = 'Media',
    STYLE = 'Style',
}

/**
 * The actions that can be performed on a tag
 */
export enum TagAction {
    CREATED = 'Created',
    UPDATED = 'Updated',
    REQUESTED = 'Requested',
    APPROVED = 'Approved',
    DENIED = 'Denied',
    RETIRED = 'Retired',
}

export function TagActionImperative(action: TagAction): string {
    switch (action) {
        case TagAction.CREATED:
            return 'Create';
        case TagAction.UPDATED:
            return 'Update';
        case TagAction.REQUESTED:
            return 'Request';
        case TagAction.APPROVED:
            return 'Approve';
        case TagAction.DENIED:
            return 'Deny';
        case TagAction.RETIRED:
            return 'Retire';
        default:
            return 'Unknown';
    }
}
