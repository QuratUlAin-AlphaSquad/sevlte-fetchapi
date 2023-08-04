<script>
  export let data;
  const products = data.products 
</script>

<p class="text-2xl">{data.title}</p>
{#each products as product}
  <div>
    <h1>{product.title}</h1>
    <p>{product.description}</p>
  </div>
{/each}

<!-- <p>List of Products</p> -->