import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

// activate utc plugin so dayjs.unix(...).utc() works and utc is actually used
dayjs.extend(utc)

export function transformDuration(duration: number): string {
    return dayjs.unix(duration).utc().format('m:ss')
}
