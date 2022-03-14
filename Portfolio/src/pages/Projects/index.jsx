import style from './style.module.scss';
import projects from '../../data/projects.js';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { MdOutlineArrowBackIos } from 'react-icons/md';
function Projects() {
  let navigate = useNavigate();
  const navToProject = project => {
    navigate(`/project/${project.slug}`, {
      state: project,
    });
  };
  return (
    <div className={style.container}>
      <h1 className={style.title}>Projects</h1>
      <div className={style.wrapper}>
        <Link to='/' className={style.arrow}>
          <MdOutlineArrowBackIos />
        </Link>
        <div className={style.projects}>
          {projects.map(project => (
            <div
            key={project.id}
              onClick={() => navToProject(project)}
              className={style.project}
            >
              <div className={style.project_header}>
                <div className={style.circles}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className={style.name}>{project.name}</div>
              </div>
              <div className={style.project_wrapper}>
                <div className={style.blurred}></div>
                <img
                  src={project.img}
                  className={project.fill ? style.imgFill : undefined}
                />
              </div>
            </div>
          ))}
        </div>
        <Link to='/' className={style.arrow}>
          {/* <MdOutlineArrowForwardIos /> */}
        </Link>
      </div>
    </div>
  );
}

export default Projects;
