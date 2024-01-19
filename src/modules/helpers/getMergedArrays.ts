export default function GetMergedArrays(a: Record<string, any>[], b: Record<string, any>[], predicate = (a: Record<string, any>, b: Record<string, any>) => a === b) {
    const c = [...a]
    b.forEach((bItem) => (c.some((cItem) => predicate(bItem, cItem)) ? null : c.push(bItem)))
    return c
}