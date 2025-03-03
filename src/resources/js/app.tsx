import '@mantine/core/styles.css';
import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import {
    createTheme,
    DefaultMantineColor,
    MantineColorsTuple,
    MantineProvider,
} from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

type ExtendedCustomColors =
    | 'ac-purple'
    | 'ac-blue'
    | 'ac-yellow'
    | 'ac-orange'
    | DefaultMantineColor;

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        colors: Record<ExtendedCustomColors, MantineColorsTuple>;
    }
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        if (import.meta.env.SSR) {
            hydrateRoot(el, <App {...props} />);
            return;
        }

        const theme = createTheme({
            white: '#ece8f5',
            black: '#332258',
            colors: {
                'ac-purple': [
                    '#f3f0f9',
                    '#e3deed',
                    '#c4b8dd',
                    '#a491cc',
                    '#8970bf',
                    '#785ab7',
                    '#7050b4',
                    '#5f419e',
                    '#54398e',
                    '#48307d',
                ],
                'ac-blue': [
                    '#e9f4ff',
                    '#d7e4fa',
                    '#afc7ec',
                    '#85a7df',
                    '#618cd3',
                    '#4a7ccd',
                    '#3d73cb',
                    '#2d62b4',
                    '#2457a2',
                    '#124b91',
                ],
                'ac-yellow': [
                    '#fff9e3',
                    '#fbf1d1',
                    '#f4e2a5',
                    '#edd376',
                    '#e8c54e',
                    '#e5bd34',
                    '#e3b825',
                    '#c9a217',
                    '#b38f0d',
                    '#9b7b00',
                ],
                'ac-orange': [
                    '#ffefe5',
                    '#ffded1',
                    '#f6bda5',
                    '#ee9875',
                    '#e87a4c',
                    '#e56632',
                    '#e45c24',
                    '#cb4c17',
                    '#b54212',
                    '#9f3609',
                ],
            },
            primaryColor: 'ac-purple',
            // primaryShade: 5,
            autoContrast: true,
            // luminanceThreshold: 0.1,
            fontFamily: 'SUSE',
        });
        createRoot(el).render(
            <MantineProvider theme={theme}>
                <ModalsProvider>
                    <App {...props} />
                </ModalsProvider>
            </MantineProvider>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});
