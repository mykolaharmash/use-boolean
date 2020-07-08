const { useBoolean } = require('./')
const { renderHook, act } = require('@testing-library/react-hooks')

describe('initial value', () => {
  it('should initialize with true', () => {
    const { result } = renderHook(() => useBoolean(true)) 
    const [value] = result.current
  
    expect(value).toEqual(true)
  })

  it('should initialize with false', () => {
    const { result } = renderHook(() => useBoolean(false)) 
    const [value] = result.current
  
    expect(value).toEqual(false)
  })
})

describe('setTrue', () => {
  it('should set value to true', () => {
    const { result } = renderHook(() => useBoolean(false)) 
    const [, setTrue] = result.current

    act(() => {
      setTrue()
    })

    const [value] = result.current
  
    expect(value).toEqual(true)
  })

  it('should not flip to false when already set to true', () => {
    const { result } = renderHook(() => useBoolean(true)) 
    const [, setTrue] = result.current

    act(() => {
      setTrue()
    })

    const [value] = result.current
  
    expect(value).toEqual(true)
  })
})

describe('setFalse', () => {
  it('should set value to false', () => {
    const { result } = renderHook(() => useBoolean(true)) 
    const [,, setFalse] = result.current

    act(() => {
      setFalse()
    })

    const [value] = result.current
  
    expect(value).toEqual(false)
  })

  it('should not flip to true when already set to false', () => {
    const { result } = renderHook(() => useBoolean(false)) 
    const [,, setFalse] = result.current

    act(() => {
      setFalse()
    })

    const [value] = result.current
  
    expect(value).toEqual(false)
  })
})

describe('toggle', () => {
  it('should invert the value', () => {
    const { result } = renderHook(() => useBoolean(true)) 
    const [,,, toggle] = result.current

    act(() => {
      toggle()
    })

    const [value] = result.current
  
    expect(value).toEqual(false)
  })

  it('should invert the value multiple times', () => {
    const { result } = renderHook(() => useBoolean(true)) 
    const [,,, toggle] = result.current

    act(() => {
      toggle()
    })

    let value
    ;[value] = result.current
  
    expect(value).toEqual(false)

    act(() => {
      toggle()
    })

    ;[value] = result.current

    expect(value).toEqual(true)
  })
})

describe('setValue', () => {
  it('should set value to true', () => {
    const { result } = renderHook(() => useBoolean(false)) 
    const [,,,, setValue] = result.current

    act(() => {
      setValue(true)
    })

    const [value] = result.current
  
    expect(value).toEqual(true)
  })

  it('should set value to false', () => {
    const { result } = renderHook(() => useBoolean(true)) 
    const [,,,, setValue] = result.current

    act(() => {
      setValue(false)
    })

    const [value] = result.current
  
    expect(value).toEqual(false)
  })
})



