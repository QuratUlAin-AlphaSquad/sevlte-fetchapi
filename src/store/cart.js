
    // import { writable } from "svelte/store";
    import { readable } from "svelte/store";


    // Regular Store
    // const cart =writable([
    //     {
    //         id:1,
    //         name:'item 1',
    //         price:10.00
    //     },
    //     {
    //         id:2,
    //         name:'item 2',
    //         price:999
    //     }
    // ])


    // Custom Store

    // const customStore = {
        // subscribe option added
    //     subscribe : cart.subscribe,
    //     addItem(newItem){
    //         cart.update(items =>{
    //             return [...items, newItem]
    //         })
    //     }
    // }
    // export default cart
    // export default customStore

    // Store Created


    /////////// Readable Store
 let counter = 0

 const timer = readable(counter, newValue =>{
    setInterval(() => {
        newValue(counter++)
    }, 1000)
 })

 export default timer