import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="container mx-auto flex justify-center gap-3">
      <Link to="/admin/studentlist">
        <Button>Add Student</Button>
      </Link>
      <Link to="/admin/itTraining">
        <Button>Add IT Training</Button>
      </Link>
      {/* <Link to="/admin/jobs">
        <Button>Add Jobs</Button>
      </Link> */}
      <Link to="/admin/bootcamp">
        <Button>Add Bootcamp</Button>
      </Link>
    </div>
  );
};

export default Admin;
