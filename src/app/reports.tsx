import { useState } from "react";
import AnalystHub from "./analyst-hub";
import PublishedReports from "./published-reports";

function Reports() {
  const [activeTab, setActiveTab] = useState<"analyst-hub" | "published-reports">("analyst-hub");

  if (activeTab === "analyst-hub") {
    return <AnalystHub onTabChange={setActiveTab} />;
  }

  return <PublishedReports onTabChange={setActiveTab} />;
}

export default Reports;
