import productData from '../data/productData.js'
import { showProducts } from './productPreview.js'
import { deactiveFilterBtns } from './productFilters.js'

const searchInput = document.querySelector('.product-search input')

const clearsearchInput = () => {
    searchInput.value = ''
}

const searchProduct = () => {
    let searchedProducts = productData

    if (searchInput.value < 1) {
        searchInput.focus()
    } else {
        const inputValue = searchInput.value.toLowerCase().trim();
        const searchTerms = inputValue.split(' ');
    
        searchedProducts = productData.filter((product) => {
            return searchTerms.every(term => product.title.toLowerCase().includes(term));
        });
    
        showProducts(searchedProducts);
        deactiveFilterBtns()
    }
}

export { searchProduct, clearsearchInput }