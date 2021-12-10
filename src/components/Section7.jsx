import React from 'react'
import {  makeStyles, Button, Typography } from "@material-ui/core"
import { Send } from '@material-ui/icons'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) =>({
    "@keyframes example": {
        "0%": {
          
          transform: "translateY(0%)"
        },
        "75%":{
          transform: "translateY(3%)"
        },
        "100%": {
          
          transform: "translateY(0%)"
        }
      },
    section:{
        backgroundImage: `url('./images/features-bg.png')`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        marginTop:theme.spacing(25),
        
    },
    container:{
        display: "flex", 
        alignItems:"center",
        justifyContent:"space-around",
        width:"65%",
        marginLeft:theme.spacing(40),
        [theme.breakpoints.down("sm")]:{
            display:"flex",
            flexDirection:"column",
            marginTop:theme.spacing(-15),
            alignItems:"center",
            flexDirection: "column-reverse"
          }
    },
    sectionInfo:{
        marginLeft:theme.spacing(15),
        marginBottom:theme.spacing(10),
        [theme.breakpoints.down("sm")]:{
            marginRight: theme.spacing(80)
        }
    },
    sectionText:{
        width: theme.spacing(67) , 
        fontFamily:"Sora, sans-serif",
        fontWeight:"500",
       
        fontSize:theme.spacing(1.8),
       marginBottom:theme.spacing(3),
       color:"#5d2177", 
       textAlign:"left",
       [theme.breakpoints.down("sm")]:{
        marginTop: theme.spacing(-1),
        width:theme.spacing(44), 
        marginLeft: theme.spacing(3),
        fontSize: theme.spacing(1.8),
        textAlign: "center",
       }
    },
    title:{
        color:"#ac3b69", 
        fontFamily:"Sora, sans-serif",
        fontWeight:"100",
        fontSize:theme.spacing(6.5),
        width:theme.spacing(55),
        lineHeight:theme.spacing(0.12),
        textAlign:"left",
        marginBottom:theme.spacing(1), 
        [theme.breakpoints.down("sm")]:{
            width:theme.spacing(50),
            fontSize: theme.spacing(3.5),
            lineHeight: theme.spacing(0),
            textAlign:"center",
            marginRight: theme.spacing(0), 
            marginBottom: theme.spacing(5), 
          }
    }, 
    telegram:{
        position:"relative",
        fontFamily:"Sora, sans-serif",
        fontWeight:"400",
        marginTop: theme.spacing(0),
        color: "white",
        display: "flex",
        backgroundColor:"#5d2177", 
        textTransform:"capitalize",
        borderTopLeftRadius: "50%60px",
        borderBottomLeftRadius: "50%60px",  
        borderTopRightRadius: "50%60px",
        borderBottomRightRadius: "50%60px",  
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        [theme.breakpoints.down("sm")]:{
            
            display: "none",
          }
      },
      telegram1:{
        display: "none",
        
        [theme.breakpoints.down("sm")]:{
            position:"relative",
        display: "flex",
        fontFamily:"Sora, sans-serif",
        fontWeight:"400",
        marginTop: theme.spacing(0),
        color: "white",
        backgroundColor:"#5d2177", 
        textTransform:"capitalize",
        borderTopLeftRadius: "50%60px",
        borderBottomLeftRadius: "50%60px",  
        borderTopRightRadius: "50%60px",
        borderBottomRightRadius: "50%60px", 
        boxShadow: "rgba(250, 104, 104, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            marginTop: theme.spacing(-2), 
            marginRight: theme.spacing(30),
            marginLeft: theme.spacing(13),
            width: theme.spacing(22),
            
          }
      },
      sectionImg:{
        [theme.breakpoints.down("sm")]:{
           
            marginRight: theme.spacing(55)
          }
      },
      sectionImgSub:{
        width: "auto", 
        height  : theme.spacing(50),
        animationName: "$example",
        animationDuration: "4s",
        animationIterationCount: "infinite",
        
        [theme.breakpoints.down("sm")]:{
            width: theme.spacing(45), 
           height  : "auto",
           marginBottom: theme.spacing(5),
           marginRight:theme.spacing(9),
           marginTop:theme.spacing(-10),
           
           
          }
      }
}))

function Section7() {
    const classes = useStyles()
    return (

        <div className={classes.section}>
            <Fade bottom>
                <div className= {classes.container}>
            <div className={classes.sectionImg}>
            <img className={classes.sectionImgSub}src ="/images/House.png"></img>
            </div>

            <div className={classes.sectionInfo}>
                <h1 className={classes.title}>From the app</h1>
                <h1 className={classes.title}>to the metaverse</h1>
                <p className={classes.sectionText}>In FindMeet app you can invite people to meet you in the metaverse. You can invite new friends to your FindMeet-House, 
                   bring people out for dinner, make gifts, parties, have fun and also have intimate relationship in your bedroom.</p>
                    <Button
                    startIcon={<Send />}
                    variant="contained"
                    className ={classes.telegram}
                     >
                    Join Telegram
                    </Button>
            </div>
            
            </div>
            <Button
                    startIcon={<Send />}
                    variant="contained"
                    className ={classes.telegram1}
                     >
                    Join Telegram
                    </Button>
            </Fade>
            
        </div>
    )
}

export default Section7
