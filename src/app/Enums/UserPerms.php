<?php

namespace App\Enums;

enum userPerms: int
{
    case nonexistent = -1;
    case unverified = 0;
    case verified = 1;
    case mod = 2;
    case admin = 3;
    case headAdmin = 4;
    case siteOwner = 5;

    /**
     * Assumes that the permissions associated with a userPerms value include that of all values less than it 
     * (outside of permissions exclusive to it). If true, user has access. If false, user doesn't.
     * @var bool
     */
    public function canAccess(userPerms $permission, userPerms $requirement): bool {
        return $permission >= $requirement;
    }
}
