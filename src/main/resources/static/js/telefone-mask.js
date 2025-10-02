/**
 * Máscara e validação para telefone
 */

const TelefoneMask = {
    // Aplicar máscara de telefone
    aplicarMascara(input) {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length <= 11) {
                if (value.length <= 2) {
                    value = value.replace(/(\d{0,2})/, '($1');
                } else if (value.length <= 6) {
                    value = value.replace(/(\d{2})(\d{0,4})/, '($1) $2');
                } else if (value.length <= 10) {
                    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
                } else {
                    value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
                }
            }
            
            e.target.value = value;
        });
    },

    // Validar formato de telefone brasileiro
    validar(telefone) {
        if (!telefone) return true; // Campo opcional
        
        const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
        return regex.test(telefone);
    },

    // Inicializar máscaras em todos os campos de telefone
    init() {
        document.addEventListener('DOMContentLoaded', () => {
            const telefoneInputs = document.querySelectorAll('input[type="tel"]');
            telefoneInputs.forEach(input => {
                this.aplicarMascara(input);
            });
        });
    }
};

// Inicializar quando o script for carregado
TelefoneMask.init();