import React from 'react'
import {  Avatar, makeStyles, Toolbar, Typography } from "@material-ui/core"
import SectionIconRight from './SectionIconRight'
import SectionIconLeft from './SectionIconLeft'
import { Facebook, Instagram, Reddit, Twitter } from '@material-ui/icons'
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles((theme) =>({
main: {
    
    width:"90%",
  
 
}, 
teamInfo:{
    display:"flex",
    flexDirection: "column", 
    justifyContent: "space-between", // vertical
    alignItems: "center" ,
    marginLeft: theme.spacing(12),
},

teamPic:{
    width:"150px",
    height:"150px",
    marginLeft: theme.spacing(5),
},
teamMembers1:{
    marginTop: theme.spacing(10),
    display:"grid",
    gridTemplateColumns: "1fr 1fr 1fr",
     gridGap: theme.spacing(5),
     columnGap: theme.spacing(0),
     marginRight: theme.spacing(20),
     
    [theme.breakpoints.down("sm")]:{
        display:"grid",
        gridTemplateColumns: "1fr",
         gridGap: theme.spacing(5),
         columnGap: theme.spacing(0),
         marginLeft: theme.spacing(-25),
         marginTop: theme.spacing(2),
       
        
        
      }
    
}, 
teamMembers2:{
    display:"flex",
    
    alignItems: "center",
    justifyContent:"center",
   
    marginTop:theme.spacing(8),
    marginLeft:theme.spacing(-10),
    
    [theme.breakpoints.down("sm")]:{
        display:"flex", 
        alignItems:"center", 
        flexDirection:"column",
        
        marginRight: theme.spacing(26),
        marginTop: theme.spacing(-1),
        
      }
    
},
teamMembers3:{
    display:"flex",
    
    
    justifyContent:"space-around",
    marginTop:theme.spacing(8),
    marginLeft:theme.spacing(20),
    [theme.breakpoints.down("sm")]:{
        display:"flex", 
        alignItems:"center", 
        flexDirection:"column",
        marginRight: theme.spacing(26),
        marginTop: theme.spacing(-1),
        
        
      }
    
},
member:{
   bacgroundColor: "#e2e219s",
    marginTop:theme.spacing(5),
    [theme.breakpoints.down("sm")]:{
        marginTop:theme.spacing(8),
        marginLeft:theme.spacing(15)
        
      }
    
},
title:{
    color:"#5d2177", 
    fontFamily:"Sora, sans-serif",
    fontWeight:"100",
    fontSize:theme.spacing(6.5),
    marginBottom:theme.spacing(3),
    [theme.breakpoints.down("sm")]:{
        marginLeft: theme.spacing(-6),

    }
    
},
infoText:{
    color:"#5d2177", 
    width: theme.spacing(85) , 
    fontFamily:"Sora, sans-serif",
   
        fontWeight:"500",
        textAlign: "center",
        
        fontSize:theme.spacing(1.8),
    [theme.breakpoints.down("sm")]:{
        marginLeft: theme.spacing(7), 
        marginRight: theme.spacing(15),
        width: theme.spacing(45),

      }
},
socials:{
    position : "relative",
    color: "white",
    backgroundColor:"#5d2177", 
    borderRadius:"50%", 
    cursor:"pointer", 
    width: theme.spacing(2.5),
    height: "auto",
    justifyContent:"flex-end",
    
    marginLeft: theme.spacing(1),
    top: theme.spacing(1),

},
name:{
 color: "#5d2177",
 fontFamily:"Sora, sans-serif",
 textAlign: "center",
 fontWeight:"500",
 fontSize: theme.spacing(6),
 
 marginBottom: theme.spacing(-1),
 [theme.breakpoints.down("sm")]:{
    lineHeight : "55px" ,
    marginLeft: theme.spacing(-15)
 }
},
jobTitle:{
color: "#5d2177",
fontFamily:"Sora, sans-serif",
fontWeight:"100",
textAlign: "center",

fontSize: theme.spacing(3),
[theme.breakpoints.down("sm")]:{
    width:"300px",
    marginRight:theme.spacing(9)
  }
},
logoMern:{
    
    [theme.breakpoints.down("sm")]:{
        marginBottom:theme.spacing(1),
      }
},
bannerIcon:{
 textAlign:"right"
    
},
iconGroup:{
    marginTop: theme.spacing(3)
},
socials:{
    display: "flex",
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(7),
},
subSocials:{
    
    cursor:"pointer", 
    marginLeft: theme.spacing(1),
    top: theme.spacing(1),
    width: theme.spacing(2.5),
    height:"auto"

},
items:{
 marginLeft: theme.spacing(35),
 [theme.breakpoints.down("sm")]:{

 },
 
 
},
nameEric:{
    width:"180%",
     marginLeft:"-100px",
     color: "#5d2177",
 fontFamily:"Sora, sans-serif",
 textAlign: "center",
 fontWeight:"500",
 fontSize: theme.spacing(6),
 
 marginBottom: theme.spacing(-1),
 [theme.breakpoints.down("sm")]:{
     marginRight: theme.spacing(30), 
     marginLeft: theme.spacing(-28),
 }
 },
 jobTitleEric:{
    color: "#5d2177",
    fontFamily:"Sora, sans-serif",
    fontWeight:"100",
    textAlign: "center",
    
    fontSize: theme.spacing(3),
    [theme.breakpoints.down("sm")]:{
        marginLeft:theme.spacing(-20),
    }
 },
 jobTitleEric1:{
    color: "#5d2177",
    fontFamily:"Sora, sans-serif",
    fontWeight:"100",
    textAlign: "center",
    width:"180%",
     marginLeft:"-100px",
    
    fontSize: theme.spacing(3),
    [theme.breakpoints.down("sm")]:{
        marginLeft:theme.spacing(-28),
    }
 }, 
 nameAlex:{
    marginLeft:"-20px",
    width:"180%",
     marginLeft:"-100px",
     color: "#5d2177",
 fontFamily:"Sora, sans-serif",
 textAlign: "center",
 fontWeight:"500",
 fontSize: theme.spacing(6),
 
 marginBottom: theme.spacing(-1),
 [theme.breakpoints.down("sm")]:{
    marginLeft:theme.spacing(-28),
 }
 },
 jobTitleAlex:{
    width:"150%",
    marginLeft:"-55px",
    color: "#5d2177",
    fontFamily:"Sora, sans-serif",
    fontWeight:"100",
    textAlign: "center",
    
    fontSize: theme.spacing(3),
    [theme.breakpoints.down("sm")]:{
        marginLeft:theme.spacing(-21),
    }

 },
 nameCameron:{
    width:"180%", 
    marginLeft:"-40px",
     color: "#5d2177",
 fontFamily:"Sora, sans-serif",
 textAlign: "center",
 fontWeight:"500",
 fontSize: theme.spacing(6),
 
 marginBottom: theme.spacing(-1),
 [theme.breakpoints.down("sm")]:{
    marginLeft:theme.spacing(-29),
    fontSize: theme.spacing(5),
 }

 },

 jobTitleCameron:{
    
    color: "#5d2177",
    fontFamily:"Sora, sans-serif",
    fontWeight:"100",
    textAlign: "center",
    width:"150%", 
    marginLeft:"-40px",
    
    fontSize: theme.spacing(3),
    [theme.breakpoints.down("sm")]:{
        marginLeft:theme.spacing(-21),
    }
 },
 nameFarhul:{
    width:"150%", 
    marginLeft:"-80px",
    color: "#5d2177",
    fontFamily:"Sora, sans-serif",
    textAlign: "center",
    fontWeight:"500",
    fontSize: theme.spacing(6),
    
    marginBottom: theme.spacing(-1),
    [theme.breakpoints.down("sm")]:{
        marginLeft:theme.spacing(-21),
    }
    
 }, 
 namePaul:{
    marginLeft:"-25px",
    color: "#5d2177",
    fontFamily:"Sora, sans-serif",
    textAlign: "center",
    fontWeight:"500",
    fontSize: theme.spacing(6),
    
    marginBottom: theme.spacing(-1),
    [theme.breakpoints.down("sm")]:{
        marginLeft:theme.spacing(-18),
    }
 },
 jobTitlePaul:{
    color: "#5d2177",
    fontFamily:"Sora, sans-serif",
    fontWeight:"100",
    textAlign: "center",
    
    fontSize: theme.spacing(3),
    [theme.breakpoints.down("sm")]:{
        marginLeft:theme.spacing(-18),
    }
 }, 
 teamPicMep:{
    width:"95%", 
     height: "auto",
    marginBottom:"50px",
    marginLeft: theme.spacing(5),
    [theme.breakpoints.down("sm")]:{
        marginLeft:theme.spacing(-5), 
        width:"85%", 
        height: "auto",
    }

 },
 nameMep:{
    width:"150%", 
    marginLeft:"-30px",
    color: "#5d2177",
 fontFamily:"Sora, sans-serif",
 textAlign: "center",
 fontWeight:"500",
 fontSize: theme.spacing(6),
 
 marginBottom: theme.spacing(-1),
 [theme.breakpoints.down("sm")]:{
    marginLeft:theme.spacing(-22), 
 }
 },
 jobTitleMep:{
    width:"150%",
     marginLeft:"-30px",
     color: "#5d2177",
    fontFamily:"Sora, sans-serif",
    fontWeight:"100",
    textAlign: "center",

    fontSize: theme.spacing(3),
    [theme.breakpoints.down("sm")]:{
        marginLeft:theme.spacing(-21),
        fontSize: theme.spacing(2.5),
    }
 },
 jobTitleMep1:{
    width:"200%",
    marginLeft:"-60px",
 
     color: "#5d2177",
    fontFamily:"Sora, sans-serif",
    fontWeight:"100",
    textAlign: "center",

    fontSize: theme.spacing(3),
    [theme.breakpoints.down("sm")]:{
        marginLeft:theme.spacing(-32.5),
        fontSize: theme.spacing(2.3),
    }
 }


}))

function Teams() {
    const classes= useStyles();
    return (
        <div className={classes.main}>
            <Fade bottom>
            <div className= {classes.teamInfo}>
                <Typography className={classes.title} variant="h2"> Team</Typography>
                <Typography variant="body2"
                            className={classes.infoText}> Our team is growing every single day an we are hiring since day one. Our mission
                is to help 
                </Typography>
                <Typography variant="body2"
                            className={classes.infoText}> everyone on earth to find new friends and build real connections with them
                </Typography>

            </div>
            <div className={classes.teamMembers1}>
            <div className={classes.items}>
            <Avatar 
                className={classes.teamPic}
                src="/images/jdpl.png"
                />
                <Typography className={classes.name} variant="h5"> JDPL</Typography>
                <Typography className={classes.jobTitle} variant="body2"> Co-Founder & CEO</Typography>
            
            <div className={classes.socials}>



            <a href="https://www.reddit.com/user/Findmeet">
                    <img className={classes.subSocials}   src="/images/reddit.png" />  
                     </a>

                    <a href="https://twitter.com/FINDMEET_IO">
                    <img className={classes.subSocials}   src="/images/twitter.png" /></a>
                    <a href="https://www.facebook.com/Findmeet.io/" >
                    <img className={classes.subSocials}   src="/images/facebook.png" /></a>
                    <a href="https://www.instagram.com/findmeet.io/">
                    <img className={classes.subSocials}   src="/images/instagram.png" />
                    
                    </a>
            </div>
            </div>
                    

            <div className={classes.items}>
            <Avatar 
                className={classes.teamPic}
                src="/images/mik.png"
                />
                <Typography className={classes.name} variant="h5"> MIK</Typography>
                <Typography className={classes.jobTitle} variant="body2">Co-Founder & COO</Typography>
            
            <div className={classes.socials}>



            <a href="https://www.reddit.com/user/Findmeet">
                    <img className={classes.subSocials}   src="/images/reddit.png" />  
                     </a>

                    <a href="https://twitter.com/FINDMEET_IO">
                    <img className={classes.subSocials}   src="/images/twitter.png" /></a>
                    <a href="https://www.facebook.com/Findmeet.io/" >
                    <img className={classes.subSocials}   src="/images/facebook.png" /></a>
                    <a href="https://www.instagram.com/findmeet.io/">
                    <img className={classes.subSocials}   src="/images/instagram.png" />
                    
                    </a>
            </div>
            </div>


            <div className={classes.items}>
            <Avatar 
                className={classes.teamPic}
                src="/images/gabbox.png"
                />
                <Typography className={classes.name} variant="h5">GabboX</Typography>
                <Typography className={classes.jobTitle} variant="body2">Co-Founder & CMO</Typography>
            
            <div className={classes.socials}>

            <a href="https://www.reddit.com/user/Findmeet">
                    <img className={classes.subSocials}   src="/images/reddit.png" />  
                     </a>

                    <a href="https://twitter.com/FINDMEET_IO">
                    <img className={classes.subSocials}   src="/images/twitter.png" /></a>
                    <a href="https://www.facebook.com/Findmeet.io/" >
                    <img className={classes.subSocials}   src="/images/facebook.png" /></a>
                    <a href="https://www.instagram.com/findmeet.io/">
                    <img className={classes.subSocials}   src="/images/instagram.png" />
                    
                    </a>
            </div>
            </div>
        

        
                    

                    
               
            

           
            <div className={classes.items}>
            <Avatar 
                className={classes.teamPic}
                src="/images/eric.png"
                />
                <Typography  className={classes.nameEric} variant="h5"> Eric Hermann</Typography>
                <Typography className={classes.jobTitleEric} variant="body2"> CTO-Blockchain </Typography>
                <Typography  className={classes.jobTitleEric1} variant="body2"> Software & App Developer </Typography>
            <div className={classes.socials}>


            <a href="https://www.reddit.com/user/Findmeet">
                    <img className={classes.subSocials}   src="/images/reddit.png" />  
                     </a>

                    <a href="https://twitter.com/FINDMEET_IO">
                    <img className={classes.subSocials}   src="/images/twitter.png" /></a>
                    <a href="https://www.facebook.com/Findmeet.io/" >
                    <img className={classes.subSocials}   src="/images/facebook.png" /></a>
                    <a href="https://www.instagram.com/findmeet.io/">
                    <img className={classes.subSocials}   src="/images/instagram.png" />
                    
                    </a>
            </div>
            </div>
                    

            <div className={classes.items}>
            <Avatar 
                className={classes.teamPic}
                src="/images/Alex.png"
                />
                <Typography  className={classes.nameAlex} variant="h5"> Alex</Typography>
                <Typography  className={classes.jobTitleAlex} variant="body2">Chief Social Media Officer</Typography>
            
            <div className={classes.socials}>

            <a href="https://www.reddit.com/user/Findmeet">
                    <img className={classes.subSocials}   src="/images/reddit.png" />  
                     </a>

                    <a href="https://twitter.com/FINDMEET_IO">
                    <img className={classes.subSocials}   src="/images/twitter.png" /></a>
                    <a href="https://www.facebook.com/Findmeet.io/" >
                    <img className={classes.subSocials}   src="/images/facebook.png" /></a>
                    <a href="https://www.instagram.com/findmeet.io/">
                    <img className={classes.subSocials}   src="/images/instagram.png" />
                    
                    </a>
            </div>
            </div>


            <div className={classes.items}>
            <Avatar 
                className={classes.teamPic}
                src= "/images/cameron.png"
                />
                <Typography  className={classes.nameCameron} variant="h5">Cameron Pheiffer</Typography>
                <Typography  className={classes.jobTitleCameron} variant="body2">Game Developer & 3D Artist</Typography>
            
            <div className={classes.socials}>



            <a href="https://www.reddit.com/user/Findmeet">
                    <img className={classes.subSocials}   src="/images/reddit.png" />  
                     </a>

                    <a href="https://twitter.com/FINDMEET_IO">
                    <img className={classes.subSocials}   src="/images/twitter.png" /></a>
                    <a href="https://www.facebook.com/Findmeet.io/" >
                    <img className={classes.subSocials}   src="/images/facebook.png" /></a>
                    <a href="https://www.instagram.com/findmeet.io/">
                    <img className={classes.subSocials}   src="/images/instagram.png" />
                    
                    </a>
            </div>             
               
            </div>


            <div className={classes.items}>
            <Avatar 
                className={classes.teamPic}
                src= ""
                />
                <Typography  className={classes.nameFarhul} variant="h5">Farhul Rozi</Typography>
                <Typography  style={{marginLeft:"-40px"}} className={classes.jobTitle} variant="body2">Gaming Developer</Typography>
            
            <div className={classes.socials}>


            <a href="https://www.reddit.com/user/Findmeet">
                    <img className={classes.subSocials}   src="/images/reddit.png" />  
                     </a>

                    <a href="https://twitter.com/FINDMEET_IO">
                    <img className={classes.subSocials}   src="/images/twitter.png" /></a>
                    <a href="https://www.facebook.com/Findmeet.io/" >
                    <img className={classes.subSocials}   src="/images/facebook.png" /></a>
                    <a href="https://www.instagram.com/findmeet.io/">
                    <img className={classes.subSocials}   src="/images/instagram.png" />
                    
                    </a>
            </div>             
               
            </div>


            <div className={classes.items}>
            <Avatar 
                className={classes.teamPic}
                src= "/images/pp.png"
                />
                <Typography  className={classes.namePaul} variant="h5">Paul</Typography>
                <Typography className={classes.jobTitlePaul} variant="body2">Graphic Designer</Typography>
            
            <div className={classes.socials}>

            <a href="https://www.reddit.com/user/Findmeet">
                    <img className={classes.subSocials}   src="/images/reddit.png" />  
                     </a>

                    <a href="https://twitter.com/FINDMEET_IO">
                    <img className={classes.subSocials}   src="/images/twitter.png" /></a>
                    <a href="https://www.facebook.com/Findmeet.io/" >
                    <img className={classes.subSocials}   src="/images/facebook.png" /></a>
                    <a href="https://www.instagram.com/findmeet.io/">
                    <img className={classes.subSocials}   src="/images/instagram.png" />
                    
                    </a>
            </div>             
               
            </div>

            <div className={classes.items}>
            <img 
                
                className={classes.teamPicMep}
                src= "/images/Logo-mep-def.png"
                />
                <Typography  className={classes.nameMep} variant="h5">Mep Law Int</Typography>
                <Typography  className={classes.jobTitleMep} variant="body2">International Law Firm based</Typography>
                <Typography  className={classes.jobTitleMep1} variant="body2">in New York, Rome, Milan,Izmir, London </Typography>
            <div className={classes.socials}>


            <a href="https://www.reddit.com/user/Findmeet">
                    <img className={classes.subSocials}   src="/images/reddit.png" />  
                     </a>

                    <a href="https://twitter.com/FINDMEET_IO">
                    <img className={classes.subSocials}   src="/images/twitter.png" /></a>
                    <a href="https://www.facebook.com/Findmeet.io/" >
                    <img className={classes.subSocials}   src="/images/facebook.png" /></a>
                    <a href="https://www.instagram.com/findmeet.io/">
                    <img className={classes.subSocials}   src="/images/instagram.png" />
                    
                    </a>
            </div>             
               
            </div>
            </div>         
            </Fade>
        </div>
    )
}

export default Teams
