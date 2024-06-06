export const cart = [{
    productId:  '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
    quantity:   2,
},{
    productId:  '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:   1  
},
{
    productId:  '54e0eccd-8f36-462b-b68a-8182611d9add',
    quantity:   1  
}];

export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });

    if(matchingItem) {
        matchingItem.quantity += 1;
    } else {
    
    cart.push({
        productId: productId,
        quantity: 1
    });
}
}