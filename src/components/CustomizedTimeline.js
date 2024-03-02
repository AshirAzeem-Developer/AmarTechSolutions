import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Typography from '@mui/material/Typography';
import Team from "../assets/Backend/Icons/Team.png"
import quality from "../assets/Backend/Icons/quality.png"
import contiues from "../assets/Backend/Icons/contiues.png"
import scale from "../assets/Backend/Icons/scale.png"
import feedback from "../assets/Backend/Icons/feedback.png"




export default function CustomizedTimeline() {
  return (
    <div className='"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 row-2 gap-4 items-center justify-center px-6 md:px-8 lg:px-20 "'>
    <Timeline position="right">
      <TimelineItem className='bg-white rounded-3xl '>
        <div className='pr-10 pt-7'>
            <img src={Team} alt="imageHere" className="h-20   "/>
        </div>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='info'  >
            1
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className=''>
          <Typography className='text-black font-bold ' variant="h6" component="span">
          Team Expertise
          </Typography>
          <Typography  className='text-black font-bold'>Assemble a team of experienced software developers, architects, and
digital consultants who are skilled in the relevant technologies and have
a track record of successful projects.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <div className='pr-10 pt-7'>
            <img src={quality} alt="imageHere" className="h-20  "/>
        </div>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='info'  >
            2
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography className='text-black font-bold ' variant="h6" component="span">
          Quality Assurance
          </Typography>
          <Typography  className='text-black font-bold'>Implement robust quality assurance and testing processes to ensure the
reliability and security of the software you deliver.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className='bg-white rounded-3xl'> 
        <div  className='pr-10 pt-7'>
            <img src={contiues} alt="imageHere" className="h-20   "/>
        </div>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='info'  >
            3
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography className='text-black font-bold ' variant="h6" component="span">
          Continuous Learning
          </Typography>
          <Typography  className='text-black font-bold'>The tech industry is ever-evolving. Encourage your team to continually
learn and adapt to new technologies and best practices.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <div className='pr-10 pt-7'>
            <img src={scale} alt="imageHere" className="h-20  "/>
        </div>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='info'  >
            4
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography className='text-black font-bold ' variant="h6" component="span">
          Scalability
          </Typography>
          <Typography  className='text-black font-bold'>Plan for scalability so that your business can grow as demand for your
services increases..</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className='bg-white rounded-3xl'>
        <div className='pr-10 pt-7'>
            <img src={feedback} alt="imageHere" className="h-20  "/>
        </div>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='info'  >
            5
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography className='text-black font-bold ' variant="h6" component="span">
          Feedback & Improvement
          </Typography>
          <Typography className='text-black font-bold' >Solicit feedback from clients and team members to continuously
improve your services and processes.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}