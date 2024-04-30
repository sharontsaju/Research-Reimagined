// TextContent.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import './TextContent.css'; // Import custom CSS file

function TextContent() {
  return (
    <Container fluid className="py-3 text-center text-content">
      <h1 className='header-content'>Welcome to Research Reimagined</h1>
      <p className="lead">Discover innovative solutions for your research needs.</p>
      <p>Learn more about us <a href="#about-us">here</a>.</p>
      <p className="choose-format">Choose a format:</p> {/* Apply custom class */}
    </Container>
  );
}

export default TextContent;
