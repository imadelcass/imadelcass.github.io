import { Link, useLocation, useParams } from 'react-router-dom';
import style from './style.module.scss';
import Code from '../../assets/programming.png';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { useState } from 'react';

function Project() {
  // const { slug } = useParams();
  const { state } = useLocation();
  const [project, setProject] = useState(state);
  return (
    <div className={style.container}>
      <h1 className={style.title}>{project.name}</h1>
      <div className={style.wrapper}>
        <Link to='/projects' className={style.arrow}>
          <MdOutlineArrowBackIos />
        </Link>
        <div className={style.project}>
          <div className={style.slider}>
            {/* <div className={style.prev}>
              <MdOutlineArrowBackIos />
            </div> */}
            <img
              src={project.img}
              alt=''
              className={project.fill ? style.imgFill : undefined}
            />
            {/* <div className={style.next}>
              <MdOutlineArrowForwardIos />
            </div> */}
          </div>
          <div className={style.summary}>
            <h1>Summary</h1>
            <p>
              <span>aaaa</span>
              {project.summary}
            </p>
          </div>
          <a href={project.github} target='_blank' className={style.code}>
            <img src={Code} alt='' />
          </a>
        </div>
        <Link to='/' className={style.arrow}>
          <MdOutlineArrowForwardIos />
        </Link>
      </div>
    </div>
  );
}

export default Project;
