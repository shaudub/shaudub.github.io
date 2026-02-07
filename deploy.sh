#!/bin/bash
echo "Building for GitHub Pages..."
npm run build:gh-pages

echo "Deploying to gh-pages branch..."
npx gh-pages -d dist

echo "Done! Check your repository settings to ensure GitHub Pages is serving from the 'gh-pages' branch."
