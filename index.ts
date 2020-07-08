import {useState, useCallback} from 'react'

type SetTrue = () => void
type SetFalse = () => void
type Toggle = () => void
type SetValue = (value: boolean) => void

export type UseBoolean = [boolean, SetTrue, SetFalse, Toggle, SetValue]

export function useBoolean(initialValue: boolean): UseBoolean {
  const [value, setValue] = useState(initialValue)

  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])
  const toggle = useCallback(() => setValue(value => !value), [])

  return [value, setTrue, setFalse, toggle, setValue]
}