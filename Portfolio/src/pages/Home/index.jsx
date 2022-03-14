import './style.scss';
import TypeIt from 'typeit-react';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import CV from '../../assets/elcass_imad_CV.png';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Home() {
  // const [reload, setReload] = useState(false);
  return (
    <div className='container'>
      {/* about me */}
      <div className='home'>
        <Link to='' className='arrow'>
          <MdOutlineArrowBackIos />
        </Link>
        <div className='about'>
          <div className='presentation'>
            <p>
              {/* <TypeIt
                getBeforeInit={instance => {
                  instance
                    .type("Hi, I'm Alxe")
                    .pause(750)
                    .delete(2)
                    .pause(500)
                    .type('ex!');

                  // Remember to return it!
                  return instance;
                }}
              /> */}
              {/* 
              <TypeIt
                getAfterInit={instance => {
                  if (instance.is('completed')) {
                    instance.freeze();
                  }
                  return instance;
                }}
              > */}
              <p>
                <span className='name'>
                  Hi, i'm Imad El cass.
                  <br />
                </span>{' '}
                web and mobile developer from morocco. I live in beautiful city
                Agadir. I've done multiple job on freelance, so contact me and
                let's work together.
              </p>
              {/* </TypeIt> */}
            </p>
          </div>
          <a href={CV}>My resume</a>
        </div>
        <Link to='/projects' className='arrow'>
          <MdOutlineArrowForwardIos />
        </Link>
      </div>
      {/* social medias */}
      <div className='socialMedia'>
        <a className='media' href='https://github.com/imadelcass'>
          <img src={github} />
        </a>
        <a className='media' href='https://linkedin.com/in/imad-elcass'>
          <img src={linkedin} />
        </a>
      </div>
    </div>
  );
}

export default Home;
