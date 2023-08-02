const getAgents = require('./getAgents');

describe('A função deve retornar o valor da soma de todos os objetos presentes no array', () => {
    it('Espera-se o retorno do número 19', () => {
        expect(getAgents()).toBe(19);
    })
})