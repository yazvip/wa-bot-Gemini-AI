#!/bin/bash

# Update package lists
sudo apt-get update

# Install Node.js and npm
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install pm2 process manager
sudo npm install -g pm2

# Install app dependencies
npm install

echo "Installation complete. Run 'npm start' to start the server."
