const getCart = () => JSON.parse(localStorage.getItem('cart')) || []

const setCart = cartData => localStorage.setItem('cart', JSON.stringify(cartData))

const addToCart = id => {
    const cart = getCart()

    if (cart.length === 0) {
        const newCart = [
            {
                id: id,
                qtd: 1
            }
        ]
        setCart(newCart)
    } else {
        let newCart = cart.map(item => {
            console.log(item)

            if (item.id === id) {
                item.qtd += 1
            } else {
                console.log(newCart)
                newCart.push({ id: id, qtd: 1 })
            }
        })
        setCart(newCart)
    }

}