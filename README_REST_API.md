# API REST - Cadastro de Pessoas

## Endpoints

- `GET /api/health` - Status da API
- `GET /api/pessoas` - Lista pessoas
- `GET /api/pessoas/{id}` - Busca por ID
- `POST /api/pessoas` - Cria pessoa
- `PUT /api/pessoas/{id}` - Atualiza pessoa
- `DELETE /api/pessoas/{id}` - Remove pessoa

## Modelo

```json
{
  "id": "number",
  "nome": "string (obrigatório)",
  "email": "string (obrigatório)",
  "telefone": "string (opcional)",
  "genero": "Masculino|Feminino|Não Informado",
  "dataNascimento": "YYYY-MM-DD"
}
```

## Exemplos

### Listar
```bash
curl http://localhost:8080/api/pessoas
```

### Criar
```bash
curl -X POST http://localhost:8080/api/pessoas \
  -H "Content-Type: application/json" \
  -d '{"nome":"João","email":"joao@email.com","telefone":"(11) 99999-9999","genero":"Masculino","dataNascimento":"1990-01-01"}'
```

### Atualizar
```bash
curl -X PUT http://localhost:8080/api/pessoas/1 \
  -H "Content-Type: application/json" \
  -d '{"nome":"João Silva","email":"joao@email.com","telefone":"(11) 88888-8888","genero":"Masculino","dataNascimento":"1990-01-01"}'
```

### Remover
```bash
curl -X DELETE http://localhost:8080/api/pessoas/1
```

## Executar

```bash
./mvnw spring-boot:run
```

**URL**: http://localhost:8080
**H2 Console**: http://localhost:8080/h2-console
- URL: `jdbc:h2:mem:cadpessoas`
- User: `admin`
- Password: `admin`
