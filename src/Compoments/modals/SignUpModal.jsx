import { Dialog ,Button} from '@material-tailwind/react'


const SignUpModal = (open,handleOpen) => {
  console.log(handleOpen)
  return (
    <Dialog open={open} handler={handleOpen}>
      <p>Modal dialog box</p>
      <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
    </Dialog>
  )
}

export default SignUpModal

