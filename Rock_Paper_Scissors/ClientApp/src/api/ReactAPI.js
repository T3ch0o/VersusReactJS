import axios from 'axios';

const react = {
    getReactStatus: function(payload) {
        return axios.post('api/react/hand_sign', payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};

export default react;
