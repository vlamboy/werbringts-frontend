# werbringts-frontend

[![CI](https://github.com/vlamboy/werbringts-frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/vlamboy/werbringts-frontend/actions/workflows/ci.yml)


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Issues 
* [ ] Seite muss neu geladen werden nach create oder delete --> Server soll bei POST die ID zurück schicken
* [ ] bringListId muss in die URL
* [ ] Name/Id der Person im Cookie speichern
* [x] Produkt muss auf die BringList referenzieren
* [x] nur Produkte der Bringlist anzeigen (via REST Request oder Schleife im Frontend)
* [x] Product bricht zusammen beim Erstellen einer neuen ItemsBroughtList (ersetzen durch Id oder raus nehmen) 
* [ ] List Description abhängig von der BringlistId
* [x] ItemsBrought abhängig von der Product Quantity
* [x] Refactor quatity

### Funktionale TODOs 
* [ ] UPDATE Button bei ItemsBrought  
* [ ] UPDATE bei Product (closed auf true setzen)

### Non Prio Funktionale TODOS




