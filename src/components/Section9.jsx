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
        marginTop: theme.spacing(5),
        
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
            marginTop:theme.spacing(5),
            alignItems:"center",
            flexDirection: "column-reverse"
          }
    },
    sectionInfo:{
        marginTop: theme.spacing(5),
        marginLeft:theme.spacing(10),
        [theme.breakpoints.down("sm")]:{
            marginRight: theme.spacing(80)
        }
    },
    sectionText:{
        width: theme.spacing(68) , 
        fontFamily:"Sora, sans-serif",
        fontWeight:"500",
        textAlign: "left",
        fontSize:theme.spacing(1.8),
       marginBottom:theme.spacing(3),
       color:"#5d2177", 
       [theme.breakpoints.down("sm")]:{
        marginTop: theme.spacing(2),
        width:theme.spacing(45), 
        marginLeft: theme.spacing(9),
        fontSize: theme.spacing(1.8),
        textAlign: "center",
       }
    },
    title:{
        color:"#ac3b69", 
        fontFamily:"Sora, sans-serif",
        fontWeight:"100",
        fontSize:theme.spacing(6.5),
        width:theme.spacing(80),
        marginBottom:theme.spacing(1), 
        [theme.breakpoints.down("sm")]:{
            width:theme.spacing(50),
            fontSize: theme.spacing(3.5),
            lineHeight: theme.spacing(0.2),
            textAlign:"center",
            marginRight: theme.spacing(0), 
            marginLeft: theme.spacing(6),
            marginBottom: theme.spacing(5), 
          }
    }, 
    telegram:{
        position:"relative",
        marginTop: theme.spacing(0),
        color: "white",
        fontFamily:"Sora, sans-serif",
        fontWeight:"400",
        backgroundColor:"#5d2177", 
        textTransform:"capitalize",
        borderTopLeftRadius: "50%60px",
        borderBottomLeftRadius: "50%60px",  
        borderTopRightRadius: "50%60px",
        borderBottomRightRadius: "50%60px", 
        boxShadow: "1px 1px 5px 6px rgba(93,33,119,0.68) -webkit-box-shadow: 1px 1px 5px 6px rgba(93,33,119,0.68) -moz-box-shadow: 1px 1px 5px 6px rgba(93,33,119,0.68)",
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
           
            marginLeft: theme.spacing(11),
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
        height  : theme.spacing(55),
        animationName: "$example",
        animationDuration: "4s",
        animationIterationCount: "infinite",
        [theme.breakpoints.down("sm")]:{
            width: theme.spacing(45), 
           height  : "auto",
           marginBottom: theme.spacing(5),
           marginRight:theme.spacing(10),
           marginTop:theme.spacing(-1),
           
           
          }
      }
}))

function Section9() {
    const classes = useStyles()
    return (

        <div className={classes.section}>
            <Fade bottom>
                <div className= {classes.container}>
            <div className={classes.sectionImg}>
            <img className={classes.sectionImgSub}src ="/images/et1.png"></img>
            </div>

            <div className={classes.sectionInfo}>
                <h1 className={classes.title}>NFT Anonymous Login</h1>
                <p className={classes.sectionText}>Users data is really important.FindMeet have a unique function for LOGIN with data stored which make FindMeet safe and anonymous, for those who needs.</p>
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

export default Section9
