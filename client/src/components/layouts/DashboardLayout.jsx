import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="bg-white min-h-screen border border-red-500 flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow bg-[#e3f2fd] rounded-tl-lg overflow-hidden p-5">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
