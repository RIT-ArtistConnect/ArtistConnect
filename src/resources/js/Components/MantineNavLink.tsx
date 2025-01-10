import { InertiaLinkProps, Link } from '@inertiajs/react';
import { Button } from '@mantine/core'
import {ButtonVariant} from "@mantine/core";
export default function MantineNavLink({
                                    active = false,
                                    variant = "subtle",
                                    fullWidth = false,
                                    children,
                                    ...props
                                }: InertiaLinkProps & { active: boolean, variant?: ButtonVariant, fullWidth?: boolean }) {
    return (
        <Link
            {...props}
        >
            <Button variant={variant} fullWidth={fullWidth}>{children}</Button>
        </Link>
    );
}
