type FunctionType = (...args) => void

export const debounce = (callback: FunctionType, wait = 400): FunctionType => {
    let timeout: number

    return (...args) => {
        const next = () => callback(...args)
        clearTimeout(timeout)
        timeout = setTimeout(next, wait)
    }
}
