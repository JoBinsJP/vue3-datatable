export const debounce = (callback: (...args) => void, wait = 400) => {
    let timeout: number

    return (...args) => {
        const next = () => callback(...args)
        clearTimeout(timeout)
        timeout = setTimeout(next, wait)
    }
}
