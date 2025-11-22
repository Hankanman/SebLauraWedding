"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function FlagFI({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-fi" viewBox="0 0 640 480" className={className}>
      <path fill="#fff" d="M0 0h640v480H0z"/>
      <path fill="#002f6c" d="M0 174.5h640v131H0z"/>
      <path fill="#002f6c" d="M175.5 0h130.9v480h-131z"/>
    </svg>
  )
}

function FlagUK({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-gb" viewBox="0 0 640 480" className={className}>
      <path fill="#012169" d="M0 0h640v480H0z"/>
      <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"/>
      <path fill="#C8102E" d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"/>
      <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z"/>
      <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z"/>
    </svg>
  )
}

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "fi" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        onClick={toggleLanguage}
        variant="outline"
        size="sm"
        className={cn(
          "bg-white/80 backdrop-blur-md shadow-lg border-gray-200 hover:bg-white font-bold uppercase transition-all",
          "text-gray-900"
        )}
      >
        {locale === "en" ? (
          <FlagFI className="w-6 h-4 mr-2 rounded-sm object-cover shadow-sm" />
        ) : (
          <FlagUK className="w-6 h-4 mr-2 rounded-sm object-cover shadow-sm" />
        )}
        {locale === "en" ? "FI" : "EN"}
      </Button>
    </div>
  );
}
