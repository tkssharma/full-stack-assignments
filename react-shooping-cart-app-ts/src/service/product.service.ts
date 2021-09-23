import {Product} from '../model/product';

export class ProductService {

    getProducts(): Promise<Product[]> {
        return fetch('http://www.mocky.io/v2/5cc95d2b310000db0c12ccb1')
            .then(response => response.json());
    }
}
