import React from "react";
import style from "./Faq.module.css";
import { Button,TextField,Grid,TextareaAutosize} from "@mui/material";
import { useState } from "react";
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Popup from 'reactjs-popup';
const AddFaq = () => {
    const data={
        question:"",
      answer:""
    } 
    
     const [newdata,setnewdata]=useState(data)
     
      const handleSubmit=async(e)=>{
        e.preventDefault();
        const data=newdata;

        try {
       
          const url=`${process.env.REACT_APP_BACKENDURL}/api/faqs/`;
          const res=await axios.post(url,data);
        } catch (error) {
          console.log("ref eroor")
        }
      }

         const handlechange=({currentTarget:input})=>{
    

        setnewdata({...newdata,[input.name]:input.value});

      
    }


    
   return <>
    <div className={style.header} style={{marginTop:"20px"}}>
    
    <Popup trigger={<Button variant="outlined" style={{marginLeft:"20px"}} modal nested >Add Events</Button>
} position="bottom center">
  {close=> (
    <Stack component="form"  style={{marginLeft:"15px"}} onSubmit={handleSubmit} className={style.form} marginTop={5}>     
        <div >
  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} rowSpacing={2}  padding={5}justifyContent="center" display="flex">
    <Grid  item xs={4}sm={4} md={4}display="flex" justifyContent="center" alignItems="center">  <TextField id="outlined-basic" size="small" label="Question" value={newdata.question} onChange={handlechange}name="question"variant="outlined" className={style.textfield}/>
</Grid>
    <Grid  item xs={4}sm={4} md={4} display="flex" justifyContent="center" alignItems="center">  <TextField id="outlined-basic" size="small" label="Answer" value={newdata.answer} name="answer"onChange={handlechange}variant="outlined" className={style.textfield}/>
</Grid>
   
<Grid item xs={8}sm={12} md={12}display="flex" justifyContent="center" alignItems="center"></Grid>
<Grid  item display="flex" justifyContent="flex-end" alignItems="center" xs={12} sm={12} md={12}>  <Button variant="outlined" 
onClick={handleSubmit}style={{marginTop:"20px",marginBottom:"30px",width:"300px",display:"flex",flexDirection:"column",justifyContent:"flex-end"}} >Submit</Button>
<Grid  item display="flex" justifyContent="center" alignItems="center" xs={12} sm={12} md={12}>  <Button variant="outlined" 
onClick={()=>{close()}}style={{marginTop:"20px",marginBottom:"30px",width:"300px",display:"flex",flexDirection:"column",justifyContent:"center"}} >Close</Button></Grid>
</Grid>
  </Grid>
  </div>
</Stack>
  )}
  </Popup>
  </div> 
        </>
};
export default AddFaq;
