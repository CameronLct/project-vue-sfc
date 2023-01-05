import axios from "axios";

export default {
    async setParkings({ commit }) {
        const apiURL = "https://data.nantesmetropole.fr/api/records/1.0/search/?rows=40&dataset=244400404_parcs-relais-nantes-metropole-disponibilites&q=&facet=grp_nom&facet=grp_statut";
        let parkings = [];

        const response = await axios.get(apiURL);
        parkings = response.data.records;        
        commit("setParkings", parkings)
    },
}