import axios from "axios";

function compareDistance(lon1, lat1, lon2, lat2) {
    var R = 6371;
    var dLat = (lat2 - lat1).toRad();
    var dLon = (lon2 - lon1).toRad();
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return Math.round(d * 100) / 100;
}

function getPosition(options) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        resolve,
        reject,
        options
      );
    });
}  
Number.prototype.toRad = function () {
    return this * Math.PI / 180;
}

export default {

    async setParkings({ commit }) {
        const apiURL = "https://data.nantesmetropole.fr/api/records/1.0/search/?rows=40&dataset=244400404_parcs-relais-nantes-metropole-disponibilites&q=&facet=grp_nom&facet=grp_statut";
        let parkings = [];
        let position = {
            "longitude": -1.5291629,
            "latitude": 47.213649
        };
        const response = await axios.get(apiURL);
        const favoriteParkings = JSON.parse(localStorage.getItem('parkings')) !== null ? JSON.parse(localStorage.getItem('parkings')) : [];
        const positionNavigator = await getPosition();
       
        position.longitude = positionNavigator.coords.longitude;
        position.latitude = positionNavigator.coords.latitude
        
        parkings = response.data.records
            .map(parking => {
                return {
                    ...parking,
                    favorite: favoriteParkings.findIndex(parkingName => parkingName === parking.fields.grp_nom) !== -1,
                    distance: compareDistance(position.longitude, position.latitude, parking.fields.location[1], parking.fields.location[0])
                }
            })
            .sort((parking1, parking2) => parking1.distance - parking2.distance);

        commit("setParkings", parkings);

        return parkings;
    },
}