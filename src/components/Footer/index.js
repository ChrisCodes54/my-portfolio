import React from 'react';


import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';

import './style.css'

export default function Footer() {
    return (
        <footer>
            <Linkedin color='white' id='linkedin' size={50} />
            <Github color='white' id='github' size={50} />
        </footer>

    )
}