FROM node:20-alpine AS builder

WORKDIR /app

# Копируем package.json
COPY package*.json ./

# Устанавливаем зависимости (ЭТО ВАЖНО!)
RUN npm install

# Копируем остальной код
COPY . .

# Собираем приложение
RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

RUN echo "server { listen 80; root /usr/share/nginx/html; location / { try_files \$uri \$uri/ /index.html; } location /health { return 200 \"healthy\n\"; add_header Content-Type text/plain; } }" > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]