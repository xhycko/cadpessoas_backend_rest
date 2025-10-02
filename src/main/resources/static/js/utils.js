/**
 * Utilitários gerais da aplicação
 */

const Utils = {
    // Formatar data para exibição em português
    formatarData(dataString) {
        const data = new Date(dataString);
        return data.toLocaleDateString('pt-BR');
    },

    // Obter parâmetro da URL
    obterParametroUrl(nome) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(nome);
    },

    // Mostrar mensagem de erro
    mostrarErro(mensagem, elementoId = 'error-message') {
        const errorDiv = document.getElementById(elementoId);
        if (errorDiv) {
            errorDiv.textContent = mensagem;
            errorDiv.style.display = 'block';
            window.scrollTo(0, 0);
        }
    },

    // Esconder mensagem de erro
    esconderErro(elementoId = 'error-message') {
        const errorDiv = document.getElementById(elementoId);
        if (errorDiv) {
            errorDiv.style.display = 'none';
        }
    },

    // Redirecionar para página
    redirecionarPara(url) {
        window.location.href = url;
    },

    // Mostrar/esconder loading
    mostrarLoading(elementoId = 'loading') {
        const loadingDiv = document.getElementById(elementoId);
        if (loadingDiv) {
            loadingDiv.style.display = 'block';
        }
    },

    esconderLoading(elementoId = 'loading') {
        const loadingDiv = document.getElementById(elementoId);
        if (loadingDiv) {
            loadingDiv.style.display = 'none';
        }
    }
};