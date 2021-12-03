import React from 'react'
import {  Avatar, makeStyles, Toolbar, Typography } from "@material-ui/core"
import SectionIconRight from './SectionIconRight'
import SectionIconLeft from './SectionIconLeft'
import { Facebook, Instagram, Reddit, Twitter } from '@material-ui/icons'
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles((theme) =>({
main: {
    backgroundImage: `url('./images/features-bg.png')`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
 
}, 
teamInfo:{
    display:"flex",
    flexDirection: "column", 
    justifyContent: "space-between", // vertical
    alignItems: "center" 
},
infoText:{
    width:"700px"
},
teamPic:{
    width:"150px",
    height:"150px"
},
teamMembers:{
    display:"flex",
    flexWrap:"wrap",
    
    justifyContent:"space-around",
    marginTop:theme.spacing(8),
    marginLeft:theme.spacing(20),
    
}, 
member:{
   
    marginTop:theme.spacing(5),
},
title:{
    color:"#9c27b0", 
    fontFamily: ['Source Sans Pro', "sans-serif"  ],
    fontWeight:"7",
},
infoText:{
    color:"#9c27b0", 
    fontFamily: ['Source Sans Pro', "sans-serif"  ],
},
socials:{
    color: "white",
    backgroundColor:"#7b1fa2", 
    borderRadius:"50%", 
    cursor:"pointer", 
    marginLeft: theme.spacing(1),
    top: theme.spacing(1),

},
name:{
 color: "#7b1fa2",
 fontFamily: ['Source Sans Pro', "sans-serif"  ],
 fontWeight:"bold",
 fontSize: theme.spacing(4)
},
jobTitle:{
color: "#7b1fa2",
fontFamily: ['Source Sans Pro', "sans-serif"  ],
fontSize: theme.spacing(3)
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
                is to help everyone on earth to find new friends and build real connections with them
                </Typography>

            </div>
            <div className={classes.teamMembers}>
                <div className={classes.member}>
                <Avatar 
                className={classes.teamPic}
                src="/images/jdpl.png"
                />
                <Typography className={classes.name} variant="h5"> JDPL</Typography>
                <Typography className={classes.jobTitle} variant="body2"> Co-Founder & CEO</Typography>
                <div classname ={classes.bannerIcon}>
                  
                    <Reddit className={classes.socials}/>
                    <Twitter  className={classes.socials}/>
                    <Facebook  className={classes.socials}/>
                    <Instagram className={classes.socials}/>
                   
                    </div>
                    </div>
                    <div className={classes.member}>
                <Avatar 
                className={classes.teamPic}
                src="/images/mik.png"
                />
                <Typography className={classes.name} variant="h5"> MIK</Typography>
                <Typography className={classes.jobTitle} variant="body2">Co-Founder & COO</Typography>
                <div classname ={classes.bannerIcon}>
                  
                    <Reddit className={classes.socials}/>
                    <Twitter className={classes.socials}/>
                    <Facebook className={classes.socials}/>
                    <Instagram className={classes.socials}/>
                   
                    </div>
                    </div>

                    <div className={classes.member}>
                <Avatar 
                className={classes.teamPic}
                src="/images/gabbox.png"
                />
                <Typography className={classes.name} variant="h5"> GabboX</Typography>
                <Typography className={classes.jobTitle} variant="body2">Co-Founder & CMO</Typography>
                <div classname ={classes.bannerIcon}>
                  
                    <Reddit className={classes.socials}/>
                    <Twitter className={classes.socials}/>
                    <Facebook className={classes.socials}/>
                    <Instagram className={classes.socials}/>
                   
                    </div>
                    </div>

                    
               
            </div>



            <div style={{marginLeft:"200px"}} className={classes.teamMembers}>
                <div className={classes.member}>
                <Avatar 
                className={classes.teamPic}
                src="/images/eric.png"
                />
                <Typography className={classes.name} variant="h5"> Eric H.</Typography>
                <Typography className={classes.jobTitle} variant="body2"> CTO-Blockchain </Typography>
                <Typography className={classes.jobTitle} variant="body2"> Software & App Developer </Typography>
                <div classname ={classes.bannerIcon}>
                  
                    <Reddit className={classes.socials}/>
                    <Twitter className={classes.socials}/>
                    <Facebook className={classes.socials}/>
                    <Instagram className={classes.socials}/>
                   
                    </div>
                    </div>
                    <div className={classes.member}>
                <Avatar 
                className={classes.teamPic}
                src="/images/Alex.png"
                />
                <Typography className={classes.name} variant="h5"> Alex</Typography>
                <Typography className={classes.jobTitle} variant="body2">Chief Social Media Officer</Typography>
                <div classname ={classes.bannerIcon}>
                  
                    <Reddit className={classes.socials}/>
                    <Twitter className={classes.socials}/>
                    <Facebook className={classes.socials}/>
                    <Instagram className={classes.socials}/>
                   
                    </div>
                    </div>

                    <div className={classes.member}>
                <Avatar 
                className={classes.teamPic}
                src="/images/jdpl.png"
                />
                <Typography className={classes.name} variant="h6"> Cameron Pheiffer</Typography>
                <Typography className={classes.jobTitle} variant="body2">Game Developer & 3D Artist</Typography>
                <div classname ={classes.bannerIcon}>
                  
                    <Reddit className={classes.socials}/>
                    <Twitter className={classes.socials}/>
                    <Facebook className={classes.socials}/>
                    <Instagram className={classes.socials}/>
                   
                    </div>
                    </div>

                   
               
            </div>


            <div style={{marginLeft:"200px"}} className={classes.teamMembers}>
                <div className={classes.member}>
                <Avatar 
                className={classes.teamPic}
                src=""
                />
                <Typography className={classes.name} variant="h5"> Farhul Rozi</Typography>
                <Typography className={classes.jobTitle} variant="body2">Gaming Developer</Typography>
                <div classname ={classes.bannerIcon}>
                  
                    <Reddit className={classes.socials}/>
                    <Twitter className={classes.socials}/>
                    <Facebook className={classes.socials}/>
                    <Instagram className={classes.socials}/>
                   
                    </div>
                    </div>
                    <div className={classes.member}>
                <Avatar 
                className={classes.teamPic}
                src="/images/pp.png"
                />
                <Typography className={classes.name} variant="h5"> Paul</Typography>
                <Typography className={classes.jobTitle} variant="body2">Graphic Designer</Typography>
                <div classname ={classes.bannerIcon}>
                  
                    <Reddit className={classes.socials}/>
                    <Twitter className={classes.socials}/>
                    <Facebook className={classes.socials}/>
                    <Instagram className={classes.socials}/>
                   
                    </div>
                    </div>

                    <div className={classes.member}>
                <img 
                style={{width:"300px"}}
                src="/images/Logo-mep-def.png"
                />
                <Typography className={classes.name} variant="h5"> Mep Law Int</Typography>
                <Typography className={classes.jobTitle} variant="body2">International Law Firm based</Typography>
                <Typography  className={classes.jobTitle} variant="body2">in New York, Rome, Milan,Izmir, London </Typography>
                <div classname ={classes.bannerIcon}>
                  
                    <Reddit className={classes.socials}/>
                    <Twitter className={classes.socials}/>
                    <Facebook className={classes.socials}/>
                    <Instagram className={classes.socials}/>
                   
                    </div>
                    </div>

                    
               
            </div>
            </Fade>
        </div>
    )
}

export default Teams
