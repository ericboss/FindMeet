import React from 'react'
import {  Button, makeStyles, Toolbar, Typography } from "@material-ui/core"
import SectionIconRight from './SectionIconRight'
import SectionIconLeft from './SectionIconLeft'
import { Send } from '@material-ui/icons'
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
    position:"relative",
    display:"flex",
    alignItems:"center"
}, 
body:{
    color:"white",
    fontFamily: ['Source Sans Pro', "sans-serif"  ],
    
}, 
body1:{
    marginTop:theme.spacing(3)
},
telegram:{
    position:"relative",
    marginTop: theme.spacing(5),
    color: "white",
    backgroundColor:"#7b1fa2", 
    textTransform:"capitalize",
    borderRadius:"10%", 
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    [theme.breakpoints.down("sm")]:{
        marginLeft: theme.spacing(8), 
        marginLeft: theme.spacing(8)
      }
  },
  title1:{
    position:"relative",
      color:"white",
      fontFamily: ['Source Sans Pro', "sans-serif"  ],
     
      top:theme.spacing(0)
  }, 
  logo:{
    position:"relative",
     
  }

}))

function SectionInter() {
    const classes = useStyles()
    return (
        <div className={classes.main}>
            <Fade bottom>
            <div className={classes.items}>
                <div className={classes.title}>
                    <Typography variant="h4" className={classes.title1}> The solution is</Typography> <img className={classes.logo} src="/images/L2.png"/>
                    
                    </div>
               <div className={classes.body1}>
                <Typography className={classes.body} variant="body2">Think for a moment to take the best features of Tinder, Badoo, The Sims and bing</Typography>
                <Typography className={classes.body} variant="body2">them to life in the metaverse. A metaverse where users can create a real economic</Typography>
                <Typography className={classes.body} variant="body2">              value for themselves playing to earn and have fun.                 </Typography>
                <Typography className={classes.body} variant="body2">                                                                                 </Typography>
                <Typography className={classes.body} variant="body2">    Findmeet is the first decentralized dating and gaming social network in the  </Typography>
                <Typography className={classes.body} variant="body2">  metaverse, where users can create their own profile, find new people and meet </Typography>
                <Typography className={classes.body} variant="body2">  them on their metaverse space that has a real actual value on the marketplace  </Typography>
                </div>
                <Button
                    className={classes.telegram}
                    startIcon={<Send />}
                    variant="contained"
                     >
                    Join Telegram
                    </Button>
            </div>
            </Fade>
        </div>
    )
}

export default SectionInter
