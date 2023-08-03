const getAgentperCountry = require('./getAgentperCountry');

describe('Ao passar um país como parâmetro, a função retorna os agentes daquele país', () => {
    it('Ao passar Brasil como parâmetro, o retorno será um array com apenas um valor (Raze)',() => {
        expect(getAgentperCountry('Brasil')).toContain('Raze');
    })
    it('Ao passar Estados Unidos como parâmetro, o retorno será um array com os agentes desse país', () => {
        expect(getAgentperCountry('Estados Unidos')).toContain('Brimstone', 'Viper');
    })
    it('Ao nao passar nenhum parâmetro, o retorno será undefined', () => {
        expect(getAgentperCountry()).toBeUndefined();
    })
    it('Ao passar um país não presente no array de objetos, o retorno será uma mensagem de erro',() => {
        expect(getAgentperCountry('Jamaica')).toBe('Desculpe, esse país não foi encontrado em nossa lista de países dos agentes');
    })
})