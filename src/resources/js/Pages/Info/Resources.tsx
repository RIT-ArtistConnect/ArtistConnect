import MainLayout from '@/Layouts/MainLayout';
import InfoSection from './Partials/InfoSection';

import { Anchor, Box, Grid, Stack, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function Resources() {
    const isMobile = !useMediaQuery('(min-width: 45em)');
    console.log(isMobile);

    return (
        <MainLayout title="Resources">
           <></> 
        </MainLayout>
    );
}