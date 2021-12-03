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
        marginTop: theme.spacing(5),
        color: "white",
        backgroundColor:"#7b1fa2",
        textTransform:"capitalize", 
        borderRadius:"10%", 
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        [theme.breakpoints.down("sm")]:{
            marginLeft: theme.spacing(8), 
            marginBottom: theme.spacing(8)
          }
      },
      list1:{
          display: "flex",
          alignItems:"center"
      },
      item:{
        marginLeft: theme.spacing(1), 
        marginBottom: theme.spacing(1),
        fontFamily: ['Source Sans Pro', "sans-serif"  ], 
      }
}))

function SectionIconLeftList() {
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
                    <Button
                    startIcon={<Send />}
                    variant="contained"
                    className ={classes.telegram}
                     >
                    Join Telegram
                    </Button>
            </div>
            </Fade>
            
        </div>
    )
}

export default SectionIconLeftList
