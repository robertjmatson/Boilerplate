FROM python:3.8.10

COPY ./backend /app

WORKDIR /app

RUN pip install -r requirements/dev.txt

COPY ./docker/dev/python/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

