const getAgentOrbs = require('./getAgentOrbs');

describe('A função deve retornar o nome dos agentes pela quantidade de orbes de ultimate passada como parâmetro', () => {
    it('Ao digitar o número 6, um array de agentes que precisam de 6 orbes é retornado', () => {
        const arrayAgents6 = [ 'Cypher', 'Phoenix', 'Reyna', 'Skye', 'Yoru' ]
        expect(getAgentOrbs(6)).toEqual(arrayAgents6);
    })
    it('Ao digitar o número 7, um array de agentes que precisam de 7 orbes é retornado', () => {
        const arrayAgents7 = [
            'Astra',     'Breach',
            'Brimstone', 'Chamber',
            'Fade',      'Jett',
            'Kay/o',     'Killjoy',
            'Neon',      'Omen',
            'Raze',      'Viper'
          ]
        expect(getAgentOrbs(7)).toEqual(arrayAgents7);
    })
    it('Ao digitar o número 8, um array de agentes que precisam de 8 orbes é retornado', () => {
        const arrayAgents8 = [ 'Sage', 'Sova' ]
        expect(getAgentOrbs(8)).toEqual(arrayAgents8);
    })
    it('Ao passar um valor diferente de 6,7 ou 8, retorna uma mensagem de erro', () => {
        expect(getAgentOrbs(1)).toBe('Digite um número válido de orbes (entre 6 e 8)!');
    })

})