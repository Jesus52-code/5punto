# Imagen base de Node.js
FROM node:16

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos necesarios
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Construir la aplicación
RUN npm run build

# Servir la aplicación usando un servidor estático
RUN npm install -g serve
CMD ["serve", "-s", "dist"]

# Exponer el puerto
EXPOSE 3000
