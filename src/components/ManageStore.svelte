<script>


//----Writeable store Import
    // import cart from "../store/cart";

//----Custom store Import

    import customStore from "../store/cart";

//----Readable store Import

    /// Read/Write Store Fuction

//     function changeData(){
// cart.update(items => {
//     return[
//         ...items,
//         {
//             id:3,
//             name:'item 3',
//             price:100
//         }
//     ]
// })
//     }


// Custom Store Function
    function changeData(){
        customStore.addItem(
            {
                id:3,
                name:'Item 3',
                price: 1.99
            },
            
        )
    }
</script>


<button on:click={changeData}>Change Data</button>