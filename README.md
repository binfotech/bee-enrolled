# Bee Enrolled Deployment

### Pull the latest changes from the git repository
    git pull origin main

### Install node modules
    npm install --legacy-peer-deps

### Compiled .next code
    npm run build

### Run with production mode and Pm2
    pm2 start npm --name "benrolled" -- run start

### Run with developer mode
    npm run dev