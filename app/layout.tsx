import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'La Biblioteca Viral — Videos listos para publicar',
  description: 'La biblioteca visual para publicar con intención y constancia.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>
    {children}
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6HKB5CX2QN" strategy="afterInteractive" />
    <Script id="google-analytics" strategy="afterInteractive">
      {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-6HKB5CX2QN');`}
    </Script>
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1411033300475253');
fbq('track', 'PageView');`}
    </Script>
    <noscript><img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1411033300475253&ev=PageView&noscript=1" alt="" /></noscript>
  </body></html>
}
