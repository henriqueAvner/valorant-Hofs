const agents = require('../valorant_functions/agents');

const getEuas = () => {
    return agents.filter((country) => {
        if (country.pais === 'Estados Unidos') {
            return country;
        }
    }).map((agent) => agent.name);
}
console.log(getEuas());