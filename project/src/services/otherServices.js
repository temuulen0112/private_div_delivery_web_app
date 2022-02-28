const getAllFood = async () => {
    return await fetch("https://dev-api.mstars.mn/api/foods", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        // body: JSON.stringify()
    })
}

const addItem = async (food_id, quantity, userEmail) => {
    return await fetch("https://dev-api.mstars.mn/api/basket/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            food_id: food_id,
            user_email: userEmail,
            quantity: quantity,
            token: localStorage.getItem("token")
        })
    })
}
export const otherServices = {
    getAllFood
}