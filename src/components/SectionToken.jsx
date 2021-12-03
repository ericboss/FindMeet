import React from 'react'
import {  makeStyles, Toolbar, Typography } from "@material-ui/core"
import SectionIconRight from './SectionIconRight'
import SectionIconLeft from './SectionIconLeft'
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles((theme) =>({
main: {
    backgroundImage: `url('./images/CTA Bg.png')`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        width: "100%",
        height:theme.spacing(95),
        display:"flex",
        flexDirection: "column", 
        alignItems: "center", 
},
items:{
    marginTop: theme.spacing(20),
    display:"flex",
    flexDirection: "column", 
    alignItems: "center",  
},
title:{
  
      color:"white",
      fontFamily: ['Sora', "sans-serif"],
    
  }, 
  body:{
    fontFamily: ['Source Sans Pro', "sans-serif"  ],
    color:"white"
  } 

}))

function SectionToken() {
    const classes = useStyles()
    return (
        <div id="meetToken"className={classes.main}>
            <Fade bottom>
            <div className={classes.items}>
                <Typography className={classes.title} variant="h4"> The $MEET Token</Typography>
                <div className={classes.images}>
                    <img src="/images/Token222.png"/>
                    <img src="/images/Token111.png"/>
                    <img src="/images/Token333.png"/>
                </div>
                <Typography className={classes.body} variant="body2">$MEET is our deflationary token that has real utilities on FindMeet App and</Typography>
                <Typography className={classes.body} variant="body2">Metaverse ecosystem. With $MEET user can upgrade their profiles, find specific</Typography>
                <Typography className={classes.body} variant="body2">people, access to private content, get access to specific groups of people Buy</Typography>
                <Typography className={classes.body} variant="body2">house and accessories and play to earn.</Typography>
            </div>
            </Fade>
        </div>
    )
}

export default SectionToken
