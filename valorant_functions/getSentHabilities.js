const agents = require('../valorant_functions/agents');

const getSentHabilities = () => agents
    .filter((agent) => agent.classe === 'Sentinela'? agent: '')
    .map((agente) => {
        return {nome: agente.name, habilidades: agente.habilidades} 
    });

module.exports = getSentHabilities;