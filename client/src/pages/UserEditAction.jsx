import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const UserEditAction = ({ params, selectedRowId, setSelectedRowId }) => {
  const handleClick = () => {
    console.log("button clicked");
  };

  return (
    <div onClick={handleClick} className="hover:bg-gray-200 hover:scale-110 duration-300 p-2 rounded-full cursor-pointer">
      <EditOutlinedIcon />
    </div>
  );
};

export default UserEditAction;
