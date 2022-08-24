// components
import DashboardLayout from "../components/layouts/DashboardLayout";
// context
import { useUser } from "../lib/user.context";

const Main = () => {
  const { user, loading } = useUser();

  return (
    <DashboardLayout>
      <div>Main</div>
      <div>Current user is {loading ? "Loading" : user ? user.name : "no user"}</div>
    </DashboardLayout>
  );
};

export default Main;
