<script>
    const postData = {
        // userId: 1,
        // id : 1,
        title: 'Hello ',
        // body:'Fetch Api'
    }

function submitpost(){
fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:'PATCH',
    headers: {
        'Content-Type' :'application/json'
    },
    body: JSON.stringify({
        // userId: postData.userId,
        // id:postData.id,
        title: postData.title,
        // body: postData.body
    })
})
.then(response => response.json())
.then(data => console.log(data))
}
</script>

<button on:click={submitpost}  class="rounded-full bg-green-700 p-2">Update</button>