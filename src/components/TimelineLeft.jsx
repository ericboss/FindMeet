
import {  makeStyles, Typography, Avatar } from "@material-ui/core"
import * as React from 'react';
import {Timeline, TimelineItem,TimelineSeparator,TimelineConnector,TimelineContent,
    TimelineOppositeContent,TimelineDot} from '@material-ui/lab';

import { Repeat,Fastfood,LaptopMac,Hotel, Facebook } from "@material-ui/icons"
import { useStyles as useStyles2 } from "./utils"

function TimelinesLeft() {
   const classes2 = useStyles2.apply()
    return (
        <div id="timeline" className={classes2.main}>
            <div className={classes2.content}>

                <div style={{marginRight:"-255px", marginTop:"-20px"}} className={classes2.title}>
                    <h1 style={{ marginTop:"20px"}} className={classes2.titleBlock}>Roadmap</h1>
                </div>
                <div className={classes2.timeline}>

                <Timeline position="alternate">
      <TimelineItem style={{marginLeft:"176px"}}>

      <TimelineSeparator style={{marginRight:"-25px"}} className={classes2.seperator} >
          
          
           <img  className={classes2.timeLineImg} src="/images/coin-stack.png"/>
          
         <TimelineConnector classes2Name={classes2.connector} />
       </TimelineSeparator>
        <TimelineContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          <Typography style={{marginRight:"73px"}} className={classes2.timeRight} variant="h4">Q4-2021</Typography>
          <Typography style={{marginRight:"20px"}}  className={classes2.eventRight}>- Building Findmeet token and smart contract $MEET<br/>
                      - Starting Development Findmeet App<br/>
                      - Public Sale<br/>
                      - Building Community<br/>
                      - Deals with potential partners<br/>
          </Typography>
        </TimelineContent>
        
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        
         
        
        <TimelineSeparator style={{marginLeft:"-32px"}}>
          <TimelineConnector />
          
          <img className={classes2.timeLineImg} 
            src="/images/game.png"
            />
            
         
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography style={{marginLeft:"37px"}}  variant="h4" className={classes2.timeRight} >
              <br/>
            Q1 - 2022
          </Typography>
          <Typography style={{marginLeft:"25px"}} className={classes2.eventRight}>
              - Building Findmeet Game, Houses Lands and Characters<br/>
              - Internal Farming<br/>
              - Starting developing NFTs Marketplace  
              <br/>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>

      <TimelineSeparator style={{marginRight:"-313px"}} >
          <TimelineConnector />
         
          <img 
          className={classes2.timeLineImg}
            src="/images/NFT.png"
            />
            
         
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <br/>
          <br/>
         
          <Typography style={{marginRight:"-232px"}} className={classes2.timeRight} variant="h4">Q2 - 2022</Typography>
          <Typography style={{marginRight:"-283px"}}  className={classes2.eventRight}>- Releasing NFTs Marketplace<br/>
                      - Partnership in the making<br/>
                      <br/>
                     
          </Typography>
        </TimelineContent>
        
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator style={{marginRight:"31px"}}>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />

          <img  className={classes2.timeLineImg}
            src="/images/phone.png"
            />
           
          <TimelineConnector />
        </TimelineSeparator >
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography style={{marginLeft:"5px"}} variant="h4" className={classes2.timeRight}>
          <br/>
            
            Q3 - 2022
          </Typography>
          <Typography style={{marginLeft:"-10px"}} className={classes2.eventRight}>
              - Releasing Findmeet App for Smartphone(IOS & Android)<br/>
              - Integrating Findmeet App with $MEET to unlock all the functions<br/>
              
              <br/>
              <br/>
              <br/>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineSeparator style={{marginRight:"-312px"}}>
          <TimelineConnector />
        
          <img 
          
          className={classes2.timeLineImg}
            src="/images/store.png"
            />
        
        
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
            <br/>
          <Typography style={{marginRight:"-240px"}} className={classes2.timeRight} variant="h4">Q4-2022</Typography>
          <Typography style={{marginRight:"-290px"}} className={classes2.eventRight}>- Releasing first beta of Findmeet Game integrated with $MEET and NFTs Marketplace<br/>
                      - Marketing Operations to reach more audience and users<br/>
                      <br/>
                      <br/>
          </Typography>
        </TimelineContent>
        
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator style={{marginRight:"32px"}}  >
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          
          <img 
        
          className={classes2.timeLineImg}
            src="/images/star.png"
            />
         
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        <br/>
        
          <Typography style={{marginLeft:"13px"}} variant="h4" className={classes2.timeRight}>
            Q1 - 2023
          </Typography>
          <Typography style={{marginLeft:"-3px"}} className={classes2.eventRight}>
              - Integrating Findmeet App with Findmeet Game.<br/>
              - Releasing new features for Findmeet Users.<br/>
              <br/>
              <br/>
                      
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>

      <TimelineSeparator  style={{marginRight:"-313px"}}>
          <TimelineConnector />
        
          <img 
         
          className={classes2.timeLineImg}
            src="/images/micro.png"
            />
           
          
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
            <br/>
          <Typography style={{marginRight:"-245px"}} variant="h4" className={classes2.timeRight}>Q2-2023</Typography>
          <Typography style={{marginRight:"-290px"}} className={classes2.eventRight}>- Sponsorship, PR, Marketing operations<br/>
                      - Releasing Findmeet Game<br/>
                      <br/>
                      
                     
          </Typography>
        </TimelineContent>
        
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator style={{marginLeft:"-32px"}}>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
 
          <img 
           className={classes2.timeLineImg} 
            src="/images/question.png"
          
            />
    
          
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography style={{marginLeft:"42px"}} variant="h4" className={classes2.timeRight}>
          <br/>
                      
            Q3 - 2023
          </Typography>
          <Typography style={{marginLeft:"27px"}} className={classes2.eventRight}>
              - The show will go on ...<br/>
              <br/>
              <br/>
              
          </Typography>
        </TimelineContent>
      </TimelineItem>
  

        
    </Timeline>
                </div>
            </div>
        </div>
    )
}

export default TimelinesLeft
