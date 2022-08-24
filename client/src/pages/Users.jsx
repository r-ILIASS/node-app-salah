/**
 * TODO: - Integrate the mui breadcrumbs with react router
 *       - extract reusable breadcrumbs component
 */

import { useState, useEffect } from "react";
import DashboardLayout from "../components/layouts/DashboardLayout";
import DataTable from "../components/DataTable";
// MUI
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// components
import UserEditAction from "./UserEditAction";

const Users = () => {
  const [data, setData] = useState([]);
  const [selectedRowId, setSelectedRowId] = useState(null);

  // MUI Data Table Columns
  const columns = [
    { field: "id", headerName: "#" },
    { field: "name", headerName: "Name", width: 220 },
    { field: "username", headerName: "UserName", width: 170 },
    { field: "email", headerName: "User Email", flex: 1 },
    {
      field: "actions",
      headerName: "",
      type: "actions",
      renderCell: (params) => <UserEditAction {...{params, selectedRowId, setSelectedRowId}} />,
    },
  ];

  // fetch data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-5">
        {/* header */}
        <div className="frame flex items-center justify-between">
          <h3>Users</h3>
          {/* mui-breadcrumbs */}
          <Box>
            <Breadcrumbs
              fontSize="small"
              aria-label="breadcrumb"
              separator={<NavigateNextIcon fontSize="small" />}
            >
              <Link color="text.primary" underline="hover" href="/">
                Main
              </Link>
              <Typography fontSize="small">Users</Typography>
            </Breadcrumbs>
          </Box>
        </div>

        {/* table */}
        <DataTable columns={columns} data={data} />
      </div>
    </DashboardLayout>
  );
};

export default Users;
