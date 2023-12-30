import React from "react";
import { TextField } from "./Fields";
import Button from "./Button";
import Container from "./Container";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row md:justify-between md:pt-6">
          <p className="text-xs text-gray-500">
            Created with care by Nicholas Mentzer
          </p>
          <div>
            <p className="text-xs text-gray-400">
              email: 0816ntm@gmail.com
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;