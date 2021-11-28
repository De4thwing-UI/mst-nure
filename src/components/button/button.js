import React from 'react';
import {Link, useI18next} from 'gatsby-plugin-react-i18next';
import { StaticImage } from "gatsby-plugin-image";
import './button.css'

const Button = ({children}) => {
  return (

    <button className="button">{children}</button>

    );
};

export default Button;