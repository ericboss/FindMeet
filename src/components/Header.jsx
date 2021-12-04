import  { useState } from 'react';
import * as React from 'react';
import {  Button, makeStyles, Typography, MenuItem, Menu } from "@material-ui/core"
import { Facebook, Instagram, Reddit, Send, Twitter, Close } from '@material-ui/icons'
import { Menu as MenuIcon } from '@material-ui/icons';
import Fade from 'react-reveal/Fade';
const useStyles = makeStyles((theme) =>({
  main:{
    backgroundImage: `url('./images/BG.png')`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        // margin: 'auto',
        height: theme.spacing(120),
        width: '100%',
        borderRadius: 8,
        [theme.breakpoints.down("sm")]:{

            height: theme.spacing(80),
        width: '100%',
        marginBottom:theme.spacing(20)
            
          }
       
   
  }, 
  container:{
    width:"90%",
    marginLeft:theme.spacing(20),
    [theme.breakpoints.down("sm")]:{
    marginRight:theme.spacing(5),
    width:"15%",
    marginBottom:theme.spacing(30)
        
      }
  },
  menu:{
      display: "flex",
      alignItems:"center", 
      justifyContent:"space-around",
      marginRight:theme.spacing(30),
      [theme.breakpoints.down("sm")]:{
        marginLeft:theme.spacing(2),
          
        
      } 

     
      
  },
  logoHeader:{
    marginTop:"30px", 
    [theme.breakpoints.down("sm")]:{
        position: "relative",
        
        width:"200px",
        height:"auto",
        
        
    }
  },
  logoItems:{
    [theme.breakpoints.down("sm")]:{
      left:"10%",
      display:"flex",
      justify:"flex-end",
      marginRight:theme.spacing(-13)
        
    }
  } ,
  customMenu:{
   
    color:"white",
    display:"none",
    [theme.breakpoints.down("sm")]:{
        display:"block", 
        marginTop: theme.spacing(3),
        cursor: "pointer",
        
      
      }
  }, 
  findmeetMenu:{
      display: "flex",
      alignItems:"center", 
      justifyContent:"space-between",
      fontFamily: ['Sora', "sans-serif"],
      marginLeft:theme.spacing(30),
      [theme.breakpoints.down("sm")]:{
          
      }
     


      
    

  },
  textMenu:{
      color: "white",
      marginRight:theme.spacing(4), 
      cursor:"pointer",
      textDecoration: "none",
  },
  
  banner:{
      display: "flex",
      alignItems:"center",
      justifyContent: "space-around",
     
      [theme.breakpoints.down("sm")]:{

        display:"flex", 
        flexDirection:"column",
        alignItems: "center",
        marginTop:theme.spacing(10)
        
      }
      
      
     
  },
  bannerImg:{
      
    width:"1000px", 
    height  : "1000px", 
    [theme.breakpoints.down("sm")]:{
        marginLeft:theme.spacing(60),
        marginTop: theme.spacing(-20)
    
      }
  },
  bannerImgSub:{
    width:theme.spacing(100), 
    height  : theme.spacing(100),
    [theme.breakpoints.down("sm")]:{
        width: theme.spacing(55), 
       height  : theme.spacing(55),
       marginBottom: theme.spacing(5),
       
       
      }
  } ,
  bannerInfo:{
    width:"500px", 
    height  : "500px" , 
    marginLeft:theme.spacing(10),
    marginTop:theme.spacing(-15) 
  }, 
  link:{
    listStyle: "none",
    display: "block",
    [theme.breakpoints.down("sm")]:{
        display:"none"
      }
  },
  title:{
      color: "white",
      fontFamily: ['Sora', "sans-serif"],
      [theme.breakpoints.down("sm")]:{
          marginTop:theme.spacing(10),
        fontSize:"35px", 
        marginBottom:theme.spacing(5),
        width:"320px",
        marginLeft:theme.spacing(7),
      }

  }, 
  body:{
    color: "white",
      fontFamily: ['Source Sans Pro', "sans-serif"  ],
      marginTop: theme.spacing(3),
      textAlign:"center",
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down("sm")]:{
    marginLeft:theme.spacing(5),
      fontSize:"13px", 
      width:"350px",
     
    }
  }, 
  bannerIcon:{
      marginTop: theme.spacing(6), 
      [theme.breakpoints.down("sm")]:{
        marginTop:theme.spacing(10),
        width:"500px",
        margin:theme.spacing(2),
        marginLeft:theme.spacing(2),
    }
      
  },
  socials:{
      position:"relative",
      color: "white",
      backgroundColor:"#5d2177", 
      borderRadius:"50%", 
      cursor:"pointer", 
      marginLeft: theme.spacing(1),
      top: theme.spacing(2),
      width:theme.spacing(4),
      height:theme.spacing(4),

  }, 
  telegram:{
    position:"relative",
    marginTop: theme.spacing(0),
    color: "white",
    backgroundColor:"#5d2177", 
    borderRadius:"20%", 
   
    textTransform:"capitalize",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    [theme.breakpoints.down("sm")]:{
        marginLeft:theme.spacing(8),
    
    }
  },
  lightpapaerIcon:{
    marginTop: theme.spacing(0),
    color: "white",
    textTransform:"capitalize",
    backgroundColor:"#5d2177", 
    borderRadius:"10%", 
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
     display: "block",
     [theme.breakpoints.down("sm")]:{
        display:"none"
      }
  },
  
  menuItems:{
      textDecoration:"none"
  },

 

}))
function Header() {
    const classes = useStyles()
    
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <div className={classes.main}>
            <div className={classes.container}>
            <div className={classes.menu}>
                <div className={classes.logoItems}>
                <img src ="/images/L2.png" className={classes.logoHeader}></img>
                </div>
                <div className={classes.findmeetMenu}>
                

                    <li className={classes.link}><a href="#" className={classes.textMenu}>Home</a></li>
                    <li className={classes.link}><a href="#HowItWorks"className={classes.textMenu}>How it Works</a></li>
                    <li className={classes.link}><a href="#tokenomics" className={classes.textMenu}>Tokenomics</a></li>
                    <li className={classes.link}><a href="#timeline" className={classes.textMenu}>Roadmap</a></li>
                    <li className={classes.link}><a href="#meetToken" className={classes.textMenu}>$MEET</a></li>
                    <Button
                    variant="contained"
                    className={classes.lightpapaerIcon}
                    href="#lightpaper"
                     >
                    Demo LightPaper
                    </Button >
                    <MenuIcon
                    className={classes.customMenu}   
                    id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
       
                    />
                    

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}> <a className={classes.menuItems} href="#HowItWorks">How it Works</a></MenuItem>
        <MenuItem onClick={handleClose}><a className={classes.menuItems} href="#tokenomics">Tokenomics</a></MenuItem>
        <MenuItem onClick={handleClose}><a className={classes.menuItems} href="#timeline">Roadmap</a></MenuItem>
        <MenuItem onClick={handleClose}><a className={classes.menuItems}  href="#meetToken">$MEET</a></MenuItem>
        <MenuItem onClick={handleClose}><a className={classes.menuItems} href="#lightpaper">Demo LightPaper</a></MenuItem>
      </Menu>

       

                </div>
            </div>

            <div className={classes.banner}>
                <Fade bottom>
                <div className={classes.bannerInfo}>
                    <div className = {classes.bannerText}>
                     <Typography className= {classes.title} variant="h2">Find & Meet people in the metaverse</Typography>
                     <Typography className= {classes.body} variant="body2">FindMeet is the first decentralized dating & gaming social network in the metaverse where users can create their own world, find new people and meet them at the comfort of their customized home. </Typography>
                    </div>
                    <div classname ={classes.bannerIcon}>
                        
                    <Button
                    startIcon={<Send />}
                    variant="contained"
                    className={classes.telegram}
                     >
                    Join Telegram
                    </Button >
                    
                    
                    <a href="https://www.reddit.com/user/Findmeet">    
                    <Reddit 
                    
                    className = {classes.socials}/></a>

                    <a href="https://twitter.com/FINDMEET_IO">
                    <Twitter
                     
                     className = {classes.socials}/></a>
                    <a href="https://www.facebook.com/Findmeet.io/" >
                        <Facebook
                    className = {classes.socials}/></a>
                    <a href="https://www.instagram.com/findmeet.io/">
                    <Instagram 
                    className = {classes.socials}/></a>
                   
                    </div>
                </div>
                
                <div className={classes.bannerImg}>
                <img className={classes.bannerImgSub} src ="/images/image_header.png"></img>
                </div>
                </Fade>

            </div>
            </div>
        </div>
    )
}

export default Header
