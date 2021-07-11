# Frontend for [roopelele.fi](https://roopelele.fi)

This is simple website made using reactJS.

## Getting started
- Install dependencies
```
npm ci
```
- Start development server. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```
npm start
```
- Build the project
```
npm run build
```

## Docker

- Build the image:
```
docker build -t webserver .
```
- Run the image:
```
docker run --rm --network host -p 80:80 -v $PWD/build:/usr/share/nginx/html webserver
```