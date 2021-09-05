import axios from 'axios';

const baseUrl = 'http://localhost:8081/api/cards';

class CardService{

    getCards(){
        return axios.get(baseUrl);
    }

    saveCard(card){
        return axios.post(baseUrl, card);
    }
}