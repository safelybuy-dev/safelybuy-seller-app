import React from "react";
import Button from "./Button";
import { AppleDownload, Facebook, Instagram, Twitter } from "svg";
import googleplay from "assets/images/googleplay.png";
import Container from "./Container";

export default function Footer({ admin }) {
  return (
    <footer className='bg-gray-100 border-t border-gray-200 py-8 w-full z-10'>
      <Container>
        <div className='flex flex-wrap items-center'>
          <div className='flex md:w-5/12 lg:w-6/12 w-full md:justify-start justify-center transform scale-75 pb-4'>
            <img
              src={googleplay}
              alt='googleplay'
              height='79'
              width='202'
              style={{ height: "79px" }}
            />
            <div className='p-3'>{<AppleDownload />}</div>
          </div>
          <div className='flex flex-col items-center md:text-left md:w-5/12 lg:w-3/12 w-full md:items-start justify-center text-center'>
            {!admin && (
              <Button primary rounded>
                Refer a Friend
              </Button>
            )}
            <p className='font-normal mt-4'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores nulla numquam nostrum dignissimos.
            </p>
          </div>
          <div className='self-end justify-around px-3 flex md:w-2/12 lg:w-3/12 w-full pt-4'>
            {<Facebook />}
            {<Instagram />}
            {<Twitter />}
          </div>
        </div>
      </Container>
    </footer>
  );
}
