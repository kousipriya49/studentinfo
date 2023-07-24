import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './MediaCard.css';
import Footer from './footer';
import mlImage from './ml.jpg'; // Import the image file for machine learning card
import aiImage from './ai.jpeg'; // Import the image file for artificial intelligence card
import csImage from './cyber-security.jpg'; // Import the image file for artificial intelligence card
import ccImage from './cloud.jpg';
import bdImage from './bd.jpg';
import Navbar from './sidebar';
export default function MediaCard() {
  return (
     <div className='cou'>
         
<div >
    <h1>COURSES AVAILABLE</h1>
</div>
    <div className="media-container">
      <div className="card-wrapper">
      <Card className="card-item">
        <CardMedia
          sx={{ height: 140 }}
          image={mlImage}
          title="machine learning"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            machine learning
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Machine learning is an area of artificial intelligence and computer science that comprises supervised and unsupervised learning and includes the development of software and algorithms that can make predictions based on data.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">LEARN MORE</Button>
          <Link to="/register">
          <Button size="small">REGISTER NOW</Button>
          </Link>
        </CardActions>
      </Card>
</div>
<div className="card-wrapper">
      <Card className="card-item">
        <CardMedia
          sx={{ height: 140 }}
          image={aiImage}
          title="artificial intelligence"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            artificial intelligence
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">LEARN MORE</Button>
          <Link to="/courseregister">
          <Button size="small">REGISTER NOW</Button>
          </Link>
        </CardActions>
      </Card>
</div>

<div className="card-wrapper">
      <Card className="card-item">
        <CardMedia
          sx={{ height: 140 }}
          image={csImage}
          title="cybersecurity"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            cybersecurity
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">LEARN MORE</Button>
          <Link to="/courseregister">
          <Button size="small">REGISTER NOW</Button>
          </Link>
        </CardActions>
      </Card>
</div>
<div className="card-wrapper">
      <Card className="card-item">
        <CardMedia
          sx={{ height: 140 }}
          image={ccImage}
          title="cloud computing"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Cloud Computing
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Cloud computing enables customers to use infrastructure and applications via the internet, without installing and maintaining them on-premises.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">LEARN MORE</Button>
          <Link to="/courseregister">
          <Button size="small">REGISTER NOW</Button>
          </Link>
        </CardActions>
      </Card>
</div>
<div className="card-wrapper">
      <Card className="card-item">
        <CardMedia
          sx={{ height: 140 }}
          image={bdImage}
          title="artificial intelligence"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Big Data
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Big data primarily refers to data sets that are too large or complex to be dealt with by traditional data-processing application software. 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">LEARN MORE</Button>
          <Link to="/courseregister">
          <Button size="small">REGISTER NOW</Button>
          </Link>
        </CardActions>
      </Card>
</div>
      <br></br>

      
</div>

</div>

);
}
