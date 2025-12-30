import { forwardRef, ComponentProps, useState } from "react";
import Sidebar, { SidebarItem } from "components/organisms/sidebar";
import Header from "components/organisms/header";
import { cn } from "lib/utils";

export interface DashboardLayoutProps
  extends Omit<ComponentProps<"div">, "className"> {
  children: React.ReactNode;
  headerTitle?: string;
  hideHeader?: boolean;
  user?: {
    name: string;
    avatarUrl?: string;
  };
  workspaceItems?: SidebarItem[];
  systemItems?: SidebarItem[];
}

const DashboardLayout = forwardRef<HTMLDivElement, DashboardLayoutProps>(
  ({ children, headerTitle = "RM Desk", hideHeader = false, user, workspaceItems, systemItems, ...rest }, ref) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };

    return (
      <div
        ref={ref}
        className="flex h-screen overflow-hidden relative size-full bg-gray-50"
        {...rest}
      >
        <Sidebar onCollapse={handleCollapse} isCollapsed={isCollapsed} workspaceItems={workspaceItems} systemItems={systemItems} />
        <div
          className={cn(
            "flex flex-col grow items-start min-h-0 min-w-0 relative shrink-0 overflow-y-auto overflow-x-hidden transition-all duration-300"
          )}
        >
          {!hideHeader && <Header title={headerTitle} user={user} />}
          <main className="flex flex-col grow items-start min-h-0 min-w-0 relative shrink-0 overflow-x-hidden">
            {children}
          </main>
        </div>
      </div>
    );
  }
);

DashboardLayout.displayName = "DashboardLayout";

export default DashboardLayout;

