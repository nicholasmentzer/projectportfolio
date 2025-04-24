import React from "react";
import { TextField } from "./Fields";
import Button from "./Button";
import Container from "./Container";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row md:justify-center md:pt-6">
          <div>
            <p className="font-medium text-xl text-gray-500 mb-6 mt-3 text-center">
              Contact Me!
            </p>
            <p className="text-gray-500 text-center">
              If you have any questions, comments, inquiries,
            </p>
            <p className="text-gray-500 text-center">
              or whatever else you may need to contact me for,
            </p>
            <p className="text-gray-500 mb-6 text-center">
              everything can be sent to my email below!
            </p>
            <p id='email' className="font-medium text-gray-500 text-center">
              email: 0816ntm@gmail.com
            </p>
            <p className="font-medium text-gray-500 text-center mb-5">
              phone: (302) 249-3519
            </p>
            <div className='flex justify-center'>
              <Button variant='outline' href="www.linkedin.com/in/nicholas-mentzer-9b4635281" className='mr-5'>LinkedIn</Button> <Button href='https://drive.google.com/file/d/1--loG5BwWEJsJIRi8Bbdr_BuAVtqtMuT/view?usp=sharing' target="_blank" rel="noopener noreferrer" >My Resume</Button>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row md:justify-between md:pt-6">
          <p className="text-xs text-gray-500">
            Created with care by Nicholas Mentzer
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;