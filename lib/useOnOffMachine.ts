import { useState } from "react"

export type OnOffMachine = {
  turnOn(): void
  turnOff(): void
  isOn: boolean
  isOff: boolean
}

/**
 * A simple-atomic boolean state machine.
 * @param isMachineOnByDefault If true, set `machine.isOn=true`
 * @default isMachineOnByDefault false
 */
function useOnOffMachine(isMachineOnByDefault: boolean = false): OnOffMachine {
  const [isOn, setIsOn] = useState(isMachineOnByDefault)
  const turnOn = () => setIsOn(true)
  const turnOff = () => setIsOn(false)
  return {
    turnOn,
    turnOff,
    isOn,
    isOff: !isOn,
  }
}

export default useOnOffMachine
