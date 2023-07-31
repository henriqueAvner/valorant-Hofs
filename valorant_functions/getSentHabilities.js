const agents = require('../valorant_functions/agents');

const getSentHabilities = () => {
    return agents.filter((agent) => {
        if (agent.classe === 'Sentinela') {
            return agent;
        }
    }).map((agente) => {
        return {nome: agente.name, habilidades: agente.habilidades} 
    });
}
console.log(getSentHabilities());