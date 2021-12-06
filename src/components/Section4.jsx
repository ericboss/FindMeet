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
    
        marginLeft:theme.spacing(40),
        [theme.breakpoints.down("sm")]:{
            display:"flex",
            flexDirection:"column",
            marginTop:theme.spacing(5),
            alignItems:"center"
          }

    },
    sectionInfo:{
        width: theme.spacing(30),
        marginRight:theme.spacing(20),
        [theme.breakpoints.down("sm")]:{
            marginRight: theme.spacing(55)
        }
    },
    sectionText:{
       width:theme.spacing(70) , 
       fontFamily:"Sora, sans-serif",
       fontWeight:"500",
       textAlign: "left",
       fontSize:theme.spacing(1.8),
       marginBottom:theme.spacing(3),
       color:"#5d2177",
       [theme.breakpoints.down("sm")]:{
        width:"260px", 
        marginLeft: theme.spacing(4),
        
        
      }
    },
    title:{
        color:"#ac3b69", 
        fontFamily:"Sora, sans-serif",
        fontWeight:"100",
        fontSize:theme.spacing(7.2),
        lineHeight : theme.spacing(0.15) , 
        width: theme.spacing(90),
        marginBottom:theme.spacing(1), 
        [theme.breakpoints.down("sm")]:{
            width:theme.spacing(35),
            marginLeft: theme.spacing(4), 
            marginRight: theme.spacing(7), 
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
        
        marginBottom: theme.spacing(9),
        [theme.breakpoints.down("sm")]:{
            width: theme.spacing(45), 
           height  : theme.spacing(45),
           marginBottom: theme.spacing(5),
           marginRight:theme.spacing(7),
           
           
          }
      } 
      
}))

function Section4() {
    const classes = useStyles()
    return (
        <div className={classes.section}>
            <div className={classes.container}>
            <Fade bottom>
            <div className={classes.sectionInfo}>
                <h1 className={classes.title}>Find people instantly</h1>
                <p className={classes.sectionText}>With FindMeet app users can find people around them, or around the
           world instantly, based on interest, passions, or needs.
              <br/>
              <br/>
           Everything it's easy to use for everyone on thier smartphone with FindMeet app.</p>
                    <Button
                    startIcon={<Send />}
                    variant="contained"
                    className ={classes.telegram}
                     >
                    Join Telegram
                    </Button>
            </div>
            <div className={classes.sectionImg}>
            <img className={classes.sectionImgSub}src ="/images/dat1.png"></img>
            </div>
            </Fade>
            </div>
        </div>
    )
}

export default Section4
