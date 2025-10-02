/**
 * JavaScript específico para a página de editar pessoa
 */

const EditarPessoa = {
    pessoaId: null,

    // Carregar dados da pessoa para edição
    async carregarPessoa() {
        this.pessoaId = Utils.obterParametroUrl('id');
        
        if (!this.pessoaId) {
            Utils.mostrarErro('ID da pessoa não fornecido');
            return;
        }
        
        try {
            const pessoa = await API.buscarPessoa(this.pessoaId);
            this.preencherFormulario(pessoa);
        } catch (error) {
            Utils.esconderLoading();
            Utils.mostrarErro('Erro ao carregar pessoa: ' + error.message);
        }
    },

    // Preencher formulário com dados da pessoa
    preencherFormulario(pessoa) {
        Utils.esconderLoading();
        
        const form = document.getElementById('pessoa-form');
        if (form) {
            form.style.display = 'block';
        }
        
        // Preencher campos básicos
        const campos = ['nome', 'email', 'telefone', 'dataNascimento'];
        campos.forEach(campo => {
            const elemento = document.getElementById(campo);
            if (elemento && pessoa[campo]) {
                elemento.value = pessoa[campo];
            }
        });
        
        // Marcar radio button correto para gênero
        const radioGenero = document.querySelector(`input[name="genero"][value="${pessoa.genero}"]`);
        if (radioGenero) {
            radioGenero.checked = true;
        }
    },

    // Processar formulário de edição
    async processarFormulario(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const pessoa = {
            id: parseInt(this.pessoaId),
            nome: formData.get('nome'),
            email: formData.get('email'),
            telefone: formData.get('telefone'),
            genero: formData.get('genero'),
            dataNascimento: formData.get('dataNascimento')
        };
        
        try {
            await API.atualizarPessoa(this.pessoaId, pessoa);
            // Redireciona para a listagem após sucesso
            Utils.redirecionarPara('listar-pessoas.html');
        } catch (error) {
            Utils.mostrarErro('Erro ao atualizar pessoa: ' + error.message);
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
            this.carregarPessoa();
        });
    }
};

// Inicializar quando o script for carregado
EditarPessoa.init();