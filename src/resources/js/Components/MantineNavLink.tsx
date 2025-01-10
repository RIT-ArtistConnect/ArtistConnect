import { InertiaLinkProps, Link } from '@inertiajs/react';
import { Button } from '@mantine/core'
export default function MantineNavLink({
                                    active = false,
                                    children,
                                    ...props
                                }: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
        >
            <Button variant={"subtle"}>{children}</Button>
        </Link>
    );
}
