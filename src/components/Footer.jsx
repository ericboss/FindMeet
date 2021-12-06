import React from 'react'
import {  makeStyles, Toolbar, Typography,Button } from "@material-ui/core"
import { Facebook, Instagram, Reddit, Twitter } from '@material-ui/icons'

const useStyles = makeStyles((theme) =>({
main: {
    backgroundImage: `url('./images/BG.png')`,
        backgroundPosition: 'top center', 
        backgroundRepeat: 'no-repeat',
        width: "100%", 
        height: theme.spacing(35), 
        display:"flex",
        flexDirection: "column", 
        alignItems: "center", 
        
       
}, 
socials:{
    display: "flex",
    marginTop: theme.spacing(2),
    
},
subSocials:{
    color: "white",
    backgroundColor:"#5d2177", 
    borderRadius:"50%", 
    cursor:"pointer", 
    marginLeft: theme.spacing(1),
    top: theme.spacing(1),

},
 
items:{
    marginTop:theme.spacing(20),
    display:"flex",
        flexDirection: "column", 
        alignItems: "center", 
},
logoFooter:{
    marginBotton:theme.spacing(1)
}

}))

function Footer() {
    const classes = useStyles()
    return (
        <div className={classes.main}>

            <div className={classes.items}>
            <img src ="/images/L2.png" className={classes.logoFooter}></img>
            
            <div className={classes.socials}>



            <a href="https://www.reddit.com/user/Findmeet">    
                    <Reddit 
                    
                    className = {classes.subSocials}/></a>

                    <a href="https://twitter.com/FINDMEET_IO">
                    <Twitter
                     
                     className = {classes.subSocials}/></a>
                    <a href="https://www.facebook.com/Findmeet.io/" >
                        <Facebook
                    className = {classes.subSocials}/></a>
                    <a href="https://www.instagram.com/findmeet.io/">
                    <Instagram 
                    className = {classes.subSocials}/></a>
            </div>
            </div>
        </div>
    )
}

export default Footer