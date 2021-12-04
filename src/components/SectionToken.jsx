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
      [theme.breakpoints.down("sm")]:{
        marginLeft: theme.spacing(7), 
        marginRight: theme.spacing(5),
        width:"300px"
      }
    
  }, 
  body:{
    fontFamily: ['Source Sans Pro', "sans-serif"  ],
    color:"white", 
    textAlign:"center",
    [theme.breakpoints.down("sm")]:{
        [theme.breakpoints.down("sm")]:{
            marginLeft: theme.spacing(1), 
            width:"300px"
        
            
           
          }
      }
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
                <Typography className={classes.body} variant="body2">$MEET is our deflationary token that has real utilities on FindMeet App and
                Metaverse ecosystem. With $MEET user can upgrade their profiles, find specific
                people, access to private content, get access to specific groups of people Buy
                house and accessories and play to earn.</Typography>
            </div>
            </Fade>
        </div>
    )
}

export default SectionToken
