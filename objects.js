let product ={
    productId: '1',
    productName: 'Car',
    quantityInStock:'999',
    unitPrice: '2999999',
    productDescription:{
        productBrand: 'BMW',
        sizeOrQuantity: '99',
        tasteOrSent: 'Dior Savage',
        color: 'Black , White',
        additionalDescription: 'Luxury Car'
    }

};

console.log(product);
console.log(product.productId);
console.log(product.productName);
console.log(product.quantityInStock);
console.log(product.unitPrice);
console.log(product.productDescription);
console.log(product.productDescription.productBrand);
console.log(product.productDescription.sizeOrQuantity);
console.log(product.productDescription.tasteOrSent);
console.log(product.productDescription.color);
console.log(product.productDescription.additionalDescription);

