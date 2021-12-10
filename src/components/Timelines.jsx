import React from 'react'
import TimelinesCenter from './TimelinesCenter'
import TimelinesLeft from './TimelineLeft'
import {  makeStyles, Typography, Avatar } from "@material-ui/core"

const useStyles = makeStyles((theme) =>({
    center:{
        display: "none"
    }
   
  
  }))
function Timelines() {
    const classes= useStyles()
    return (
        <div >
         
           
           <TimelinesCenter className={classes.center}/>
        </div>
    )
}

export default Timelines
