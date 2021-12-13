import React from 'react'
import {  makeStyles, Toolbar, Typography } from "@material-ui/core"
import SectionIconRight from './SectionIconRight'
import SectionIconLeft from './SectionIconLeft'
import SectionInter from './SectionInter'


const useStyles = makeStyles((theme) =>({
main: {
    backgroundImage: `url('./images/features-bg.png')`,
    backgroundPosition: 'bottom center', 
    backgroundSize: 'cover',  
    marginTop:theme.spacing(20),
    width:"100%",
    height:"auto",
    [theme.breakpoints.down("sm")]:{
        
            marginTop:theme.spacing(15),
    
      }
        
}, 
about:{
    margin:0,
    padding:0,
    display: "flex",
    alignItems:"center",
    justifyContent: "space-around",
    marginTop:theme.spacing(5),
    width:"65%",
    marginLeft:theme.spacing(32),
    
    [theme.breakpoints.down("sm")]:{
      display:"flex",
      flexDirection:"column",
      marginTop:theme.spacing(15),
      alignItems:"center",
      width: theme.spacing(20),
    
      
    }
    
},
about1:{
    display: "flex",
    alignItems:"center",
    justifyContent: "space-between",
    position:"relative", 
    [theme.breakpoints.down("sm")]:{
        marginTop:theme.spacing(2),
        marginRight:theme.spacing(40), 
        marginLeft:theme.spacing(3)
     
    }
}, 
icon1:{
    position: "absolute",
  top: "0",
  left: "0",
 [theme.breakpoints.down("sm")]:{
     width: theme.spacing(6),
     height: "auto"
 }
},
icon2:{
    position: "absolute",
  top: "0",
  left: "0",
  opacity: ".8",
  [theme.breakpoints.down("sm")]:{
    width: theme.spacing(6),
    height: "auto"
}
},
aboutText:{
    marginLeft:theme.spacing(10),
    
    color:"#898e91",
    textAlign:"left",
   
},
aboutTextParagraph:{
   width:theme.spacing(32), 
   marginTop: theme.spacing(2),
   fontFamily:"Sora, sans-serif",
    fontWeight:"500",
    [theme.breakpoints.down("sm")]:{
        fontSize: theme.spacing(1.8),
        width:theme.spacing(30),
    }
}, 
title:{
    color:"#ac3b69", 
    fontFamily:"Sora, sans-serif",
    fontWeight:"400",
    [theme.breakpoints.down("sm")]:{
     fontSize: theme.spacing(2.5)
    }
    
}, 
aboutImg:{
    width: theme.spacing(0),
    height: "auto"
}


}))
function Section1() {
    const classes = useStyles()
    return (
      
    
        <div id="HowItWorks" className= {classes.main}>
           <div className={classes.about}>
            <div className={classes.about1}>
           <div className={classes.aboutImg}>
           <img className={classes.icon1} src="/images/ICON1.png"/>
            <img className={classes.icon2} src="/images/Icon.png"/>
           </div>
            <div className = {classes.aboutText}>
                <h2 className={classes.title}>Meet people</h2>
                <p  className={classes.aboutTextParagraph}> In FindMeet app you can find interesting people from your smartphone, and invite them into the metaverse.
                <br/>
                <br/>
                <br/>
                </p>
            </div>
            </div>
            <div style={{marginBottom:"30px"}} className={classes.about1}>
           <div className={classes.aboutImg}>
           <img className={classes.icon1} src="/images/ICON2.png"/>
            <img className={classes.icon2} src="/images/Icon.png"/>
           </div>
            <div className = {classes.aboutText}>
                <h2 className={classes.title}>Gaming & Fun</h2>
                <p className={classes.aboutTextParagraph}> FindMeet Game wil be a unique experience in the metaverse to express your self. Think about the famous game "The Sims" ... but in real life, with real people</p>
            </div>
            </div>
            <div className={classes.about1}>
           <div className={classes.aboutImg} >
            <img className={classes.icon1} src="/images/ICON3.png"/>
            <img className={classes.icon2} src="/images/Icon.png"/>
           </div>
            <div className = {classes.aboutText}>
                <h2  className={classes.title}>Play To Earn</h2>
                <p className={classes.aboutTextParagraph}>Findmeet is a play to earn game where you can use, earn, and burn $MEET to create your life into the gane.Build property that becomes Nfts and much more.</p>
            </div>
            </div>
            

           </div>

          
           
        </div>
    )
        
}

export default Section1
