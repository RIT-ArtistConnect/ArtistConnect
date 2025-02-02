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
