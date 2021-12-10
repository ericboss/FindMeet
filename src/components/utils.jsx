import {  makeStyles } from "@material-ui/core"


export const useStyles = makeStyles((theme) =>({
    main: {
        backgroundImage: `url('./images/erictagne.jpg')`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        /*"-webkit-mask-position":"top left",
        "-webkit-mask-image":"url(./images/Shape1.png)",
        "-webkit-mask-repeat":"no-repeat",
    "-webkit-mask-size": "1000px, 1000px",*/
    backgroundSize: "2000px 2000px",
        width:"100%",
        height:theme.spacing(350),
        marginTop: theme.spacing(-25),
        display:"flex",
        flexDirection: "column", 
        justifyContent: "space-between", // vertical
        alignItems: "center" , 
        [theme.breakpoints.down("sm")]:{
            height:theme.spacing(340), 
        }
      
    },
    
    
    content:{
        display:"none",
        flexDirection: "column", 
        justifyContent: "space-between", // vertical
        alignItems: "center",
        marginTop: theme.spacing(80),
        height:theme.spacing(25),
        width: theme.spacing(100),
        [theme.breakpoints.down("sm")]:{
          display:"flex",
          marginTop:theme.spacing(75), 
          marginRight: theme.spacing(30)
          
        }
    },
    timelineDot:{
      color:"#ffff"
    },
    titleBlock:{
      fontFamily:"Sora, sans-serif",
      fontWeight:"100",
      color:"white",
      [theme.breakpoints.down("sm")]:{
        
        marginBottom:theme.spacing(10)
        
      }
    },
    timeRight:{
      fontFamily:"Sora, sans-serif",
            fontWeight:"500",
      color:"white",
      textAlign:"left", 
      [theme.breakpoints.down("sm")]:{
        width: theme.spacing(25),
      marginLeft: theme.spacing(8)
     
    
      }
      
    },
    eventRight:{
      
      [theme.breakpoints.down("sm")]:{
        fontFamily:"Sora, sans-serif",
        fontWeight:"100",
        color:"white",
        fontWeight:"7",
        textAlign:"left",
        fontSize:"12px",
        width: theme.spacing(33),
        
        marginLeft:theme.spacing(2)
        
      }
    },
    
    
    connector:{
      height: theme.spacing(1)
    }, 
    timeLineImg:{
     [theme.breakpoints.down("sm")]:{
         width: theme.spacing(5)
     }
    },
    
    
    seperator:{
        marginLeft: theme.spacing(17)
    }
    
}))
