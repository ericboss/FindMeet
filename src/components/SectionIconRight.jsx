import React from 'react'
import {  makeStyles, Button, Typography } from "@material-ui/core"
import { Send } from '@material-ui/icons'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) =>({
    section:{
        backgroundImage: `url('./images/features-bg.png')`,
        backgroundPosition: 'bottom', 
        backgroundSize: 'cover', 
      
        display: "flex", 
        alignItems:"center",
        justifyContent:"space-around",
        [theme.breakpoints.down("sm")]:{
            display:"flex",
            flexDirection:"column",
            marginTop:theme.spacing(5),
            alignItems:"center"
          }
    },
    sectionInfo:{
        marginLeft:theme.spacing(4)
    },
    sectionText:{
       width:"400px" , 
       fontFamily: ['Source Sans Pro', "sans-serif"  ],
       marginBottom:theme.spacing(3),
       color:"#9c27b0",
    },
    title:{
        color:"#7a1e8a", 
        fontFamily: ['Source Sans Pro', "sans-serif"  ],
        fontWeight:"7",
        marginBottom:theme.spacing(3), 
        [theme.breakpoints.down("sm")]:{
            width:theme.spacing(20),
            marginLeft: theme.spacing(8)
          }
    }, 
    telegram:{
        position:"relative",
        marginTop: theme.spacing(0),
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
      sectionImg:{
          marginTop: theme.spacing(8)
      }, 
      
}))

function SectionIconRight({title, text, image_url}) {
    const classes = useStyles()
    return (
        <div className={classes.section}>
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
    )
}

export default SectionIconRight
