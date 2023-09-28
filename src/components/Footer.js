import React from 'react'

function Footer() {
  const currentYear=new Date().getFullYear();
  const currentDate=new Date().getDate();
  return<footer> <p>
    Copyright © {currentYear} {currentDate}
  </p>
  </footer>
}

export default Footer;
