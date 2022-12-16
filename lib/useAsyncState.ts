import { useState } from "react"

/**
 * React.useState utilty hook.
 * Resolves with a partial state setter, getter and the default setState hook value.
 * @param initState any
 * @returns [state, partialSetState, setState]
 */
function useAsyncState<T>(initState: T) {
  const [state, setState] = useState<T>(initState)

  const partialSetState = (newState: Partial<T>) =>
    setState((state: T) => ({ ...state, ...newState }))

  return [state, partialSetState, setState] as const
}

export default useAsyncState
