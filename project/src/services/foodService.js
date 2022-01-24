const getAllFood = async () => {
    return await fetch("http://52.221.191.153/api/foods", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        // body: JSON.stringify()
    })
}
export const foodService = {
    getAllFood
}