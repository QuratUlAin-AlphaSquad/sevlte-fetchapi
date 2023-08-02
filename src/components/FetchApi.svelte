<script>
// let post = []
function getPosts(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    console.log(response, "getdata")
    // .then(data => console.log(data,"getdata"))
    // .then(data => posts =data)
}
</script>

{#await getPosts()}
    <p class="text-2xl">Loading...</p>
{:then posts} 
{#each posts as post(post.id)}
<p class="text-3xl">{post.title}</p>
<p>{post.body}</p>
<hr>

{/each}  
{/await}
