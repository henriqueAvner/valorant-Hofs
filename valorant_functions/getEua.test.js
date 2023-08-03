const getEuas = require('./getEua');

describe('Ao executar a função, retorna os agentes dos Estados Unidos', () => {
    it('O novo array possui o agente Brimstone como primeiro elemento', () => {
        expect(getEuas()).toContain('Brimstone');
    })
    it('O segundo elemento do array é a agente Viper', () => {
        expect(getEuas()).toContain('Viper');
    })

});