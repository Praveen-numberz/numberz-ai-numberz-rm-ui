import { useState } from "react";
import DashboardLayout from "components/organisms/dashboard-layout";
import Dashboard from "app/dashboard";
import Reports from "app/reports";
import ClientBook from "app/client-book";
import { SIDEBAR_ICONS } from "constants/images";

type ActiveScreen = "overview" | "reports" | "hnis" | "engagement" | "incentives";

function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>("overview");

  const handleNavigation = (screen: ActiveScreen) => {
    setActiveScreen(screen);
  };

  const workspaceItems = [
    {
      label: "Overview",
      iconUrl: SIDEBAR_ICONS.OVERVIEW,
      onClick: () => handleNavigation("overview"),
      isActive: activeScreen === "overview",
    },
    {
      label: "Reports",
      iconUrl: SIDEBAR_ICONS.REPORTS,
      onClick: () => handleNavigation("reports"),
      isActive: activeScreen === "reports",
    },
    {
      label: "HNIs",
      iconUrl: SIDEBAR_ICONS.HNIS,
      onClick: () => handleNavigation("hnis"),
      isActive: activeScreen === "hnis",
    },
    {
      label: "Engagement",
      iconUrl: SIDEBAR_ICONS.ENGAGEMENT,
      onClick: () => handleNavigation("engagement"),
      isActive: activeScreen === "engagement",
    },
    {
      label: "Incentives",
      iconUrl: SIDEBAR_ICONS.INCENTIVES,
      onClick: () => handleNavigation("incentives"),
      isActive: activeScreen === "incentives",
    },
  ];

  const renderContent = () => {
    switch (activeScreen) {
      case "reports":
        return <Reports />;
      case "hnis":
        return <ClientBook />;
      case "overview":
        return <Dashboard />;
      case "engagement":
      case "incentives":
      default:
        return <div className="flex items-center justify-center w-full h-full bg-white" />;
    }
  };

  return (
    <DashboardLayout
      headerTitle={
        activeScreen === "reports"
          ? "Research & Insights"
          : activeScreen === "hnis"
          ? "Client Book"
          : "Welcome, Alexander!"
      }
      hideHeader={activeScreen === "reports" || activeScreen === "hnis"}
      user={{
        name: "Jose Lopez",
      }}
      workspaceItems={workspaceItems}
    >
      {renderContent()}
    </DashboardLayout>
  );
}

export default App;
