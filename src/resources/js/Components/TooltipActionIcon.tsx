import { ActionIcon, ActionIconProps, Tooltip } from '@mantine/core';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface TooltipActionIconPropsPrivate extends ActionIconProps {
    tooltip: string;
}

type TooltipActionIconProps = TooltipActionIconPropsPrivate &
    Omit<
        Omit<
            DetailedHTMLProps<
                ButtonHTMLAttributes<HTMLButtonElement>,
                HTMLButtonElement
            >,
            'ref'
        >,
        'component' | keyof ActionIconProps
    >;

export default function TooltipActionIcon(props: TooltipActionIconProps) {
    const actionIconProps: Partial<TooltipActionIconProps> = {
        ...props,
    };
    delete actionIconProps.tooltip;
    return (
        <Tooltip
            label={props.tooltip}
            events={{ hover: true, focus: true, touch: true }}
        >
            <ActionIcon component={'button'} {...actionIconProps} />
        </Tooltip>
    );
}
