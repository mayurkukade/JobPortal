import { Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"


const Admin = () => {
  return (
    <div>
    <Link to="/admin/studentlist">
    <Button>Add Student</Button>
    </Link>
      
    </div>
  )
}

export default Admin
