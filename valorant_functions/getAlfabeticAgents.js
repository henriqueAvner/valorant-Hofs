const agents = require('../valorant_functions/agents');

const getAlfabeticAgents = () => {
   return agents.filter((agent) => {
        return agent;
    }).map((nome) => {
        return nome.name;
    }).sort((a, b) => a.localeCompare(b));
}
console.log(getAlfabeticAgents());