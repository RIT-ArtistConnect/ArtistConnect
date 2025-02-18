<?php

namespace App\Enums;

enum TagAction: string
{
    case CREATED = 'Created';
    case UPDATED = 'Updated';
    case REQUESTED = 'Requested';
    case APPROVED = 'Approved';
    case DENIED = 'Denied';
    case RETIRED = 'Retired';
}