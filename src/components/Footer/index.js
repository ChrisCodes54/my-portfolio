import React from 'react';


import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';

import './style.css'

export default function Footer() {
    return (
        <footer>

            <a href='https://www.linkedin.com/in/christopher-tangarife/' target="_blank" rel="noreferrer">
                <Linkedin color='white' id='linkedin' size={50} />
            </a>

            <a href='https://github.com/ChrisCodes54' target="_blank" rel="noreferrer">
            <Github color='white' id='github' size={50} />
            </a>
        </footer>

    )
}