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
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',  
    [theme.breakpoints.down("sm")]:{
        marginTop:theme.spacing(15),
    } 
        
    },
    container:{
        marginTop:theme.spacing(1),
        display: "flex", 
        alignItems:"center",
        justifyContent:"space-around",
        width:"65%",
        marginLeft:theme.spacing(40),
        [theme.breakpoints.down("sm")]:{
            marginTop:theme.spacing(5),
            display:"flex",
            flexDirection:"column",
            marginTop:theme.spacing(5),
            alignItems:"center"
          }

    },
    sectionInfo:{
        
        marginRight:theme.spacing(20),
        [theme.breakpoints.down("sm")]:{
            marginRight: theme.spacing(55)
        }
    },
    sectionText:{
       width: theme.spacing(75) , 
       fontFamily:"Sora, sans-serif",
       fontWeight:"500",
       alignText:"left",
       fontSize:theme.spacing(1.8),
      marginTop: theme.spacing(3),
       marginBottom:theme.spacing(3),
       color:"#5d2177",
       [theme.breakpoints.down("sm")]:{
           marginTop: theme.spacing(-1),
        width:theme.spacing(43), 
        marginLeft: theme.spacing(-1.5),
        fontSize: theme.spacing(1.8),
        textAlign: "center",

        
        
      }
    },
    title:{
        color:"#ac3b69", 
        fontFamily:"Sora, sans-serif",
        fontWeight:"100",
        fontSize:theme.spacing(7),
        lineHeight : "55px" , 
        marginBottom:theme.spacing(3), 
        [theme.breakpoints.down("sm")]:{
            width:theme.spacing(35),
            fontSize: theme.spacing(5),
            textAlign:"center",
            marginLeft: theme.spacing(2), 
            marginRight: theme.spacing(12), 
          }
    }, 
    telegram:{
        fontFamily:"Sora, sans-serif",
        fontWeight:"400",
        display: "flex",
        position:"relative",
        marginTop: theme.spacing(0),
        color: "white",
        backgroundColor:"#5d2177", 
        textTransform:"capitalize",
        borderTopLeftRadius: "50%60px",
    borderBottomLeftRadius: "50%60px",  
    borderTopRightRadius: "50%60px",
    borderBottomRightRadius: "50%60px", 
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        [theme.breakpoints.down("sm")]:{
            display:"none"
          }
      },

      telegram1:{
          display:"none",
          [theme.breakpoints.down("sm")]:{
            fontFamily:"Sora, sans-serif",
            fontWeight:"400",
            display: "flex",
            position:"relative",
            marginTop: theme.spacing(0),
            color: "white",
            marginRight: theme.spacing(68),
            width: theme.spacing(22),
            
            backgroundColor:"#5d2177", 
            textTransform:"capitalize",
            borderTopLeftRadius: "50%60px",
        borderBottomLeftRadius: "50%60px",  
        borderTopRightRadius: "50%60px",
        borderBottomRightRadius: "50%60px", 
          }
      },
      sectionImg:{
          marginTop: theme.spacing(8),
          [theme.breakpoints.down("sm")]:{
           
            marginRight: theme.spacing(55)
          }
      },
      sectionImgSub:{
        width: theme.spacing(60), 
        height  : "auto",
        marginRight:theme.spacing(11),
        animationName: "$example",
    animationDuration: "4s",
    animationIterationCount: "infinite",
        [theme.breakpoints.down("sm")]:{
            marginTop: theme.spacing(-10),
            width: theme.spacing(45), 
           height  : theme.spacing(45),
           marginBottom: theme.spacing(-1),
           marginRight:theme.spacing(7),
           
           
          }
      } 
      
}))

function Section2() {
    const classes = useStyles()
    return (
        <div className={classes.section}>
            <div className={classes.container}>
            <Fade bottom>
            <div className={classes.sectionInfo}>
                <h1 className={classes.title}>Huge Opportunity</h1>
                <p className={classes.sectionText}>With the spread of various social network on a global scale, humans realized that finding new friends or lovely mates has never been so much easier.
           Many families have grown all over the world thanks to dating apps and social network."
           </p>
                    <Button
                    startIcon={<Send />}
                    variant="contained"
                    className ={classes.telegram}
                     >
                    Join Telegram
                    </Button>
            </div>
            <div className={classes.sectionImg}>
            <img className={classes.sectionImgSub}src ="/images/ImageHUGE.png"></img>
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
        </div>
    )
}

export default Section2
