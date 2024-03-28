<script>
  import Task from "$lib/task.svelte"

  let task = $state({ text: "initial" })
</script>

<Task prop={task} />

<button onclick={() => {
  task = { text: "updated" }
}}>
  Update prop
</button>
