import { Inter, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] });

export const sf_pro_display = localFont({
    src: [
        {
            path: '../../public/fonts/SFProDisplay_Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../../public/fonts/SFProDisplay_Bold.woff2',
            weight: '700',
            style: 'normal'
        },
    ],
    display: 'swap',
    variable: '--sf-pro-display'
})