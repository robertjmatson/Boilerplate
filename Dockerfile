FROM ubuntu:22.04
RUN apt-get upddate && apt-get install -y python3.11

COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.

RUN mkdir /app
WORKDIR /app
COPY ./app /app

RUN adduser -d user
USER user