<script>
    // import FetchApi from "./components/FetchApi.svelte";
    /// Readable store component
    // import ApiPostRequest from "./components/ApiPostRequest.svelte";
    import PutUpdateMethod from "./components/PutUpdateMethod.svelte";
    import PatchUpdateMethod from "./components/PatchUpdateMethod.svelte";
    import DeleteMethod from "./components/DeleteMethod.svelte";
    // import { GET } from "./routes/api/comments/+server";

    // Manual method to unsubscribe from a store
    //to loop items in an array

    // let items = []

    //to subscribe to the store
    // cartItems : used to call data

    // cart.subscribe(cartItems => {

    // Assigned data to the array

    // items = cartItems
    // })
</script>

<!-- <ManageStore /> -->

<!-- $cart : unsubscribe other method -->
<!-- {#each $cart as item (item.id)}
    <p>{item.name} - ${item.price}</p>
{/each} -->

<!-- Store Values accessed! -->
<!-- <p class="text-4xl">Data Fetched from API</p>
<FetchApi />

<h1>Post Request</h1>
<ApiPostRequest />

<h1>Update Data Using Put Method</h1>
<PutUpdateMethod />

<h1>Update Data Using Patch Method</h1>
<PatchUpdateMethod />

<h1>Delete Data</h1>
<DeleteMethod /> -->
<!-- <h1>Counter : {$timer}</h1> -->

<!-- <button on:click={GET()}>Comments</button> //( Not working)-->
