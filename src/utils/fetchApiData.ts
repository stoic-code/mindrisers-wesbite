import { API_URL } from '@/constants/domains'

/**
 *  funciton to make api call and return response directly.
 *
 * @param url : URL
 * @param configObject: object    eg:{headers,body}
 * @param nestedPath: eg detail.data    ___  when response:{detail:{data}}
 * @param defaultValue: any
 * @returns api response
 */

export async function fetchApiData({
    url,
    nestedPath,
    defaultValue,
    configObject
}: {
    url: string
    nestedPath?: string
    defaultValue?: any
    configObject?: object
}) {
    let data: any = null
    let count = 0
    const retryTimes = 3

    const fetchUrl: URL = new URL(
        `${API_URL}${url}`.toString().replace(/\/\//g, '/')
    )

    async function makeApiCall() {
        const date = new Date()
        console.log(
            count +
                ' make api call -- ' +
                fetchUrl +
                '  ' +
                date.toLocaleTimeString()
        )
        try {
            configObject = configObject || {}
            // configObject = { ...configObject, next: { revalidate: 5 * 60 } }
            const res = await fetch(fetchUrl, configObject)
            if (!res.ok) {
                throw new Error('custom error')
            }
            data = await res.json()

            if (nestedPath) {
                // eg: nestedPath = detail.data
                const keys = nestedPath.trim().split('.')
                keys.forEach((key) => {
                    data = data?.[key]
                })
            }
        } catch (err) {
            console.log('error in making api', fetchUrl, err)

            count++
            if (count < retryTimes) {
                await makeApiCall()
            }
        }
    }

    await makeApiCall()
    return data || defaultValue
}
