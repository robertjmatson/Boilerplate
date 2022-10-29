FROM python:3.8.10

COPY ./backend /backend

WORKDIR /backend

RUN pip install -r requirements.txt

CMD  ["python", "manage.py", "runserver", "0.0.0.0:8000"]
