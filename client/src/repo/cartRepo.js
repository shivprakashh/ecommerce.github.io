import { useEffect } from "react"

class CartLocalRepo {
    static async getCartData() {
        // local
    }
    static async addToCart(product) {

    }
    static async updateQty(product) {

    }
    static async removeFromCart(product) {

    }
    static async removeAll() {

    }
}
class CartApiRepo {
    static async getCartData() {
        // get user_id from localStorage 
       
    }
    static async addToCart(product) {
        // post
    }
    static async updateQty(product) {

    }
    static async removeFromCart(product) {

    }
    static async removeAll() {

    }
}

const CartRepo = CartLocalRepo

export default CartRepo