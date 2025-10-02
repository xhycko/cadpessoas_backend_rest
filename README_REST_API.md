# REST API - Cadastro de Pessoas

## Endpoints

- `GET /api/health` - Status da API
- `GET /api/pessoas` - Lista todas as pessoas
- `GET /api/pessoas/{id}` - Busca pessoa por ID
- `POST /api/pessoas` - Cria nova pessoa
- `PUT /api/pessoas/{id}` - Atualiza pessoa
- `DELETE /api/pessoas/{id}` - Remove pessoa

## Modelo de Dados

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

### Listar pessoas

```bash
curl http://localhost:8080/api/pessoas
```

### Criar pessoa

```bash
curl -X POST http://localhost:8080/api/pessoas \
  -H "Content-Type: application/json" \
  -d '{"nome":"João","email":"joao@email.com","telefone":"(11) 99999-9999","genero":"Masculino","dataNascimento":"1990-01-01"}'
```

### Atualizar pessoa

```bash
curl -X PUT http://localhost:8080/api/pessoas/1 \
  -H "Content-Type: application/json" \
  -d '{"nome":"João Silva","email":"joao@email.com","telefone":"(11) 88888-8888","genero":"Masculino","dataNascimento":"1990-01-01"}'
```

### Remover pessoa

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
