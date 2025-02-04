import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import videoPrueba from "../assets/vids/hacking.gif";

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

export const projects = [
    {
      title: "Proyecto 1",
      description: "Descripcion 1",
      imgUrl: projImg1,
      moreInfo: "detalles del proyecto 1",
      videoUrl: videoPrueba,
      technologies: [
        { name: "Python", logoUrl: python },
        { name: "Django", logoUrl: django },
        { name: "JavaScript", logoUrl: js },
        { name: "Docker", logoUrl: docker }
      ]
    },
    {
      title: "Proyecto 2",
      description: "Descripcion 2",
      imgUrl: projImg2,
      moreInfo: "detalles del proyecto 2"
    },
    {
      title: "Proyecto 3",
      description: "Descripcion 3",
      imgUrl: projImg3,
      moreInfo: "detalles del proyecto 3"
    },
    {
      title: "Proyecto 4",
      description: "Descripcion 4",
      imgUrl: projImg2,
      moreInfo: "detalles del proyecto 4"
    },
  ];