import { InertiaLinkProps, Link } from '@inertiajs/react';
import { Button } from '@mantine/core'
import {ButtonVariant} from "@mantine/core";
export default function MantineNavLink({
                                    variant = "subtle",
                                    fullWidth = false,
                                    children,
                                    ...props
                                }: InertiaLinkProps & { variant?: ButtonVariant, fullWidth?: boolean }) {
    return (
        <Link {...props}>
            <Button variant={variant} fullWidth={fullWidth}>{children}</Button>
        </Link>
    );
}
