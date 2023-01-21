FROM node

WORKDIR /opt

RUN npm install form-data axios concat-stream

ENV API_KEY YOUR_API_KEY_HERE


COPY input input
COPY *.js ./

ENTRYPOINT ["node"]
