import axios from 'axios';

const player = {
    register: function(payload) {
        return axios.post('api/player/register', payload, {
           headers: {
               'Content-Type': 'application/json'
           }
        });
    }
};

export default player;
