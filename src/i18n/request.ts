import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  let activeLocale = locale;

  if (
    !activeLocale ||
    !routing.locales.includes(activeLocale as "en" | "vi" | "ko")
  ) {
    activeLocale = routing.defaultLocale;
  }

  return {
    messages: (await import(`../../messages/${activeLocale}.json`)).default,
  };
});
