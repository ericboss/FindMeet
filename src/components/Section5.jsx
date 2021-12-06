import React from 'react'
import {  makeStyles, Button, Typography } from "@material-ui/core"
import { Send } from '@material-ui/icons'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) =>({
    section:{
        backgroundImage: `url('./images/features-bg.png')`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        marginLeft:theme.spacing(20)
        
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
        marginLeft:theme.spacing(-1),
        [theme.breakpoints.down("sm")]:{
            marginRight: theme.spacing(80)
        }
    },
    sectionText:{
       width:theme.spacing(79) , 
       fontFamily:"Sora, sans-serif",
       fontWeight:"500",
       marginBottom:theme.spacing(3),
       fontSize:theme.spacing(1.8),
       color:"#5d2177", 
       textAlign:"left",
       
       [theme.breakpoints.down("sm")]:{
        marginRight:theme.spacing(5),
        marginLeft: theme.spacing(5), 
        width:"270px"
      }
    },
    title:{
        color:"#ac3b69", 
        fontFamily:"Sora, sans-serif",
        fontWeight:"100",
        fontSize:theme.spacing(7.2),
        width: theme.spacing(100),
        lineHeight : "55px" ,
        marginBottom:theme.spacing(1), 
        [theme.breakpoints.down("sm")]:{
            width:theme.spacing(35),
            marginLeft: theme.spacing(8),
            
          }
    }, 
    telegram:{
        position:"relative",
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
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        [theme.breakpoints.down("sm")]:{
            marginLeft: theme.spacing(13), 
            marginRight: theme.spacing(10), 
            marginBottom: theme.spacing(5)
          }
      },
      sectionImg:{
       
        [theme.breakpoints.down("sm")]:{
           
            marginRight: theme.spacing(55)
          }
      },
      sectionImgSub:{
        marginLeft:theme.spacing(5),
        width: theme.spacing(80), 
        height  : theme.spacing(80),
        
        [theme.breakpoints.down("sm")]:{
            width: theme.spacing(45), 
           height  : theme.spacing(45),
           marginBottom: theme.spacing(5),
           marginRight:theme.spacing(7),
           
           
          }
      }
}))

function Section5() {
    const classes = useStyles()
    return (

        <div className={classes.section}>
            <Fade bottom>
                <div className= {classes.container}>
            <div className={classes.sectionImg}>
            <img className={classes.sectionImgSub}src ="/images/relationship.png"></img>
            </div>

            <div className={classes.sectionInfo}>
                <h1 className={classes.title}>Get in touch with your rules</h1>
                <p className={classes.sectionText}>Chat, super-private video call or share anything with full control about it. Users can decide their own rules,
                    as for example how many $MEET it cost to get in touch, to talk, to share private content.</p>
                    <Button
                    startIcon={<Send />}
                    variant="contained"
                    className ={classes.telegram}
                     >
                    Join Telegram
                    </Button>
            </div>
            </div>
            </Fade>
            
        </div>
    )
}

export default Section5
