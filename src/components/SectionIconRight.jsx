import React from 'react'
import {  makeStyles, Button, Typography } from "@material-ui/core"
import { Send } from '@material-ui/icons'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) =>({
    section:{
        backgroundImage: `url('./images/features-bg.png')`,
        backgroundPosition: 'bottom', 
        backgroundSize: 'cover', 
      
        
    },
    container:{
        marginTop:theme.spacing(-8),
        display: "flex", 
        alignItems:"center",
        justifyContent:"space-around",
        width:"65%",
        marginLeft:theme.spacing(40),
        [theme.breakpoints.down("sm")]:{
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
       width:"400px" , 
       fontFamily: ['Source Sans Pro', "sans-serif"  ],
       marginBottom:theme.spacing(3),
       color:"#5d2177",
       [theme.breakpoints.down("sm")]:{
        width:"260px", 
        marginLeft: theme.spacing(4),
        
        
      }
    },
    title:{
        color:"#ac3b69", 
        fontFamily: ['Source Sans Pro', "sans-serif"  ],
        fontWeight:"7",
        fontSize:"60px",
        width:"70%",
        lineHeight : "55px" , 
        marginBottom:theme.spacing(3), 
        [theme.breakpoints.down("sm")]:{
            width:theme.spacing(35),
            marginLeft: theme.spacing(4), 
            marginRight: theme.spacing(7), 
          }
    }, 
    telegram:{
        position:"relative",
        marginTop: theme.spacing(0),
        color: "white",
        backgroundColor:"#5d2177", 
        textTransform:"capitalize",
        borderRadius:"10%", 
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        [theme.breakpoints.down("sm")]:{
            marginLeft: theme.spacing(10), 
            marginRight: theme.spacing(8)
          }
      },
      sectionImg:{
          marginTop: theme.spacing(8),
          [theme.breakpoints.down("sm")]:{
           
            marginRight: theme.spacing(55)
          }
      },
      sectionImgSub:{
        width: theme.spacing(70), 
        height  : theme.spacing(70),
        [theme.breakpoints.down("sm")]:{
            width: theme.spacing(45), 
           height  : theme.spacing(45),
           marginBottom: theme.spacing(5),
           marginRight:theme.spacing(7),
           
           
          }
      } 
      
}))

function SectionIconRight({title, text, image_url}) {
    const classes = useStyles()
    return (
        <div className={classes.section}>
            <div className={classes.container}>
            <Fade bottom>
            <div className={classes.sectionInfo}>
                <h1 className={classes.title}>{title}</h1>
                <p className={classes.sectionText}>{text}</p>
                    <Button
                    startIcon={<Send />}
                    variant="contained"
                    className ={classes.telegram}
                     >
                    Join Telegram
                    </Button>
            </div>
            <div className={classes.sectionImg}>
            <img className={classes.sectionImgSub}src ={image_url}></img>
            </div>
            </Fade>
            </div>
        </div>
    )
}

export default SectionIconRight
