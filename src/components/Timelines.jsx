
import {  makeStyles, Typography, Avatar } from "@material-ui/core"
import * as React from 'react';
import {Timeline, TimelineItem,TimelineSeparator,TimelineConnector,TimelineContent,
    TimelineOppositeContent,TimelineDot} from '@material-ui/lab';

import { Repeat,Fastfood,LaptopMac,Hotel, Facebook } from "@material-ui/icons"

const useStyles = makeStyles((theme) =>({
main: {
    backgroundImage: `url('./images/BG1.png')`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    width:"100%",
    height:theme.spacing(170),
    display:"flex",
    flexDirection: "column", 
    justifyContent: "space-between", // vertical
    alignItems: "center" 
},
content:{
    display:"flex",
    flexDirection: "column", 
    justifyContent: "space-between", // vertical
    alignItems: "center",
    marginTop: theme.spacing(10),
    height:theme.spacing(25),
    width: theme.spacing(100),
    [theme.breakpoints.down("sm")]:{
      
      marginTop:theme.spacing(25)
      
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
    fontSize:"15px"
    
  }
},
eventRight:{
  fontFamily:"Sora, sans-serif",
  fontWeight:"100",
  color:"white",
  fontWeight:"7",
  textAlign:"left",
  [theme.breakpoints.down("sm")]:{
    fontSize:"10px",
    
    marginRight:theme.spacing(8)
    
  }
},

timeLeft:{
  fontFamily:"Sora, sans-serif",
  fontWeight:"500",
  color:"white",
  textAlign:"left", 
  [theme.breakpoints.down("sm")]:{
    fontSize:"15px",
    marginLeft:theme.spacing(18)
    
  }
},
eventLeft:{
  fontFamily:"Sora, sans-serif",
  fontWeight:"100",
  color:"white",
  fontWeight:"7",
  textAlign:"left",
  [theme.breakpoints.down("sm")]:{
    fontSize:"10px",
    
    marginLeft:theme.spacing(18)
    
  }
},
connector:{
  height: theme.spacing(1)
}, 
timeLineImg:{
  marginLeft:theme.spacing(2),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2)
},
background: {
  width: "120%",
    height: "70px", 
    backgroundColor:"#ffff",
    borderRadius:"50%"
},



}))

function Timelines() {
   const classes = useStyles.apply()
    return (
        <div id="timeline" className={classes.main}>
            <div className={classes.content}>

                <div className={classes.title}>
                    <h1 className={classes.titleBlock}>Roadmap</h1>
                </div>
                <div className={classes.timeline}>

                <Timeline position="alternate">
      <TimelineItem classesName={classes.connector}>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          <Typography className={classes.timeLeft} variant="h4">Q4-2021</Typography>
          <Typography className={classes.eventLeft}>- Building Findmeet token and smart contract $MEET<br/>
                      - Starting Development Findmeet App<br/>
                      - Public Sale<br/>
                      - Building Community<br/>
                      - Deals with potential partners<br/>
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator >
          <TimelineConnector />
           <div className={classes.background}>
            <img style={{width:"50px", height: "auto", marginRight:"3px", marginBottom:"5px"}} className={classes.timeLineImg} src="/images/coin-stack.png"/>
           </div>
          <TimelineConnector classesName={classes.connector} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        
         
        
        <TimelineSeparator>
          <TimelineConnector />
          <div className={classes.background}>
          <img style={{marginTop:"22px", marginLeft:"15px"}}className={classes.timeLineImg} 
            src="/images/game.png"
            />
            </div>
         
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h4" className={classes.timeRight} >
            Q1 - 2022
          </Typography>
          <Typography className={classes.eventRight}>
              - Building Findmeet Game, Houses Lands and Characters<br/>
              - Internal Farming<br/>
              - Starting developing NFTs Marketplace  
              <br/>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <br/>
          <Typography className={classes.timeLeft} variant="h4">Q2 - 2022</Typography>
          <Typography className={classes.eventLeft}>- Releasing NFTs Marketplace<br/>
                      - Partnership in the making<br/>
                      <br/>
                      <br/>
                      <br/>
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <div style={{height:"75px",width:"auto"}} className={classes.background}>
          <img 
          style={{width:"75px", height: "auto", marginTop : "17px",marginLeft:"5px" }}
          className={classes.timeLineImg}
            src="/images/NFT.png"
            />
            </div>
         
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <div style={{width:"85px", height:"auto"}} className={classes.background}>
          <img style={{marginTop:"17px",marginLeft:"17px", width:"50px", height:"auto"}} className={classes.timeLineImg}
            src="/images/phone.png"
            />
            </div>
         
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h4" className={classes.timeRight}>
            Q3 - 2022
          </Typography>
          <Typography className={classes.eventRight}>
              - Releasing Findmeet App for Smartphone(IOS & Android)<br/>
              - Integrating Findmeet App with $MEET to unlock all the functions<br/>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <Typography className={classes.timeLeft} variant="h4">Q4-2022</Typography>
          <Typography className={classes.eventLeft}>- Releasing first beta of Findmeet Game integrated with $MEET and NFTs Marketplace<br/>
                      - Marketing Operations to reach more audience and users<br/>
                     
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <div style={{height:"80px"}}  className={classes.background}>
          <img className={classes.timeLineImg}
            src="/images/store.png"
            />
            </div>
        
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <div className={classes.background}>
          <img 
          style={{width:"42px", height:"auto", marginBottom:"10px"}}
          className={classes.timeLineImg}
            src="/images/star.png"
            />
            </div>
         
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h4" className={classes.timeRight}>
            Q1 - 2023
          </Typography>
          <Typography className={classes.eventRight}>
              - Integrating Findmeet App with Findmeet Game.<br/>
              - Releasing new features for Findmeet Users.<br/>
              <br/>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <Typography variant="h4" className={classes.timeLeft}>Q2-2023</Typography>
          <Typography className={classes.eventLeft}>- Sponsorship, PR, Marketing operations<br/>
                      - Releasing Findmeet Game<br/>
                      <br/>
                      <br/>
                     
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <div className={classes.background}>
          <img 
          style={{width:"45px", height:"auto"}}
          className={classes.timeLineImg}
            src="/images/micro.png"
            />
            </div>
          
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <div style={{ width:"80px", height:"auto"}} className={classes.background}>
          <img style={{marginLeft:"5px"}} 
           className={classes.timeLineImg} 
            src="/images/question.png"
          
            />
            </div>
          
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h4" className={classes.timeRight}>
            Q3 - 2023
          </Typography>
          <Typography className={classes.eventRight}>
              - The show will go on ...<br/>
              <br/>
              <br/>
              <br/>
              
          </Typography>
        </TimelineContent>
      </TimelineItem>
  

        <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
         
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          
        </TimelineContent>
      </TimelineItem>
    </Timeline>
                </div>
            </div>
        </div>
    )
}

export default Timelines
