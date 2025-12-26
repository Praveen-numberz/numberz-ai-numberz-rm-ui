import DashboardLayout from "components/organisms/dashboard-layout";
import Dashboard from "app/dashboard";

function App() {
  return (
    <DashboardLayout
      headerTitle="RM Desk"
      user={{
        name: "Jose Lopez",
      }}
    >
      <Dashboard />
    </DashboardLayout>
  );
}

export default App;
