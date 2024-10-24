/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import App_Project_SS from '../../assets/recentprojects/App_Project_SS.png';
import resume_pro_ss from '../../assets/recentprojects/resume_pro_ss.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Sign Language App', 
      description: `Created a React Native Sign Language App for deaf and mute individuals, featuring interactive lessons and engaging animations. The app aims to enhance communication and make learning sign language fun and accessible.`,
      alter: 'Sign Language App',
      image: `${App_Project_SS}`,
    },
    { 
      id: 2,
      title: 'PACE in the Classroom', 
      description: `Created an educational website, "PACE in the Classrooms," to help teachers and students access NASA's PACE satellite data easily. The site includes a chatbot, games, and quizzes to explore topics like ocean color and phytoplankton growth. Our goal is to make learning about oceans fun and engaging for everyone!`,
      alter: 'resume_pro_ss Project',
      image: `${resume_pro_ss}`,
    },
    {
      id: 3,
      title: 'ATS Friendly Resume Builder', 
      description: `ATS-friendly Resume Builder to help users create professional resumes that easily pass through applicant tracking systems. The tool features customizable templates and user-friendly input forms, ensuring that resumes are well-structured and visually appealing. This project aims to simplify the job application process and enhance users' chances of landing interviews.`,
      image: `${resume_pro_ss}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
