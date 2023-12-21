#!/bin/bash

pnpm install
pnpm run build
pnpm run start:dev
pnpm install prisma --save-dev