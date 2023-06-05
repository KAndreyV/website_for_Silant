# website_for_Silant
Для запуска и корректоной работы данного приложения необходимо:
1) В терминале прописать команду для активации виртуального окружения:

python -m venv venv

venv\Scripts\activate.bat

2) Установите Django==3.2.19:

pip install Django==3.2.19

И создайте django проект:

django-admin startproject silant_app1

3) Клонируем репозиторий в папку:
git clone "https://github.com/KAndreyV/website_for_Silant.git"

4) Перейдем в папку silant_app командой

cd website_for_silant

cd silant_app

5) Создадим файл .env и добавим в него строку 

SECRET_KEY = "Возьмите эту строку из созданного вами проекта silant_app1 из файла settings"

6) Устанавливаем все библиотеки из файла requierements:
pip install -r requirements.txt

7) Можем запускать django сервер:
python manage.py runserver

8) Для работы визуальной части приложения переходим в папку frontend во втором терминале или другом IDE:
cd frontend

9) Устанавливаем все необходимое командой:
npm i

10) Добавляем файл .babelrc со следующим содержимым:
{ "presets": ["@babel/preset-env", "@babel/preset-react"] }

11) Можем запускать react-сервер:
npm start
