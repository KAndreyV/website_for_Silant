# website_for_Silant
Для запуска и корректоной работы данного приложения необходимо:
1) В терминале прописать команду для активации виртуального окружения:
python -m venv venv
venv\Scripts\activate.bat
2) Клонируем репозиторий в папку:
git clone "https://github.com/KAndreyV/website_for_Silant.git"
3) Перейдем в папку website_for_silant командой:
cd website_for_silant
4) Устанавливаем все библиотеки из файла requierements:
pip install -r requirements.txt
6) Перейдем в папку silant_app:
cd silant_app
7) Можем запускать django сервер:
python3 manage.py runserver
8) Для работы визуальной части приложения переходим в папку frontend во втором терминале или другом IDE:
cd frontend
9) Устанавливаем все необходимое командой:
npm i
10) Добавляем файл .babelrc со следующим содержимым:
{ "presets": ["@babel/preset-env", "@babel/preset-react"] }
11) Можем запускать react-сервер:
npm start
