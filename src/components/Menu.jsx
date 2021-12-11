import React from 'react'
import { Avatar, Button, makeStyles, Typography, MenuItem, Menu } from "@material-ui/core"
import { Menu as MenuIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) =>({

    main:{
        backgroundImage: `url('./images/bg-menu.png')`,
            backgroundPosition: 'bottom',  
            backgroundRepeat: 'no-repeat',
            // margin: 'auto',
            height: theme.spacing(10),
            width: '100%',
          
            margin : 0,
            borderRadius: 8,
            position:"fixed",
            top:0,
            
            [theme.breakpoints.down("sm")]:{
    
                height: theme.spacing(5),
            width: '100%',
            
            position:"fixed",
            top:0,
              },



       
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
    },

    logoHeader:{
        marginTop:"30px", 
        marginLeft: theme.spacing(2),
            
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
      link:{
        listStyle: "none",
        display: "block",
        cursor: "pointer",
        [theme.breakpoints.down("sm")]:{
            display:"none"
          }
      },
      textMenu:{
          color: "white",
          marginRight:theme.spacing(4), 
          pointerEvents: "auto",
          textDecoration: "none",
          
          fontWeight:"100"
      },
   
}))
function Menus() {
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
        </div>
    )
}

export default Menus
