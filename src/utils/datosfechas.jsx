
export const getYear = (date = "") => {
    return parseInt(date.split("-")[0])
}

export const getMonth = (date = "") => {
    return parseInt(date.split("-")[1])
}

export const getDay = (date = "") => {
    if (date.includes("T")) {
        date = date.split("T")[0]
    }
    return parseInt(date.split("-")[2])
}

export const getHora = (date = "") => {
    if (date.includes("T")) {
        date = date.split("T")[1]
        date = date = date.split("T")[1]
    }
    return date.slice(0, date.length - 1)
}

export const genMonths = (months = []) => {
    const listMonths = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
    
    return months.map( month => listMonths[month-1]);
}