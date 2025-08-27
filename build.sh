#!/bin/bash

# Build script for CuraOne Landing Page
# This script builds the frontend and updates the public folder

echo "Building CuraOne Landing Page..."

# Navigate to the frontend directory
cd CuraOneLanding

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Build the project
echo "Building the project..."
npm run build

# Move the built files to the root public directory
echo "Moving built files to public directory..."
cd ..
rm -rf public
mv CuraOneLanding/dist/public .

echo "Build completed successfully!"
echo "You can now run: python main.py"
echo "The server will be available at: http://localhost:8000"
