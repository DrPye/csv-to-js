# CSV to JS Converter

This project is a TypeScript-based web application that converts CSV files into JSON format. It uses Vite as a build tool and module bundler, providing fast rebuilds and a modern development experience.

## Features

- Upload CSV files through a web interface.
- Convert CSV to structured JSON.
- Display JSON output in a formatted text area.

## Prerequisites

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/DrPye/csv-to-js.git
cd csv-to-js
npm install
```

## Running the Application

Start the development server with:

```bash
npm run dev
```

This will compile your TypeScript code and serve the application on **<http://localhost:3000>**.

## Usage

1. Navigate to `http://localhost:3000` in your browser.
2. Use the form to select and submit a CSV file.
3. View the converted JSON output in the textarea below the form.

## Building for Production

To build the application for production, run:

```bash
npm run build
```

This will generate a dist directory with your optimized project files.

## Contributing

Contributions are welcome. Please open an issue first to discuss your ideas or concerns.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
