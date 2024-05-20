import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import URLOutput from '../output/urloutput/urloutput'; // Import the URLOutput component

function URLInput({ onSubmit }) {
  const [url, setUrl] = useState('');
  const [showSummary, setShowSummary] = useState(false); // State to manage whether to display the summary or not
  const [summarizedURL, setSummarizedURL] = useState('');

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async () => {
    // Simulate getting summarized URL from the input URL
    const summarizedURL = await getSummarizedURLFromURL(url);
    setSummarizedURL(summarizedURL);
    setShowSummary(true); // Set showSummary to true when submitting the form
  };

  // This is a placeholder function to simulate fetching summarized URL
  const getSummarizedURLFromURL = async (inputURL) => {
    // You can replace this with your actual logic to get summarized URL from the input URL
    return `${inputURL}`;
  };

  return (
    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
      <Container fluid>
        {!showSummary ? ( // Render the URL input form if showSummary is false
          <Row className="justify-content-center">
            <Col xs={12}>
              <Card>
                <Card.Header style={{ fontWeight: 'bold' }}>Summarize URL</Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group controlId="urlInput">
                      <Form.Label style={{ fontWeight: '600' }}>Enter Input URL:</Form.Label>
                      <Form.Control
                        type="text"
                        value={url}
                        onChange={handleInputChange}
                        placeholder="e.g., http://www.example.com"
                      />
                    </Form.Group>
                    <Button variant="dark" onClick={handleSubmit} style={{ marginTop: '30px' }}>Request For Summary</Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : ( // Render the URLOutput component if showSummary is true
          <Row className="justify-content-center">
            <Col xs={12}>
              <URLOutput summarizedURL={summarizedURL} />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default URLInput;
