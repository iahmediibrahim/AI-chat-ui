# AI Chat Interface

This is a Fully Responsive AI chat interface. It displays the key components of the chat interface. It uses Next.js and Tailwind CSS styling.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## More About the project

- Inside the main page there's a preview of the content interface that handles multiple content types:
  - Paragraphs as array of strings
  - Bullets as array of strings
  - Tables as array of objects
- The main component can contain different actions and/or dropdown action buttons to handle different actions.
- The main component can contain Regenerate button that simulates the generation of new content showing loading state and animation.
