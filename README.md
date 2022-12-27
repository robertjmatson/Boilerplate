python3 -m venv ./venv
source venv/bin/activate
cd backend
pip install -r ./requirements/dev.txt

python manage.py makemigrations --dry-run --verbosity 3
python manage.py runserver

coverage run manage.py test

For Frontend
cd frontend
nmp i
npm run dev
