const agents = require('../valorant_functions/agents');

const getObjectAgent = (agentObject) => {
    if (!agentObject) {
        return [];
    }
    if (typeof agentObject !== 'string') {
        return 'Erro! O parâmetro deve ser uma string';
    }
    return agents.filter((agent) => {
         if (agentObject === agent.name) {
             return agent;
         }
     })
}
module.exports = getObjectAgent;