"use client";

import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { MenuItem, TextField } from "@mui/material";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

const LocaleSwitcher = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  const hdlOnChange = (event: { target: { value: string } }) => {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace({ pathname, ...params }, { locale: nextLocale });
    });
  };

  return (
    <TextField
      id="lang"
      select
      size="small"
      label="Lang"
      defaultValue={locale}
      disabled={isPending}
      onChange={hdlOnChange}
    >
      {routing.locales.map((locale, index) => (
        <MenuItem key={index} value={locale}>
          {locale.toUpperCase()}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default LocaleSwitcher;
