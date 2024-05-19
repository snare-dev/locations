export const getProfile = async (id: string) => {
    await fetch(`XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/:${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error(error))
}