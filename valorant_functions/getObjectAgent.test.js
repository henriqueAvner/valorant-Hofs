const getObjectAgent = require('./getObjectAgent');

describe('A função deve retornar o objeto do agente passado como parâmetro', () => {
    it('Retorna o objeto do agente Chamber, quando passada a string Chamber como parâmetro', () => {
        const agChamber = [
            {
              name: 'Chamber',
              pais: 'França',
              classe: 'Sentinela',
              habilidades: [
                'caçador de cabeças',
                'rendezvous',
                'marca registrada',
                'tour de force'
              ],
              orbes: 7
            }
          ]
        expect(getObjectAgent('Chamber')).toEqual(agChamber);
    })
    it('Retorna o objeto do agente Sova, quando a string Sova for passada como parâmetro', () => {
        const agSova = [
            {
              name: 'Sova',
              pais: 'Rússia',
              classe: 'Iniciador',
              habilidades: [
                'flecha de choque',
                'flecha rastreadora',
                'drone coruja',
                'fúria do caçador'
              ],
              orbes: 8
            }
          ]
          expect(getObjectAgent('Sova')).toEqual(agSova);
    })
    it('Retorna um array vazio, quando não passado nenhum agente como parâmetro', () => {
        expect(getObjectAgent()).toEqual([]);
    })
    it('Retorna um erro quando não passada uma string como parâmetro', () => {
        expect(getObjectAgent(4)).toBe('Erro! O parâmetro deve ser uma string');
    })

})