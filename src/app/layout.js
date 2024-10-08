import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from './components/ProgressBarProvider';

import { ThemeProvider } from 'next-themes'
import WhatsApp from "./components/WhatsApp";
import Script from 'next/script';

export const metadata = {
  title: "IT & Digital Marketing Services | GrowTech Lab",
  description: "GrowTech Lab offers Website Development, Mobile App Development, Digital Marketing, Social Media Marketing and many more IT services. Contact Now!!",
  keywords: "website development, mobile app development, digital marketing, IT solutions, SEO",
};

export default function RootLayout({ children }) {

  return (
    <html  suppressHydrationWarning lang="en">

<head>
        {/* Google Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2JJEDRX3X0"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2JJEDRX3X0');
            `,
          }}
        />
      </head>


      <body>
      <ThemeProvider>
      <Providers>

      <Navbar />

      <main>
      {children}

      <WhatsApp />

      </main>

      
      <Footer />

        
      </Providers>
      </ThemeProvider>
        
      </body>
    </html>
  );
}
