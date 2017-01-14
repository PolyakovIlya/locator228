/**
 * Created by ilyapolyakov on 1/14/17.
 */

interface FishDescInfo {
    weight: number,
    date_range: Array<string>,
    info: string
}

interface FishDesc {
    name: string,
    count: number,
    info: FishDescInfo
}