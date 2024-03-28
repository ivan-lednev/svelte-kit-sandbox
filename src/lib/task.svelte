<script>
  import { dummyAction } from "./dummy-action.svelte"

  const { prop } = $props()

  let trackedState = $state(0)
  const getTrackedState = () => trackedState

</script>

<div
  class="container"
  use:dummyAction={{ getTrackedState, propFromComponent: prop }}
>
  {JSON.stringify(prop)}
</div>

<button
  onclick={() => {
    trackedState += 1
  }}
>
  update tracked state
</button>