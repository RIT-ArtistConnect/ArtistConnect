import { InertiaLinkProps, Link } from '@inertiajs/react';
export default function UnstyledLink({...props}: InertiaLinkProps) {
    return (
        <Link style={{textDecoration: "none"}} {...props}>
            {props.children}
        </Link>
    );
}
