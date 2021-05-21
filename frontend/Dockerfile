# Selecionar imagem para o passo de build
FROM node:lts-alpine as build-stage

# Definir pasta raiz para os comandos a seguir:
WORKDIR /app

# Copiando package.json para a raiz selecionada
COPY package*.json ./

# Comando para baixar as dependências do projeto
RUN npm install

COPY . .

# Executar o comando de build para gerar a pasta build para a execução
RUN npm run build

# Utilizando NGINX para a frente da aplicação 
FROM nginx:stable-alpine as production-stage

# Copiando os arquivos de build gerados para a frente do NGINX
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

#
CMD [ "nginx", "-g", "daemon off;" ]
