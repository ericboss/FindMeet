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
    width: theme.spacing(2.5),
    height: "auto",
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
                    <img className={classes.subSocials}   src="/images/reddit.png" />  
                     </a>

                    <a href="https://twitter.com/FINDMEET_IO">
                    <img className={classes.subSocials}   src="/images/twitter.png" /></a>
                    <a href="https://www.facebook.com/Findmeet.io/" >
                    <img className={classes.subSocials}   src="/images/facebook.png" /></a>
                    <a href="https://www.instagram.com/findmeet.io/">
                    <img className={classes.subSocials}   src="/images/instagram.png" />
                    
                    </a>
                    <a href="https://www.instagram.com/findmeet.io/">
                    <img className={classes.subSocials}   src="/images/medium.png" />
                    
                    </a>
            </div>
            </div>
        </div>
    )
}

export default Footer
