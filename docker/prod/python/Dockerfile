FROM python:3.8.10

COPY ./backend /app

WORKDIR /app

RUN pip install -r requirements/prod.txt

COPY ./docker/prod/python/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

