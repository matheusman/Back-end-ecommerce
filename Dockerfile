FROM node

WORKDIR /app

COPY package*.json ./

COPY pnpm-lock.yaml ./

COPY . ./

EXPOSE 3000

CMD [ "pnpm", "run", "dev" ]