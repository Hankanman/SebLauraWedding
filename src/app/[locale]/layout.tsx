import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { Playfair_Display, Open_Sans } from "next/font/google";
import "../globals.css"; // Adjusted path for globals.css
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Seb & Laura Are Getting Married!",
  description: "Join us for our wedding celebration",
};
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body className={`${playfair.variable} ${openSans.variable} antialiased font-sans`}>
        <NextIntlClientProvider messages={messages}>
          <LanguageSwitcher />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
