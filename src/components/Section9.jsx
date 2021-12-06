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
        marginTop: theme.spacing(25),
        
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
        marginRight:theme.spacing(5),
        marginLeft: theme.spacing(5), 
        width:"270px"
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
            width:theme.spacing(35),
            marginLeft: theme.spacing(8),
            
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
        width: "auto", 
        height  : theme.spacing(55),
        [theme.breakpoints.down("sm")]:{
            width: theme.spacing(45), 
           height  : theme.spacing(45),
           marginBottom: theme.spacing(5),
           marginRight:theme.spacing(7),
           
           
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
            </Fade>
            
        </div>
    )
}

export default Section9
