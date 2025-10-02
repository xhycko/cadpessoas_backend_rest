# JavaScript Structure

## Files
```
js/
├── api.js              # REST API calls
├── utils.js            # Reusable helpers
├── listar-pessoas.js   # List page logic
├── adicionar-pessoa.js # Add page logic
├── editar-pessoa.js    # Edit page logic
└── health.js           # Health page logic
```

## Modules

### `api.js`
- `listarPessoas()` - GET /api/pessoas
- `buscarPessoa(id)` - GET /api/pessoas/{id}
- `criarPessoa(pessoa)` - POST /api/pessoas
- `atualizarPessoa(id, pessoa)` - PUT /api/pessoas/{id}
- `removerPessoa(id)` - DELETE /api/pessoas/{id}
- `verificarHealth()` - GET /api/health

### `utils.js`
- `formatarData(dataString)` - Format dates (pt-BR)
- `obterParametroUrl(nome)` - Extract URL params
- `mostrarErro(mensagem)` - Show error messages
- `esconderErro()` - Hide error messages
- `redirecionarPara(url)` - Navigate
- `mostrarLoading()` / `esconderLoading()` - Loading control

### Page-specific modules
- **listar-pessoas.js**: Load/display table, delete
- **adicionar-pessoa.js**: Form processing, redirect
- **editar-pessoa.js**: Load by ID, update, redirect
- **health.js**: API monitoring, auto-refresh (30s)

## Pattern
```javascript
const ModuleName = {
  async method() {
    try {
      const data = await API.endpoint();
    } catch (error) {
      Utils.mostrarErro(error.message);
    }
  },
  
  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.configurarEventos();
    });
  }
};

ModuleName.init();
```

## Loading Order
```html
<script src="js/api.js"></script>
<script src="js/utils.js"></script>
<script src="js/page-specific.js"></script>
```
