import React, { Children } from 'react'
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
  } from "@material-tailwind/react";
const CardUiLayout = ({handleOpen,open,children}) => {
  
  return (
    <>
    
    <Dialog
      size="xs"
      open={open}
      handler={handleOpen}
      className="bg-transparent shadow-none"
    >
     
       {children}
     
    </Dialog>
  </>
  )
}

export default CardUiLayout
