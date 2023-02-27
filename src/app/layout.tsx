import "./globals.css";
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <Script src="../../node_modules/flowbite/dist/flowbite.min.js" />
      </body>
    </html>
  );
}
