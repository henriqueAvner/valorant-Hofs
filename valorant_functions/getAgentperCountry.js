const agents = require('../valorant_functions/agents');

const countryAgents = agents.filter(agent => agent.pais).map(pais => pais.pais);
const getAgentperCountry = (country) => {
    if (!country) {
        return undefined;
    }
    if (!countryAgents.includes(country) && typeof country == 'string') {
        return `Desculpe, esse país não foi encontrado em nossa lista de países dos agentes`;
    }
    return agents.filter((objAgent) => {
        if (objAgent.pais == country) {
            return objAgent.name;
        }
    }).map((agent) => agent.name);
}

module.exports = getAgentperCountry;


//Como eu queria trazer apenas o nome do agente, ao invés de utilizar o find junto com o map, resolvi utilizar o filter, pois o find não estava aparecendo como função ao utilizar o map(), e estava retornando todo o objeto do agente.