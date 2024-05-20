# Research Reimagined

This website is designed to make it easier for researchers and students to understand and work with scientific articles and research papers. At present, the tool supports non-mathematical papers from Springer, with plans to expand its coverage and capabilities in future updates. Contributions are highly encouraged to help develop a more student and research-friendly application.

## Features

### Automated Text Mining
Utilizes the TF-IDF algorithm to extract relevant text segments from scientific papers.

### Content Generation
Employs the BART (Bidirectional and Auto-Regressive Transformers) model to generate comprehensive summaries from the mined text segments.

### PowerPoint Presentation
Integrates with the Python `pptx` library to create visually appealing PowerPoint slides containing the summarized content.

### Text-to-Speech
Incorporates the Realistic Text to Speech API by VidLab to convert text summaries into natural-sounding speech, enhancing accessibility and user experience.

## Usage

### Setup
1. Clone the repository and install the required dependencies.
    ```sh
    pip install -r requirements.txt
    ```
2. Start the Python backend API.
    ```sh
    python app.py
    ```
3. Run the React website.
    ```sh
    cd Frontend
    npm start
    ```

### Pre-trained Models
Download pre-trained BART models and configure the transformers library accordingly.

### Summarization
Run the summarization script by providing the link through the React website.

### Output
View the generated summary, PowerPoint presentation (`summary.pptx`) containing the summarized content, and audio file (`audio.mp3`). All non-text outputs will be stored in the `Outputs` folder.

## Contribution

- **Jafar N**
- **Sharon T Saju**
- **Sreedev TS** (xreedev@gmail.com)

## Module Design

- **app.py**: Flask API to handle requests
- **ppt.py**: Create PowerPoint presentations based on `template.pptx`
- **BART.py**: Module responsible for summarization using BART
- **data.py**: Used to store any repeatedly used data
- **dataProcesser.py**: Used to remove stop words
- **main.py**: To test all backend features
- **pdfextract.py**: Used to extract text from PDFs (incomplete)
- **TFIDF.py**: Extractive summarization using the TF-IDF algorithm
- **tts.py**: Text-to-speech module
- **webcrawler.py**: Webcrawls and parses data from Springer articles

## License

This project is licensed under the MIT License. See the LICENSE file for details.
