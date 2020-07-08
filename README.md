# useBoolean React Hook

Convenient helpers for handling boolean state.

## Install

```
npm i use-boolean
```

## Usage

```jsx
import React from 'react'
import { useBoolean } from 'use-boolean'

function App() {
  const [visible, show, hide, toggle] = useBoolean(false)

  return (
    <div>
      {visible ? <div>Hello, World!</div> : null}

      <button onClick={show}>Show</button>
      <button onClick={hide}>Hide</button>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}
```

## [Live Example](https://codesandbox.io/s/summer-sun-44zj2)

## API

`useBoolean()` call
```ts
useBoolean(value: boolean): UseBoolean
```

`UseBoolean` return type
```ts
type UseBoolean = [boolean, SetTrue, SetFalse, Toggle, SetValue]
```

`SetTrue`, `SetFalse`, `Toggle` and `SetValue` all wrapped with `useCallback()` so you don't need to do it yourself.


