import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .contact-image {
    ${({ theme }) => theme.mixins.boxShadow};
    display: none;
    grid-template-columns: 50% 50%;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    margin-top: 50px;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }
    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);
      width: 300px;
      height: 300px;
      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
      &:hover,
      &:focus {
        background: transparent;
        outline: 0;
        filter: none;
        mix-blend-mode: normal;
        &:after {
          top: 15px;
          left: 15px;
        }
      }
    }
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>如果你有什么建议或者想法，或者只是想打个招呼。请联系我吧!</p>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
      <div className="contact-image">
        <StaticImage src="../../images/wx.jpg" alt="微信" className="img" />
        <StaticImage src="../../images/qq.jpg" alt="QQ" className="img" />
      </div>
    </StyledContactSection>
  );
};

export default Contact;
