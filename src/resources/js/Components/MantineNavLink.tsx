import UnstyledLink from '@/Components/UnstyledLink';
import { InertiaLinkProps } from '@inertiajs/react';
import { Button, ButtonProps, ButtonVariant } from '@mantine/core';
export default function MantineNavLink({
    variant = 'subtle',
    fullWidth = false,
    children,
    buttonProps,
    ...props
}: InertiaLinkProps & {
    variant?: ButtonVariant;
    fullWidth?: boolean;
    buttonProps: ButtonProps;
}) {
    return (
        <UnstyledLink {...props}>
            <Button variant={variant} fullWidth={fullWidth} {...buttonProps}>
                {children}
            </Button>
        </UnstyledLink>
    );
}
