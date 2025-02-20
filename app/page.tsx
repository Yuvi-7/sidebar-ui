import { SidebarComponent } from "@/components/sidebar-component/SidebarComponent";
import { ToggleTheme } from "@/components/theme/ToggleTheme";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SidebarComponent />

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-900">
        <div className="flex items-center justify-start">
          <ToggleTheme />

          <h1 className="text-2xl font-bold dark:text-white pl-3">
            Sidebar UI
          </h1>
        </div>
      </main>
    </div>
  );
}
