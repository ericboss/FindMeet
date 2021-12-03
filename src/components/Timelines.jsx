
import {  makeStyles, Typography, Avatar } from "@material-ui/core"
import * as React from 'react';
import {Timeline, TimelineItem,TimelineSeparator,TimelineConnector,TimelineContent,
    TimelineOppositeContent,TimelineDot} from '@material-ui/lab';

import { Repeat,Fastfood,LaptopMac,Hotel } from "@material-ui/icons"

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
    width: theme.spacing(100)
},
timelineDot:{
  color:"white"
},
titleBlock:{
  fontFamily: ['Sora', "sans-serif"],
  color:"white",
},
time:{
  fontFamily: ['Sora', "sans-serif"],
  color:"white",
},
eventLeft:{
  fontFamily: ['Source Sans Pro', "sans-serif"  ],
  color:"white",
  fontWeight:"7",
  textAlign:"left"
},
connector:{
  height: theme.spacing(1)
}


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
          <Typography className={classes.time} variant="h4">Q4-2021</Typography>
          <Typography className={classes.eventLeft}>- Building Findmeet token and smart contract $MEET<br/>
                      - Starting Development Findmeet App<br/>
                      - Public Sale<br/>
                      - Building Community<br/>
                      - Deals with potential partners<br/>
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator classesName={classes.connector}>
          <TimelineConnector />
          <TimelineDot className={classes.timelineDot}>
            <Avatar 
            src="/images/coin-stack.png"
            />
          </TimelineDot>
          <TimelineConnector classesName={classes.connector} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        
         
        
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot  className={classes.timelineDot}>
          <Avatar 
            src="/images/game.png"
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h4" className={classes.time} >
            Q1 - 2022
          </Typography>
          <Typography className={classes.eventLeft}>
              - Building Findmeet Game, Houses Lands and Characters<br/>
              - Internal Farming<br/>
              - Starting developing NFTs Marketplace  
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
          <Typography className={classes.time} variant="h4">Q2 - 2022</Typography>
          <Typography className={classes.eventLeft}>- Releasing NFTs Marketplace<br/>
                      - Partnership in the making<br/>
                      
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          <Avatar 
            src="/images/NFT.png"
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot >
          <Avatar 
            src="/images/phone.png"
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h4" className={classes.time}>
            Q3 - 2022
          </Typography>
          <Typography className={classes.eventLeft}>
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
          <Typography className={classes.time} variant="h4">Q4-2022</Typography>
          <Typography className={classes.eventLeft}>- Releasing first beta of Findmeet Game integrated with $MEET and NFTs Marketplace<br/>
                      - Marketing Operations to reach more audience and users<br/>
                     
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          <Avatar 
            src="/images/store.png"
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot >
          <Avatar 
            src="/images/star.png"
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h4" className={classes.time}>
            Q1 - 2023
          </Typography>
          <Typography className={classes.eventLeft}>
              - Integrating Findmeet App with Findmeet Game.<br/>
              - Releasing new features for Findmeet Users.<br/>
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
          <Typography variant="h4" className={classes.time}>Q2-2023</Typography>
          <Typography className={classes.eventLeft}>- Sponsorship, PR, Marketing operations<br/>
                      - Releasing Findmeet Game<br/>
                     
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          <Avatar 
            src="/images/micro.png"
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot >
          <Avatar 
            src="/images/question.png"
            sx={{ bgcolor: "white" }}
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h4" className={classes.time}>
            Q3 - 2023
          </Typography>
          <Typography className={classes.eventLeft}>
              - The show will go on ...<br/>
              
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
