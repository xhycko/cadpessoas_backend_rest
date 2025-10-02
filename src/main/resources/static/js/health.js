/**
 * JavaScript específico para a página de status da API
 */

const Health = {
    // Verificar status da API
    async verificarHealth() {
        Utils.mostrarLoading();
        Utils.esconderErro();
        
        const healthInfo = document.getElementById('health-info');
        if (healthInfo) {
            healthInfo.style.display = 'none';
        }
        
        try {
            const healthData = await API.verificarHealth();
            this.exibirHealthInfo(healthData);
        } catch (error) {
            Utils.esconderLoading();
            Utils.mostrarErro('Erro ao verificar status: ' + error.message);
        }
    },

    // Exibir informações de status
    exibirHealthInfo(healthData) {
        Utils.esconderLoading();
        
        const healthInfo = document.getElementById('health-info');
        if (healthInfo) {
            healthInfo.style.display = 'block';
        }
        
        const statusElement = document.getElementById('health-status');
        const statusText = document.getElementById('status-text');
        
        if (statusText) {
            statusText.textContent = healthData.status;
        }
        
        if (statusElement) {
            if (healthData.status === 'UP') {
                statusElement.className = 'health-status health-up';
            } else {
                statusElement.className = 'health-status health-down';
            }
        }
        
        const serviceName = document.getElementById('service-name');
        if (serviceName) {
            serviceName.textContent = healthData.service || 'N/A';
        }
        
        const timestamp = document.getElementById('timestamp');
        if (timestamp && healthData.timestamp) {
            const date = new Date(healthData.timestamp);
            timestamp.textContent = date.toLocaleString('pt-BR');
        }
    },

    // Configurar eventos
    configurarEventos() {
        // Botão de verificar novamente
        const btnVerificar = document.querySelector('button[onclick="verificarHealth()"]');
        if (btnVerificar) {
            btnVerificar.onclick = () => this.verificarHealth();
        }
    },

    // Inicializar página
    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.configurarEventos();
            this.verificarHealth();
            
            // Auto-refresh a cada 30 segundos
            setInterval(() => this.verificarHealth(), 30000);
        });
    }
};

// Inicializar quando o script for carregado
Health.init();