# Frontend

## Pages
- `index.html` - Home/navigation
- `listar-pessoas.html` - Table view, edit/delete
- `adicionar-pessoa.html` - Create form
- `editar-pessoa.html` - Edit form (URL param `?id=1`)
- `health.html` - API status monitor

## Tech Stack
- HTML5/CSS3
- Vanilla JS + Fetch API
- Responsive design

## Features
- CRUD operations
- Loading states
- Error handling
- Date formatting (pt-BR)
- Auto-redirect after actions
- No confirmations

## Structure
```
static/
├── *.html
├── style/
│   ├── style.css
│   └── frontend.css
└── js/
    ├── api.js
    ├── utils.js
    └── *.js (page-specific)
```

## Usage
```bash
./mvnw spring-boot:run
```
Access: `http://localhost:8080`