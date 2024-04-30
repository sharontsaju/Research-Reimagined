import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Components/navbar/Navbar';
import CustomButton from './Components/button/Button';
import TextContent from './Components/TextContent/TextContent';
// import Features from './Components/Features/Features'; // Import the Features component
import About from './Components/About/About'

function App() {
  return (
    <body style={{ 
      backgroundColor: 'black', 
      color: 'white',
      minHeight: '100vh', // Ensure content stretches to at least the height of the viewport
      overflowX: 'hidden', // Hide horizontal scrollbar caused by the gradient
      position: 'relative', // Set position relative to enable absolute positioning of the gradient
    }}>
      <CustomNavbar />
      <TextContent /> {/* Keep the TextContent component if needed */}
      
      <div className="mt-4 d-flex justify-content-center"> {/* Center align and add spacing between buttons */}
        <CustomButton text="PDF" />
        <CustomButton text="URL" />
        <CustomButton text="TEXT" />
     
      </div>
        
    </body>
  );
}

export default App;
