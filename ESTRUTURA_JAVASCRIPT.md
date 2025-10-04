# Estrutura JavaScript

## Arquivos
- `api.js` - Chamadas REST API
- `utils.js` - Utilitários (formatação data, parâmetros URL, erro/loading)
- `listar-pessoas.js` - Lógica listagem/exclusão
- `adicionar-pessoa.js` - Formulário criação
- `editar-pessoa.js` - Formulário edição
- `health.js` - Monitoramento API (refresh 30s)

## Métodos API
- `listarPessoas()` - GET /api/pessoas
- `buscarPessoa(id)` - GET /api/pessoas/{id}
- `criarPessoa(pessoa)` - POST /api/pessoas
- `atualizarPessoa(id, pessoa)` - PUT /api/pessoas/{id}
- `removerPessoa(id)` - DELETE /api/pessoas/{id}
- `verificarHealth()` - GET /api/health

## Padrão
```javascript
const Modulo = {
  async metodo() {
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
```

## Ordem de Carregamento
```html
<script src="js/api.js"></script>
<script src="js/utils.js"></script>
<script src="js/page-specific.js"></script>
```
