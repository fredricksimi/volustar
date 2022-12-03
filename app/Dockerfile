FROM python:3.10-alpine

WORKDIR /usr/app/

COPY  ./myapp ./

RUN pip3 install -r requirements.txt && python3 manage.py migrate

EXPOSE 8000