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
        marginLeft:theme.spacing(15),
        [theme.breakpoints.down("sm")]:{
            marginRight: theme.spacing(80)
        }
    },
    sectionText:{
       width:"400px" , 
       fontFamily: ['Source Sans Pro', "sans-serif"  ],
       marginBottom:theme.spacing(3),
       color:"#5d2177", 
       textAlign:"center",
       [theme.breakpoints.down("sm")]:{
        marginRight:theme.spacing(5),
        marginLeft: theme.spacing(5), 
        width:"270px"
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
            marginLeft: theme.spacing(8),
            
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
        width: theme.spacing(60), 
        height  : theme.spacing(60),
        [theme.breakpoints.down("sm")]:{
            width: theme.spacing(45), 
           height  : theme.spacing(45),
           marginBottom: theme.spacing(5),
           marginRight:theme.spacing(7),
           
           
          }
      }
}))

function SectionIconLeft({title, text, image_url}) {
    const classes = useStyles()
    return (

        <div className={classes.section}>
            <Fade bottom>
                <div className= {classes.container}>
            <div className={classes.sectionImg}>
            <img className={classes.sectionImgSub}src ={image_url}></img>
            </div>

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
            </div>
            </Fade>
            
        </div>
    )
}

export default SectionIconLeft
