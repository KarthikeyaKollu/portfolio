import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "",
  // ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
 
];

export const GITHUB_USERNAME = "karthikeyakollu";
export const SOURCE_CODE_GITHUB_REPO = "";
export const SOURCE_CODE_GITHUB_URL = "";

export const UTM_PARAMS = {
  utm_source: "karthikeya.com",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
