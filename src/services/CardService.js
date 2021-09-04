import axios from 'axios';

const baseUrl = 'http://localhost:8081/api/cards';

class CardService{

    saveCard(card){
        return axios.post(baseUrl, card);
    }
}