# Form page navigator

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployed app

Please follow this [link](https://page-navigator.vercel.app)

## Tech stack

Core - React, Next.js, Tailwind

Dnd - @atlaskit/pragmatic-drag-and-drop

Icons, primitive components - lucide-react, @radix-ui.

## Additionally added
1. Set as first page functionality
2. Delete functionality
3. Basic persist

## Possible improvements
1. Adding tests with React-testing-library - during production development it should be done, skipped for now in order to deliver code assignment faster.
2. Instead of id unique slugs could be generated and used in paths. Based on titles with some identifiers if slug already present.
3. useItemsDropAndDrop and useTrackItemsDrop could be transformed into generic usage.
4. Adding pages between elements on mobile could be added with long touch events or similar. 
