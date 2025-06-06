FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

# Установка PM2
RUN npm install -g pm2

# Копируем всё нужное
COPY --from=builder /app /app

# Добавляем конфигурацию PM2
COPY ecosystem.config.js ./ecosystem.config.js
1
EXPOSE 3000

CMD ["pm2-runtime", "ecosystem.config.js"]