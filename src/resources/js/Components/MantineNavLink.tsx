import { InertiaLinkProps } from '@inertiajs/react';
import { Button, ButtonVariant } from '@mantine/core';
import UnstyledLink from "@/Components/UnstyledLink";
export default function MantineNavLink({
    variant = 'subtle',
    fullWidth = false,
    children,
    ...props
}: InertiaLinkProps & { variant?: ButtonVariant; fullWidth?: boolean }) {
    return (
        <UnstyledLink {...props}>
            <Button variant={variant} fullWidth={fullWidth}>
                {children}
            </Button>
        </UnstyledLink>
    );
}
