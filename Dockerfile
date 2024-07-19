# Usar la imagen base de Node.js
FROM node:18-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de package.json y package-lock.json
COPY package*.json ./
COPY pnpm*.yaml ./

# Instalar las dependencias
RUN npm install -g pnpm
RUN pnpm install

# Copiar el resto de la aplicación
COPY . .
RUN npm install -g pnpm

# Construir la aplicación
RUN pnpm run build

# Servir la aplicación utilizando un servidor estático
RUN npm install -g serve

# Exponer el puerto
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["serve", "-s", "dist", "-l", "8080"]