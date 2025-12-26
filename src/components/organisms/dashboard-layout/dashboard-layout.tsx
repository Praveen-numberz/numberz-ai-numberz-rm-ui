import { forwardRef, ComponentProps } from "react";
import Sidebar from "components/organisms/sidebar";
import Header from "components/organisms/header";

export interface DashboardLayoutProps
  extends Omit<ComponentProps<"div">, "className"> {
  children: React.ReactNode;
  headerTitle?: string;
  user?: {
    name: string;
    avatarUrl?: string;
  };
}

const DashboardLayout = forwardRef<HTMLDivElement, DashboardLayoutProps>(
  ({ children, headerTitle = "RM Desk", user, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className="flex h-screen overflow-hidden relative size-full bg-gray-50"
        {...rest}
      >
        <Sidebar />
        <div className="flex flex-col grow items-start min-h-0 min-w-0 relative shrink-0 overflow-y-auto">
          <Header title={headerTitle} user={user} />
          <main className="flex flex-col grow items-start min-h-0 min-w-0 relative shrink-0 w-full">
            {children}
          </main>
        </div>
      </div>
    );
  }
);

DashboardLayout.displayName = "DashboardLayout";

export default DashboardLayout;

