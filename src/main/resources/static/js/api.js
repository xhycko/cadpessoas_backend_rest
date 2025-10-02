/**
 * Módulo para comunicação com a API REST
 */

const API = {
    baseURL: '/api',

    // Listar todas as pessoas
    async listarPessoas() {
        const response = await fetch(`${this.baseURL}/pessoas`);
        if (!response.ok) {
            throw new Error('Erro ao carregar pessoas');
        }
        return await response.json();
    },

    // Buscar pessoa por ID
    async buscarPessoa(id) {
        const response = await fetch(`${this.baseURL}/pessoas/${id}`);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Pessoa não encontrada');
            }
            throw new Error('Erro ao carregar dados da pessoa');
        }
        return await response.json();
    },

    // Criar nova pessoa
    async criarPessoa(pessoa) {
        const response = await fetch(`${this.baseURL}/pessoas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pessoa)
        });
        
        if (!response.ok) {
            throw new Error('Erro ao adicionar pessoa');
        }
        return await response.json();
    },

    // Atualizar pessoa existente
    async atualizarPessoa(id, pessoa) {
        const response = await fetch(`${this.baseURL}/pessoas/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pessoa)
        });
        
        if (!response.ok) {
            throw new Error('Erro ao atualizar pessoa');
        }
        return await response.json();
    },

    // Remover pessoa
    async removerPessoa(id) {
        const response = await fetch(`${this.baseURL}/pessoas/${id}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error('Erro ao remover pessoa');
        }
    },

    // Verificar status da API
    async verificarHealth() {
        const response = await fetch(`${this.baseURL}/health`);
        if (!response.ok) {
            throw new Error('API não está respondendo');
        }
        return await response.json();
    }
};