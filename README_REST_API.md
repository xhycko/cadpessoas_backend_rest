# REST API

## Endpoints
- `GET /api/health` - Status
- `GET /api/pessoas` - List all
- `GET /api/pessoas/{id}` - Get by ID
- `POST /api/pessoas` - Create
- `PUT /api/pessoas/{id}` - Update
- `DELETE /api/pessoas/{id}` - Delete

## JSON Schema
```json
{
  "nome": "string",
  "email": "string",
  "genero": "Masculino|Feminino|Não Informado",
  "dataNascimento": "YYYY-MM-DD"
}
```

## Run
```bash
./mvnw spring-boot:run
```
URL: `http://localhost:8080`

## Database
H2 Console: `/h2-console`
- URL: `jdbc:h2:mem:cadpessoas`
- User: `admin`
- Pass: `admin`

## cURL Examples
```bash
# List
curl /api/pessoas

# Create
curl -X POST /api/pessoas -H "Content-Type: application/json" -d '{"nome":"Test","email":"test@test.com","genero":"Masculino","dataNascimento":"1990-01-01"}'

# Get
curl /api/pessoas/1

# Update
curl -X PUT /api/pessoas/1 -H "Content-Type: application/json" -d '{"nome":"Updated","email":"updated@test.com","genero":"Feminino","dataNascimento":"1990-01-01"}'

# Delete
curl -X DELETE /api/pessoas/1
```