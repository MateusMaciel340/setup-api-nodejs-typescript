FROM node:16.13.1-alpine3.13

# Create app directory
WORKDIR /usr/src/app

# Set env to production
ENV NODE_ENV=production PORT=8080

# Copy app package.json and Makefile
COPY package.json ./
COPY Makefile ./

# Install make util
RUN apk add --update make

# Install dependencies
RUN make install

# Bundle app source
COPY . .

# Expose port from container
EXPOSE 8080

# Start the app
CMD [ "make", "prod" ]