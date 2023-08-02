<script>
    const postData = {
     
    }

function submitpost(){
fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:'DELETE',
    
})
.then(response => response.json())
.then(data => console.log(data))
}
</script>

<button on:click={submitpost}  class="rounded-full border-2 bg-red-700 p-2">Delete</button>