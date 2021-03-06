import axios from 'axios'

//server base URL
const API_URL = 'https://app.getrntr.com/api'

/* This Service class uses for interact with BackEndAPI's */
class Service {

    async retrieveAllProducts() {
        return await axios.get(`${API_URL}/products/v2/by-location?url=rntr-recruitment-only-product`);
    }


    retriveSkuData(id: any) {
        return axios.get(`${API_URL}/skus/${id}/availability/distribution`);
    }

}

export default new Service()