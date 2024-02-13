import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { sf_pro_display } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased ${sf_pro_display.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
