const agents = require('../valorant_functions/agents');

const getAgentOrbs = (orbes) => {
    if (orbes !== 6 && orbes !== 7 && orbes !== 8) {
        return "Digite um número válido de orbes (entre 6 e 8)!";
    }
    return agents.filter(agent => {
        if (agent.orbes === orbes) {
            return agent.name;
        }
    }).map(name => name.name);
}
console.log(getAgentOrbs(6));
module.exports = getAgentOrbs;