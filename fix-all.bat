@echo off
echo ========================================
echo Fixing fonts and rebuilding
echo ========================================

cd C:\Users\V3yth\Ckal

REM Останавливаем и удаляем старый контейнер
docker stop test-app 2>nul
docker rm test-app 2>nul

REM Создаем структуру public если нет
mkdir public\assets\fonts 2>nul
mkdir public\assets\images 2>nul

REM Копируем изображения если есть
if exist src\assets\images (
    xcopy src\assets\images\* public\assets\images\ /E /I /Y
)

REM Копируем шрифты если есть
if exist src\assets\fonts (
    xcopy src\assets\fonts\* public\assets\fonts\ /E /I /Y
)

REM Пересобираем Docker
docker build -t calorie-counter:test .

REM Запускаем контейнер
docker run -d -p 8080:80 --name test-app calorie-counter:test

echo.
echo Waiting for container...
timeout /t 3

echo.
echo === Проверка структуры ===
docker exec test-app ls -la /usr/share/nginx/html/assets/images/
echo.
docker exec test-app ls -la /usr/share/nginx/html/assets/fonts/

echo.
echo Opening browser...
start http://localhost:8080

echo.
echo Press Ctrl+C to stop, or close this window
echo To stop container manually: docker stop test-app