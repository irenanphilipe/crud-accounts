# Frontend

### Navegar até a pasta do frontend e compilar a imagem Docker com o comando: 
```
docker build -t frontend .
```

### Rodar o container com: 
```
docker run -it -p 8080:80 --rm --name frontend-bemol-v1 frontend
```