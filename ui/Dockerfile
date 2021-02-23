
FROM node:lts-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock ./
#longer timeout is sometimes needed for the large marterial ui icons package
RUN yarn install 

COPY . ./
# RUN CI=true yarn test || echo "There were failing tests!"

CMD ["yarn", "start"]

