type FunctionType = (...args) => void

export const debounce = (callback: FunctionType, wait = 400): FunctionType => {
    let timeout: number

    return (...args) => {
        const next = () => callback(...args)
        clearTimeout(timeout)
        timeout = setTimeout(next, wait)
    }
}

export const formatString = (str: string): string => {
    const formattedStr = str.toLowerCase().replace(/[-_]/g, " ")

    return formattedStr.split(" ").map(word => {
        return (word.charAt(0).toUpperCase() + word.slice(1))
    }).join(" ")
}
