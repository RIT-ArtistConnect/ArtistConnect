import {
    RequestPayload,
    VisitHelperOptions,
    VisitOptions,
} from '@inertiajs/core';
import { router } from '@inertiajs/react';
import { Anchor } from '@mantine/core';
import { ReactNode } from 'react';

type BaseProps = {
    href: URL | string;
    children: ReactNode;
};

type DeleteProps = {
    method: 'delete';
    options?: Omit<VisitOptions, 'method'>;
};

type OtherMethodsProps = {
    method: 'get' | 'post' | 'put' | 'patch';
    data?: RequestPayload;
    options?: VisitHelperOptions;
};

export type MantineLinkProps = BaseProps & (DeleteProps | OtherMethodsProps);
export default function MantineLink(props: MantineLinkProps) {
    return (
        <Anchor
            onClick={(e) => {
                e.preventDefault();
                if (props.method == 'delete') {
                    router[props.method](props.href, props.options);
                } else {
                    router[props.method](props.href, props.data, props.options);
                }
            }}
        >
            {props.children}
        </Anchor>
    );
}
