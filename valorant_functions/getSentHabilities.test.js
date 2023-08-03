const getSentHabilities = require('./getSentHabilities');

describe('Ao executar a função, ela retorna os agentes da classe sentinela, juntamente com suas habilidades', () => {
    it('A função deve retornar os objetos dos agentes Chamber, Cypher, Killjoy, e Sage', () => {
        const sentAgents = getSentHabilities().filter(agent => agent).map(nameAgent => nameAgent.nome);
        expect(sentAgents).toEqual(['Chamber', 'Cypher', 'Killjoy', 'Sage']);
    });
    it('O primeiro objeto do array deve ser o objeto referente ao agente Chamber', () => {
        const objChamber = getSentHabilities().filter(agent => agent);
        expect(objChamber[0]).toEqual(getSentHabilities()[0]);
    })
    it('O último objeto do array deve conter, dentro da chave habilidades, a string orbe curativo', () => {
        const habSage = getSentHabilities().filter(agent => agent).map(sage => sage.habilidades);
        expect(habSage[3]).toContain('orbe curativo');
    })
    it('O array de sentinelas criados deve obter a sentinela Killjoy dentro dele', () => {
        const contKJ = getSentHabilities().filter(agent => agent).map(haveKJ => haveKJ.nome);
        expect(contKJ).toContain('Killjoy');

    })
})