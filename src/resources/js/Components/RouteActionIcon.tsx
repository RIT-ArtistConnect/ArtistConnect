import TooltipActionIcon from '@/Components/TooltipActionIcon';
import { FormDataConvertible } from '@inertiajs/core';
import { router, useForm } from '@inertiajs/react';
import { FormEventHandler, ReactNode } from 'react';
import { RouteName, RouteParams } from 'ziggy-js';

type FormDataType = Record<string, FormDataConvertible>;

export default function RouteActionIcon<T extends RouteName>({
    label,
    color,
    routeName,
    params,
    children,
}: {
    label: string;
    color: string;
    routeName: T;
    params: RouteParams<T>;
    children: ReactNode;
}) {
    const { post, processing } = useForm(params as FormDataType);
    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route(routeName, params), {
            onFinish: () => router.reload({ only: ['users'] }),
        });
    };
    return (
        <form onSubmit={submit}>
            <TooltipActionIcon
                tooltip={label}
                bg={color}
                type={'submit'}
                loading={processing}
                aria-label={label}
            >
                {children}
            </TooltipActionIcon>
        </form>
    );
}
