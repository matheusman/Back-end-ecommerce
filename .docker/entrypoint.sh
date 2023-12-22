#!/bin/bash

npm install
npm run build
npm run start:dev
npm install prisma --save-dev
npm install --save class-validator class-transformer