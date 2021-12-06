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
        display: "flex", 
        alignItems:"center",
        justifyContent:"space-around",
        marginTop: theme.spacing(7),
        [theme.breakpoints.down("sm")]:{
            display:"flex",
            flexDirection:"column",
            marginTop:theme.spacing(5),
            alignItems:"center", 
            marginBottom:theme.spacing(-18)
          }
    },
    sectionInfo:{
        marginLeft:theme.spacing(1),
        marginRight:theme.spacing(2),
    },
    sectionText:{
       width: theme.spacing(75) , 
       fontFamily:"Sora, sans-serif",
       fontWeight:"500",
       alignItems: "left",
       fontSize:theme.spacing(1.8),
       marginBottom:theme.spacing(3),
       color:"#5d2177", 
       [theme.breakpoints.down("sm")]:{
        width:"290px",
        marginLeft:theme.spacing(8),
        fontSize:"19px",
        textAlign:"center",
        marginBottom:theme.spacing(5),
      }
    },
    title:{
        color:"#ac3b69", 
        fontFamily:"Sora, sans-serif",
        fontWeight:"100",
        fontSize:theme.spacing(7),
        width:"70%", 
        marginBottom:theme.spacing(3), 
        [theme.breakpoints.down("sm")]:{
            width:theme.spacing(35),
            marginLeft: theme.spacing(8),
            marginRight: theme.spacing(8),
          }
    }, 
  
      list1:{
          display: "flex",
          alignItems:"center"
      },
      item:{
        marginLeft: theme.spacing(1), 
        marginBottom: theme.spacing(1),
        fontFamily:"Sora, sans-serif",
        fontWeight:"500",
        lineHeight: theme.spacing(8),
      },
      sectionImg:{
          display:"block",
       marginLeft:theme.spacing(20),
       [theme.breakpoints.down("sm")]:{
        display:"none"
       
       
      }
      },
       sectionImgSub:{
        width: theme.spacing(65),
        height  : theme.spacing(53),
       

        [theme.breakpoints.down("sm")]:{
            width: theme.spacing(60), 
           height  : theme.spacing(55),
           marginBottom: theme.spacing(5),
          
           
           
          }
      },
      
      icon:{
        width:theme.spacing(3),
        [theme.breakpoints.down("sm")]:{
            width:theme.spacing(3),
            height:"auto"
            
          }
      }, 
     
      item:{
        fontFamily:"Sora, sans-serif",
       fontWeight:"500",
          color:"#5d2177",
          lineHeight: theme.spacing(0.2),
          marginLeft:theme.spacing(2),
          marginTop:theme.spacing(1),
          
        [theme.breakpoints.down("sm")]:{
            width:"295px" ,
            fontSize:"18px",
            marginLeft:theme.spacing(1), 
            marginBottom:theme.spacing(1)
            
            
          }  
      }, 
      lists:{
        [theme.breakpoints.down("sm")]:{
           
            marginLeft:theme.spacing(5)
            
          }   
      }, 
      list1:{
        display:"flex",
        alignItems:"center",
        marginBottom:theme.spacing(1),
        
        [theme.breakpoints.down("sm")]:{
           
            marginBottom:theme.spacing(1), 
            display:"flex",
            alignItems:"center"
            
          }
      }
}))

function Section3() {
    const classes = useStyles()
    return (
        <div className={classes.section}>
            <Fade bottom>
            <div className={classes.sectionImg}>
            <img className={classes.sectionImgSub}src ="/images/Logo11.png"></img>
            </div>

            <div className={classes.sectionInfo}>
                <h1 className={classes.title}>But... there are some BIG problems</h1>
                <p className={classes.sectionText}>Traditional online dating platforms just show you other people, with a boring experience and little
                  space to truly express yourself. Everything is limited to a few photos or videos.
                  </p>
                  <div className={classes.lists}>
                    <div className={classes.list1}>
                        <img className={classes.icon}src="/images/Ellisse 1069.png"/>
                        <Typography className={classes.item} variant = "body2">Users Spend More Of Their Time looking For People <br/>
                                                        That Propbably Will Never Meet</Typography>
                    </div>
                    <div className={classes.list1}>
                        <img className={classes.icon}src="/images/Ellisse 1070.png"/>
                        <Typography className={classes.item} variant = "body2">Companies Behind Make Money Taking Advantage Of Your Desires, <br/>
                                                        Making You Pay For All The Advanced Features Like "Upgrades",<br/>
                                                            "Boost Your Profile" Etc</Typography>
                    </div>
                    <div className={classes.list1}>
                        <img className={classes.icon}src="/images/Ellisse 1071.png"/>
                        <Typography className={classes.item} variant = "body2">Users Are Never Rewarded For Their <br/>
                                                        Time Or Money Spent On Social Network</Typography>
                    </div>

                  </div>
                    
            </div>
            </Fade>
            
        </div>
    )
}

export default Section3
