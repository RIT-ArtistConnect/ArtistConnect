import { Stack, Title, Text, TitleOrder } from "@mantine/core";
import { ReactNode } from "react";

export interface InfoSectionProps {
    children: ReactNode;
    title: string;
    order: TitleOrder;
}

export default function InfoSection(props: InfoSectionProps) {
    return (
        <>
            <Stack gap={2}>
                <Title order={props.order}>{props.title}</Title>
                {props.children}
            </Stack>
        </>
    );
}
