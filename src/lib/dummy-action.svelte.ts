export function dummyAction(el, { getTrackedState, propFromComponent }) {
  $effect.root(() => {
    $effect(() => {
      console.log("action $effect.root: ", { buttonClicked: getTrackedState() })
    })
  })
}
