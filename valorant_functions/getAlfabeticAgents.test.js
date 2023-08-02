const getAlfabeticAgents = require('./getAlfabeticAgents');

describe('A função deve retornar um array com o nome dos agentes em ordem alfabética', () => {
    it('Ao executar a função, ela retorna todos os agentes em ordem alfabética', () => {
        const agentsAlfabetic = [
            'Astra',     'Breach',
            'Brimstone', 'Chamber',
            'Cypher',    'Fade',
            'Jett',      'Kay/o',
            'Killjoy',   'Neon',
            'Omen',      'Phoenix',
            'Raze',      'Reyna',
            'Sage',      'Skye',
            'Sova',      'Viper',
            'Yoru'
          ]
        expect(getAlfabeticAgents()).toEqual(agentsAlfabetic);
    })
    it('Ao executar a função, a agente Astra deve ser a primeira string do array', () => {
        expect(getAlfabeticAgents()[0]).toBe('Astra');
    })
    it('Ao executar a função, a agente Reyna deve estar na posição 13ª', () => {
        expect(getAlfabeticAgents()[13]).toBe('Reyna');
    })
})