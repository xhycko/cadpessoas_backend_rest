/**
 * JavaScript específico para a página de adicionar pessoa
 */

const AdicionarPessoa = {
    // Processar formulário de adição
    async processarFormulario(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const pessoa = {
            nome: formData.get('nome'),
            email: formData.get('email'),
            telefone: formData.get('telefone'),
            genero: formData.get('genero'),
            dataNascimento: formData.get('dataNascimento')
        };
        
        try {
            await API.criarPessoa(pessoa);
            // Redireciona para a listagem após sucesso
            Utils.redirecionarPara('listar-pessoas.html');
        } catch (error) {
            Utils.mostrarErro('Erro ao adicionar pessoa: ' + error.message);
        }
    },

    // Configurar eventos do formulário
    configurarEventos() {
        const form = document.getElementById('pessoa-form');
        if (form) {
            form.addEventListener('submit', (e) => this.processarFormulario(e));
        }
    },

    // Inicializar página
    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.configurarEventos();
        });
    }
};

// Inicializar quando o script for carregado
AdicionarPessoa.init();