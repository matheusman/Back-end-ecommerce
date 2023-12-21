#!/bin/bash

npm install
npm run build
npm run start:dev
npm install prisma --save-dev