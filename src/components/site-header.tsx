import { ToggleTheme } from "./toggle-theme";

export function SiteHeader() {
  return (
    <div className="fixed top-0 right-0 z-50 m-5">
      <ToggleTheme />
    </div>
  );
}
