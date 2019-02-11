import axios from 'axios';

const player = {
    register: function(payload) {
        return axios.post('api/player/register', payload, {
           headers: {
               'Content-Type': 'application/json'
           }
        });
    },
    getAllPlayersStatus: function() {
        return axios.get('api/player/all');
    }
};

export default player;
