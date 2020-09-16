import React, { useCallback } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { Container } from './styles';
import { FooterData } from '../../source/data';

const Footer: React.FC = () => {
  // Needed for the native window.scroll smooth behavior to work on all browsers
  smoothscroll.polyfill();

  const scrollTo = useCallback((element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop,
    });
  }, []);

  return (
    <Container id="Footer">
      <br />
      <a href="#!" onClick={() => scrollTo(document.getElementById('main'))}>
        <FontAwesomeIcon icon={faChevronUp} size="1x" />
      </a>
      <div>
        <a
          href={FooterData.githubUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href={FooterData.linkedinUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
      </div>
      <hr />

      {/* Se puder deixar meus créditos agradeço! :) */}

      <span className="copyright">
        © {new Date().getFullYear()} - Template desenvolvido por
        <a
          href="http://www.varallo.me/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {' '}
          Gus Varallo
        </a>
      </span>
    </Container>
  );
};

export default Footer;