import React from 'react'
import {  Button, makeStyles, Toolbar, Typography } from "@material-ui/core"
import SectionIconRight from './SectionIconRight'
import SectionIconLeft from './SectionIconLeft'
import { Send } from '@material-ui/icons'
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles((theme) =>({
main: {
   
    backgroundImage: `url('./images/CTA Bg.png')`,
       
        backgroundSize: 'auto', 
        backgroundRepeat:"no-repeat",
        width: "100%",
        height:theme.spacing(150),
        marginBottom:theme.spacing(-55),
        [theme.breakpoints.down("sm")]:{
            marginTop:theme.spacing(10), 
        }
},
items:{
    
    marginTop: theme.spacing(20),
    display:"flex",
    flexDirection: "column", 
    alignItems: "center",  
    [theme.breakpoints.down("sm")]:{
        marginTop:theme.spacing(15), 
    }
    
    
}, 
title:{
    marginTop: theme.spacing(30),
    marginRight: theme.spacing(3),
    position:"relative",
    display:"flex",
    alignItems:"center", 
    [theme.breakpoints.down("sm")]:{
        marginLeft: theme.spacing(5), 
        marginRight: theme.spacing(5), 
        display:"flex",
        alignItems: "center", 
        flexDirection:"column",
        marginTop:theme.spacing(25), 
      }
}, 
body:{
    color:"white",
    fontFamily: ['Source Sans Pro', "sans-serif"  ],
    textAlign:"center"
    
}, 
body1:{
    marginTop:theme.spacing(3),
    width:theme.spacing(64),
    textAlign:"center",
    [theme.breakpoints.down("sm")]:{
        marginLeft: theme.spacing(8), 
        marginRight: theme.spacing(5),
        width: "300px"
      }
},
telegram:{
    position:"relative",
    marginTop: theme.spacing(5),
    color: "#7b1fa2",
    backgroundColor:"white", 
    textTransform:"capitalize",
    borderRadius:"10%", 
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    [theme.breakpoints.down("sm")]:{
        marginLeft: theme.spacing(4), 
        marginRight: theme.spacing(6)
      }
  },
  title1:{
    position:"relative",
      color:"white",
      fontFamily: ['Source Sans Pro', "sans-serif"  ],
     
      top:theme.spacing(0), 
      [theme.breakpoints.down("sm")]:{
        fontSize:theme.spacing(4)
      }
  }, 
  logo:{
    position:"relative",
    [theme.breakpoints.down("sm")]:{
        
      }
     
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
                <Typography className={classes.body} variant="body2">Think for a moment to take the best features of Tinder, Badoo, The Sims and bring
                them to life in the metaverse. A metaverse where users can create a real economic
                              value for themselves playing to earn and have fun.                 
                                                                    </Typography>
                                                                    <br/> 
                <Typography className={classes.body} variant="body2">    Findmeet is the first decentralized dating and gaming social network in the  
                  metaverse, where users can create their own profile, find new people and meet 
                  them on their metaverse space that has a real actual value on the marketplace  </Typography>
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
