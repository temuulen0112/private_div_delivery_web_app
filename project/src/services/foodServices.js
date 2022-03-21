const getFoodAPI = async () => {
    return await fetch ("https://dev-api.mstars.mn/api/foods", {
        method: "GET",
        headers: {
            "Content-Type": "application/json", 
        },
    })
}

const basketItem = async () => {
    return await fetch ("https://dev-api.mstars.mn/api/foods", {
        method: "POST"
    })
}

export const foodServices = {
    getFoodAPI,
}