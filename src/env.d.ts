/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    // Set by post pages so the language switcher can link to the translation
    translations?: Partial<Record<import("./i18n/ui").Lang, string>>;
  }
}
