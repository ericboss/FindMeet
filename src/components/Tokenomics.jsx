import React from 'react'
import {  makeStyles, Toolbar, Typography,Button } from "@material-ui/core"
import { SystemUpdateAlt } from "@material-ui/icons"
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) =>({
main: {
    backgroundImage: `url('./images/features-bg.png')`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        width: "100%", 
        height: theme.spacing(150), 
        display:"flex",
        flexDirection: "column", 
        justifyContent: "space-between", // vertical
        alignItems: "center" ,
        marginBottom: theme.spacing(40),
        [theme.breakpoints.down("sm")]:{
            
            marginTop:theme.spacing(-1),
            marginBottom: theme.spacing(5),
          }
}, 
graphico:{
    width: theme.spacing(110), 
        height: "auto",
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down("sm")]:{
            width: theme.spacing(50), 
           height: theme.spacing(40),
           marginLeft:theme.spacing(3)
          }
}, 
tables:{
    display:"flex", 
    marginRight:theme.spacing(2),
    [theme.breakpoints.down("sm")]:{
        display: "flex",
    alignItems:"center",
    flexDirection:"column",
    marginLeft:theme.spacing(15)
      }
    
}, 
tableGroup2:{
    display: "flex",
    alignItems:"center",
    flexDirection:"column",
    marginLeft:theme.spacing(5), 
    [theme.breakpoints.down("sm")]:{
       
    marginTop:theme.spacing(5)
      }
}, 
tableGroup1:{
marginLeft: theme.spacing(4)
},
tabella1:{
    [theme.breakpoints.down("sm")]:{
        width: theme.spacing(25), 
       height: "auto",
       marginRight:theme.spacing(8)
     
      }
},
tabella2:{
    [theme.breakpoints.down("sm")]:{
        width: theme.spacing(35), 
       marginRight:theme.spacing(14)
     
      }
},
tabella3:{
    marginTop:theme.spacing(4),
    [theme.breakpoints.down("sm")]:{
        width: theme.spacing(35), 
       marginRight:theme.spacing(14)
     
      }
},
title:{
    marginTop:theme.spacing(6), 
    marginBottom: theme.spacing(6),
    color:"#5d2177", 
    fontFamily:"Sora, sans-serif",
        fontWeight:"100",
      
    [theme.breakpoints.down("sm")]:{
        fontSize:"30px",
       marginLeft:theme.spacing(4)
     
      }
}, 
button:{
    borderRadius:"10", 
    fontSize: theme.spacing(3),
    marginBottom:theme.spacing(5),
    
    position:"relative",
        marginTop: theme.spacing(0),
        color: "white",
        fontFamily:"Sora, sans-serif",
        fontWeight:"400",
        backgroundColor:"#5d2177", 
        textTransform:"capitalize", 
        borderRadius:"20%", 
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        [theme.breakpoints.down("sm")]:{
            marginLeft: theme.spacing(4), 
            marginBottom: theme.spacing(8)
          }
      
},



}))
function Tokenomics() {
    const classes = useStyles()
    return (
        <div id="tokenomics" className={classes.main}>
            <Fade bottom>
            <Typography variant="h2" className={classes.title}>Tokenomics</Typography>
            <img 
            className={classes.graphico}
            src = "/images/Grafico.jpg"/>

            <div className={classes.tables}>
                <div className={classes.tableGroup1}>
                <img 
                className={classes.tabella1}
            src = "/images/TABELLA1.png"/>
                </div>
                <div className={classes.tableGroup2}>
                <img 
                className={classes.tabella2}
            src = "/images/TABELLA2.png"/>
            <img 
            className={classes.tabella3}
            src = "/images/TABELLA3.png"/>
                </div>


            </div>

            <Typography
            id="lightpaper"
            className={classes.title}
            variant="h2">Download The Lightpaper</Typography>

                <Button
                   
                    className={classes.button}
                    startIcon={<SystemUpdateAlt />}
                    variant="contained"
                    download="findmeet"
                    href="/images/finalfindmeet.pdf"
                     >
                    Download
                </Button>
                </Fade>
        </div>
    )
}

export default Tokenomics
