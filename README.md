# Henghui Next.js Project

This is the Next.js version of the Henghui International website.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

- `pages/index.js`: Home page with sections
- `pages/b-and-b.js`: B&B listings page
- `styles/globals.css`: Global styles
- `public/`: Static assets (pictures, files)

## Migration Notes

- Converted from static HTML/JS to React components with state management
- Sections are now toggled using React state instead of DOM manipulation
- Navigation between pages uses Next.js Link component
- Static assets moved to public directory