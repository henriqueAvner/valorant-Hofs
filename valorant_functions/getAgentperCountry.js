const agents = require('../valorant_functions/agents');

const getAgentperCountry = (country) => {
    return agents.filter((objAgent) => {
        if (objAgent.pais == country) {
            return objAgent.name;
        }
    }).map((agent) => agent.name);
}
console.log(getAgentperCountry('Estados Unidos'));


//Como eu queria trazer apenas o nome do agente, ao invés de utilizar o find junto com o map, resolvi utilizar o filter, pois o find não estava aparecendo como função ao utilizar o map(), e estava retornando todo o objeto do agente.