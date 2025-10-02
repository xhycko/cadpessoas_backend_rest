/**
 * JavaScript específico para a página de listagem de pessoas
 */

const ListarPessoas = {
    // Carregar e exibir todas as pessoas
    async carregarPessoas() {
        try {
            const pessoas = await API.listarPessoas();
            this.exibirPessoas(pessoas);
        } catch (error) {
            Utils.esconderLoading();
            Utils.mostrarErro('Erro ao carregar pessoas: ' + error.message);
        }
    },

    // Exibir pessoas na tabela
    exibirPessoas(pessoas) {
        Utils.esconderLoading();
        
        const container = document.getElementById('pessoas-container');
        const tbody = document.getElementById('pessoas-tbody');
        const emptyMessage = document.getElementById('empty-message');
        
        if (!container || !tbody) return;
        
        container.style.display = 'block';
        tbody.innerHTML = '';
        
        if (pessoas.length === 0) {
            if (emptyMessage) {
                emptyMessage.style.display = 'block';
            }
            return;
        }
        
        if (emptyMessage) {
            emptyMessage.style.display = 'none';
        }
        
        pessoas.forEach(pessoa => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${pessoa.id}</td>
                <td>${pessoa.nome}</td>
                <td>${pessoa.email}</td>
                <td>${pessoa.telefone || ''}</td>
                <td>${pessoa.genero}</td>
                <td>${Utils.formatarData(pessoa.dataNascimento)}</td>
                <td class="actions">
                    <a href="editar-pessoa.html?id=${pessoa.id}" class="btn btn-secondary">Editar</a>
                    <button onclick="ListarPessoas.removerPessoa(${pessoa.id})" class="btn btn-danger">Remover</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    },

    // Remover pessoa
    async removerPessoa(id) {
        try {
            await API.removerPessoa(id);
            // Recarrega a lista após remoção
            this.carregarPessoas();
        } catch (error) {
            console.error('Erro ao remover pessoa:', error);
            // Recarrega mesmo com erro para atualizar a lista
            this.carregarPessoas();
        }
    },

    // Inicializar página
    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.carregarPessoas();
        });
    }
};

// Inicializar quando o script for carregado
ListarPessoas.init();