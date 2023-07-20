import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './MediaCard.css';
import bok from './book.gif';
import mlImage from './ml.jpg';
import aiImage from './ai.jpeg';
import csImage from './cyber-security.jpg';
import ccImage from './cloud.jpg';
import bdImage from './bd.jpg';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/footer';

export default function MediaCard() {
  return (
    <div className='cou'>
      <Navbar />
      <br />
      <br />
      <br />
      <marquee behavior='alternate' direction='right'>
        <h1>
          COURSES AVAILABLE <img src={bok} width={100} height={80} />
        </h1>
      </marquee>

      <div className='media-container'>
        <div className='card-wrapper'>
          <Card className='card-item'>
            <CardMedia sx={{ height: 140 }} image={mlImage} title='machine learning' className='card-img' />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div' className='card-title'>
                machine learning
              </Typography>
              <Typography variant='body2' color='text.secondary' className='card-description'>
                Machine learning is an area of artificial intelligence and computer science that comprises supervised and unsupervised learning and includes the development of software and algorithms that can make predictions based on data.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>LEARN MORE</Button>
              <Link to='/courseregister'>
                <Button size='small'>REGISTER NOW</Button>
              </Link>
            </CardActions>
          </Card>
        </div>

        <div className='card-wrapper'>
          <Card className='card-item'>
            <CardMedia sx={{ height: 140 }} image={aiImage} title='artificial intelligence' className='card-img' />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div' className='card-title'>
                artificial intelligence
              </Typography>
              <Typography variant='body2' color='text.secondary' className='card-description'>
                Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>LEARN MORE</Button>
              <Link to='/courseregister'>
                <Button size='small'>REGISTER NOW</Button>
              </Link>
            </CardActions>
          </Card>
        </div>

        <div className='card-wrapper'>
          <Card className='card-item'>
            <CardMedia sx={{ height: 140 }} image={csImage} title='cybersecurity' className='card-img' />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div' className='card-title'>
                cybersecurity
              </Typography>
              <Typography variant='body2' color='text.secondary' className='card-description'>
                Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>LEARN MORE</Button>
              <Link to='/courseregister'>
                <Button size='small'>REGISTER NOW</Button>
              </Link>
            </CardActions>
          </Card>
        </div>

        <div className='card-wrapper'>
          <Card className='card-item'>
            <CardMedia sx={{ height: 140 }} image={ccImage} title='cloud computing' className='card-img' />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div' className='card-title'>
                Cloud Computing
              </Typography>
              <Typography variant='body2' color='text.secondary' className='card-description'>
                Cloud computing enables customers to use infrastructure and applications via the internet, without installing and maintaining them on-premises.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>LEARN MORE</Button>
              <Link to='/courseregister'>
                <Button size='small'>REGISTER NOW</Button>
              </Link>
            </CardActions>
          </Card>
        </div>


        <div className='card-wrapper'>
          <Card className='card-item'>
            <CardMedia sx={{ height: 140 }} image={ccImage} title='cloud computing' className='card-img' />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div' className='card-title'>
                Cloud Computing
              </Typography>
              <Typography variant='body2' color='text.secondary' className='card-description'>
                Cloud computing enables customers to use infrastructure and applications via the internet, without installing and maintaining them on-premises.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>LEARN MORE</Button>
              <Link to='/courseregister'>
                <Button size='small'>REGISTER NOW</Button>
              </Link>
            </CardActions>
          </Card>
        </div>
      </div>

      <br />
      <Footer />
    </div>
  );
}
