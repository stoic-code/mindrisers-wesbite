import { STATUSCODES } from "@/constants/statusCodes";
// import notify from "./notify";
const notify = (message?: string, status?: string) =>{
}

/* this is for browser api call  */
type CallbackFunction = () => void

export default async function callApi(url: URL, data: object, method: string, cb?: CallbackFunction) {

    try {
        const response = await fetch(url, {
            method: method || "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            notify("Operation successfull")
            if (cb) {
                cb()
            }
        } else {
            notify(`${STATUSCODES[response.status.toString() as keyof typeof STATUSCODES]}, Please try again`, "error")
        }
    }
    catch (err) {
        notify("An error occured. Please try again later.", "error")
    }

}

