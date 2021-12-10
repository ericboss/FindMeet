import  { useState } from 'react';
import * as React from 'react';
import { Avatar, Button, makeStyles, Typography, MenuItem, Menu } from "@material-ui/core"
import { Facebook, Instagram, Reddit, Send, Twitter, Close } from '@material-ui/icons'
import { Menu as MenuIcon } from '@material-ui/icons';
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
  
  

  main:{
    backgroundImage: `url('./images/BG.png')`,
        backgroundPosition: 'bottom',  
        backgroundRepeat: 'no-repeat',
        // margin: 'auto',
        height: theme.spacing(120),
        width: '100%',
        top:0,
        margin : 0,
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
      zIndex: 100,
     
      [theme.breakpoints.down("sm")]:{
        marginLeft:theme.spacing(2),
       
        
      
          
        
      } 

     
      
  },
  logoHeader:{
    marginTop:"30px", 
    [theme.breakpoints.down("sm")]:{
        width: theme.spacing(20),
        height: "auto",
        marginLeft: theme.spacing(2),
        
        
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
      fontFamily: "Sora, sans-serif",
      marginLeft:theme.spacing(30),
      zIndex: 1000,
      [theme.breakpoints.down("sm")]:{
          
      }
     


      
    

  },
  textMenu:{
      color: "white",
      marginRight:theme.spacing(4), 
      pointerEvents: "auto",
      textDecoration: "none",
      
      fontWeight:"100"
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
      
    width: theme.spacing(90), 
    height  : "auto", 
    marginRight: theme.spacing(45),
    marginTop: theme.spacing(-35),
    
    
    [theme.breakpoints.down("sm")]:{
        marginLeft:theme.spacing(80),
        marginTop: theme.spacing(-70)
    
      }
  },
  bannerImgSub:{
    width:theme.spacing(110), 
    height  : "auto",
    animationName: "$example",
    animationDuration: "4s",
    animationIterationCount: "infinite",
    
    [theme.breakpoints.down("sm")]:{
        width: theme.spacing(55), 
       height  : theme.spacing(55),
       marginBottom: theme.spacing(5),
       
       
      }
  } ,
  bannerInfo:{
    width: theme.spacing(100), 
    height  : theme.spacing(100) , 
    marginLeft:theme.spacing(10),
    marginTop:theme.spacing(20) , 
    [theme.breakpoints.down("sm")]:{
      marginTop: theme.spacing(-2),
      marginLeft:theme.spacing(48),
    },
  }, 
  link:{
    listStyle: "none",
    display: "block",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]:{
        display:"none"
      }
  },
  title:{
      color: "white",
      fontFamily:"Sora, sans-serif",
      fontWeight:"100",
      fontSize:theme.spacing(6),
     
      
      [theme.breakpoints.down("sm")]:{
         fontSize: theme.spacing(4),
         marginTop: theme.spacing(-15),
         marginLeft: theme.spacing(7),

       
      }

  }, 
  body:{
    color: "white",
    fontFamily:"Sora, sans-serif",
    fontWeight:"400",
      marginTop: theme.spacing(3),
      textAlign:"left",
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down("sm")]:{
    marginLeft:theme.spacing(5),
      fontSize:"13px", 
      width:"350px",
     
    }
  }, 
  bannerIcon:{
      marginTop: theme.spacing(6), 
      display:"flex",
      alignItems: "center",
      [theme.breakpoints.down("sm")]:{
        
        display:"flex",
        alignItems: "center",
        flexDirection:"column"
    }
      
  },
  telegramMain:{
    [theme.breakpoints.down("sm")]:{
  marginLeft: theme.spacing(8)
    }
  },
  socialsMain:{
    marginLeft: theme.spacing(19),
    marginTop: theme.spacing(-5.5),
    [theme.breakpoints.down("sm")]:{
    marginLeft: theme.spacing(17),
    marginTop: theme.spacing(0),
    }
  },
  socials:{
      position:"relative",
       
      cursor:"pointer", 
      marginLeft: theme.spacing(0.5),
      top: theme.spacing(2),
      width:theme.spacing(3),
      height:"auto",
      [theme.breakpoints.down("sm")]:{
      width: theme.spacing(3.5),
      height: "auto",
      marginLeft: theme.spacing(0.5),
    
      }

  }, 
  telegram:{
    position:"relative",
    marginTop: theme.spacing(0),
    color: "white",
    backgroundColor:"#5d2177", 
  
    borderTopLeftRadius: "50%60px",
    borderBottomLeftRadius: "50%60px",  
    borderTopRightRadius: "50%60px",
    borderBottomRightRadius: "50%60px", 
   
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
    borderTopLeftRadius: "50%60px",
    borderBottomLeftRadius: "50%60px",  
    borderTopRightRadius: "50%60px",
    borderBottomRightRadius: "50%60px",  
    fontWeight:"200",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
     display: "block",
     [theme.breakpoints.down("sm")]:{
        display:"none"
      }
  },

  lightPapaerItem:{
    marginTop: theme.spacing(0),
    color: "white",
    textTransform:"capitalize",
    backgroundColor:"#5d2177", 
    borderTopLeftRadius: "50%60px",
    borderBottomLeftRadius: "50%60px",  
    borderTopRightRadius: "50%60px",
    borderBottomRightRadius: "50%60px",  
   
    fontFamily: "Sora, sans-serif",
    fontWeight:"400",
     display: "block",
  },
  
  menuItems:{
      textDecoration:"none",
      color:"#fff",
      fontFamily: "Sora, sans-serif",
      fontWeight:"200"
  },
ti:{
  fontFamily: "Sora, sans-serif",
  fontWeight:"100"
},
menuPaper: {
  backgroundColor: "#9D366C"
}

 

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
                    <p className={classes.ti}>Demo LightPaper</p>
                    </Button >
                    <MenuIcon
                    className={classes.customMenu}   
                    id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick = {handleClick}
       
                    />
                    
   
      <Menu
         id="demo-positioned-menu"
         aria-labelledby="demo-positioned-button"
         anchorEl={anchorEl}
         anchorReference="anchorPosition"
          anchorPosition={{ top: 60 }}
         open={open}
         onClose={handleClose}
         anchorOrigin={{
           vertical: 'top',
           horizontal: 'left',
         }}
         transformOrigin={{
           vertical: 'top',
           horizontal: 'left',
         }}
         classes={{ paper: classes.menuPaper }}
      >
        <MenuItem  style={{width:"800px", height:"50px",color:"#fff"}} onClick={handleClose}>Home</MenuItem>
        <MenuItem  onClick={handleClose}> <a className={classes.menuItems} href="#HowItWorks">How it Works</a></MenuItem>
        <MenuItem  onClick={handleClose}><a className={classes.menuItems} href="#tokenomics">Tokenomics</a></MenuItem>
        <MenuItem   onClick={handleClose}><a className={classes.menuItems} href="#timeline">Roadmap</a></MenuItem>
        <MenuItem   onClick={handleClose}><a className={classes.menuItems}  href="#meetToken">$MEET</a></MenuItem>
        <MenuItem  onClick={handleClose}><Button
                    variant="contained"
                    className={classes.lightPapaerItem}
                    href="#lightpaper"
                     >
                    <p className={classes.ti}>Demo LightPaper</p>
                    </Button ></MenuItem>
      </Menu>
    

                </div>
            </div>

            <div className={classes.banner}>
                <Fade bottom>
                <div className={classes.bannerInfo}>
                    <div className = {classes.bannerText}>
                     <Typography className= {classes.title} variant="body3" >Find & Meet people</Typography>
                     <br/>
                     <Typography className= {classes.title} variant="body3" >in the metaverse</Typography>
                     <Typography className= {classes.body} variant="body2">FindMeet is the first decentralized dating & gaming social network in the metaverse where users can create their own world, find new people and meet them at the comfort of their customized home. </Typography>
                    </div>
                    <div classname ={classes.bannerIcon}>
                        <div className={classes.telegramMain}>
                    <Button
                    startIcon={<Send />}
                    variant="contained"
                    className={classes.telegram}
                     >
                    Join Telegram
                    </Button >
                     </div>

                    <div className={classes.socialsMain}>
                    <a href="https://www.reddit.com/user/Findmeet">
                    <img className={classes.socials}   src="/images/reddit.png" />  
                     </a>

                    <a href="https://twitter.com/FINDMEET_IO">
                    <img className={classes.socials}   src="/images/twitter.png" /></a>
                    <a href="https://www.facebook.com/Findmeet.io/" >
                    <img className={classes.socials}   src="/images/facebook.png" /></a>
                    <a href="https://www.instagram.com/findmeet.io/">
                    <img className={classes.socials}   src="/images/instagram.png" />
                    
                    </a>
                    
                    </div>
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
