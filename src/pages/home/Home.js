import React from 'react';
import './Home.css';
import bibs from '../../assets/bibs.png';
import resume from '../../assets/resume.pdf';

const Home = () => {
  return (
    <div className='home-container' id='home'>

      <div className='name'>
        <h1>Bibin</h1>
        <h1>Jose<span>.</span> </h1>


      </div>
      <div className='line'></div>
      <div className='social-media'>
        <div>
          <a href='https://www.linkedin.com/in/bibinjose23/'>LinkedIn |</a>
          <a href='https://github.com/BIBS23'>Github</a>
        </div>
        <div>
          <a href='https://www.instagram.com/iam_bibs_/'>Instagram |</a>
          <a href='https://twitter.com/BIBS0623'>X</a>
        </div>
        <a className='resumebtn' href={resume} download= 'resume.pdf'>Resume</a>

      </div>


      <img src={bibs} alt='profileimg' />
      <div className='intro'>
        <h5>INTRODUCTION</h5>
        <h3>Flutter Developer,</h3>
        <h3>Web Developer</h3>
        <p>Hello, I'm a dynamic and ambitious Flutter and web developer currently enrolled in the Computer Science Engineering program at St. Joseph College of Engineering and Technology. With a strong foundation in programming and a love for creating innovative mobile and web applications, I'm excited to bring my skills and passion to the world of technology.</p>
    
      </div>





    </div>
  )
}

export default Home
