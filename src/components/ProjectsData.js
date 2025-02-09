import projImg1 from "../assets/img/psicosferapag.png";
import projImg2 from "../assets/img/EMOCVision.png";
import projImg3 from "../assets/img/Hacking.png";
import projImg4 from "../assets/img/facial_recognition.png";
import hackinggif from "../assets/gifs/hacking.gif";
import psicosferagif from "../assets/gifs/psicosfera.gif";
import facial_recognitiongif from "../assets/gifs/facila_recognition.gif";
import emocvisiongif from "../assets/gifs/emocvision.gif";

import python from 'programming-languages-logos/src/python/python.svg'
import js from 'programming-languages-logos/src/javascript/javascript.svg'
import java from 'programming-languages-logos/src/java/java.svg'
import csharp from 'programming-languages-logos/src/csharp/csharp.svg'
import html from 'programming-languages-logos/src/html/html.svg'
import css from 'programming-languages-logos/src/css/css.svg'
import microsoft from "../assets/img/Microsoft_logo2.svg";
import linux from "../assets/img/Linux_logo2.svg";
import sql from "../assets/img/Sql_data_base_with_logo.svg";
import django from "../assets/img/Django_logo.svg";
import bs from "../assets/img/Bootstrap_logo.svg";
import opencv from "../assets/img/OpenCV_Logo_with_text_svg_version.svg";
import tf from "../assets/img/TensorFlowLogo.svg";
import docker from "../assets/img/Docker-svgrepo-com.svg";
import git from "../assets/img/nav-icon4.svg";
import latex from "../assets/img/latex-svgrepo-com.svg";
import react from "../assets/img/React_Logo_SVG.svg";
import colorSharp from "../assets/img/thunderblur.png"
import numpy from "../assets/img/Numpy-svgrepo-com.svg";

export const projects = [
    {
      title: "Psicosfera",
      description: "Psicosfera es una plataforma web que conecta psicólogos y pacientes, facilitando la gestión de citas, consultas y comunicación. Desarrollada con Django en el backend, JavaScript y AJAX en el frontend, y Docker para la base de datos.",
      imgUrl: projImg1,
      moreInfo: "La plataforma permite a los pacientes buscar y conectarse con psicólogos de acuerdo a su especialidad, ubicación y disponibilidad. Los psicólogos pueden gestionar sus citas, horarios, y mantener un registro de las sesiones de sus pacientes. Además, los usuarios (pacientes y psicólogos) pueden interactuar a través de un sistema de mensajería y tener un perfil público y privado para gestionar su información.",
      videoUrl: psicosferagif,
      githubUrl: "https://github.com/1carloso1/Psicosfera-platform",
      technologies: [
        { name: "Python", logoUrl: python },
        { name: "Django", logoUrl: django },
        { name: "JavaScript", logoUrl: js },
        { name: "Docker", logoUrl: docker },
        { name: "HTML", logoUrl: html },
        { name: "Bootstrap", logoUrl: bs },

      ]
    },
    {
      title: "EMOCVision",
      description: "A computer vision system for calculating the Elastic Modulus of concrete cylinders through video analysis.",
      imgUrl: projImg2,
      moreInfo: "This project aims to develop a system based on computer vision and deep learning techniques to calculate the elastic modulus of concrete cylinders subjected to controlled loading conditions. The system automates the analysis of compression tests, reducing the reliance on expensive specialized equipment and minimizing errors associated with manual calculations.",
      videoUrl: emocvisiongif,
      githubUrl: "https://github.com/1carloso1/EMOCVision",
      technologies: [
        { name: "Python", logoUrl: python },
        { name: "OpenCV", logoUrl: opencv },
        { name: "Numpy", logoUrl: numpy },
      ]
    },
    {
      title: "Hacking Challenges",
      description: "This project contains detailed solutions and procedures for the Bandit and PicoCTF challenges.",
      imgUrl: projImg3,
      moreInfo: "This project contains detailed solutions and procedures for the Bandit and PicoCTF challenges, designed to help you improve your skills in cybersecurity, pentesting, and information security in general.",
      videoUrl: hackinggif,
      githubUrl: "https://github.com/1carloso1/Hacking-Challenges",
      technologies: [
        { name: "Python", logoUrl: python },
        { name: "Linux", logoUrl: linux },
      ]
    },
    {
      title: "Facial Recognition System",
      description: "Descripcion 4",
      imgUrl: projImg4,
      moreInfo: "This project implements a facial recognition system using Deep Neural Networks (DNN) and OpenCV. The system leverages a pretrained model based on the Caffe architecture to detect faces in images, videos, or real-time webcam feeds. It provides a simple and effective solution for facial detection, ideal for security, monitoring, and real-time image analysis applications.",
      videoUrl: facial_recognitiongif,
      githubUrl: "https://github.com/1carloso1/dnn-face-recognition",
      technologies: [
        { name: "Python", logoUrl: python },
        { name: "OpenCV", logoUrl: opencv },
      ]
    },
  ];