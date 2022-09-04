import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Twitter, SocialGithub, LinkedIn, Instagram } from "../Images/Allsvg";
import './SocialIcons.css';

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;
  & > *:not(:last-child) {
    margin: 0.8rem 0;
  }

`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: #777;
`;

const SocialIcons = () => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="#"
          rel="noreferrer"
        >
          <SocialGithub width={22} height={22} className="icons"/>
        </a>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="#"
          rel="noreferrer"
        >
          <Instagram width={22} height={22} className="icons"/>
        </a>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="#"
          rel="noreferrer"
        >
          <Twitter width={22} height={22} className="icons"/>
        </a>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="#"
          rel="noreferrer"
        >
          <LinkedIn width={22} height={22} className="icons"/>
        </a>
      </motion.div>

      <Line
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
