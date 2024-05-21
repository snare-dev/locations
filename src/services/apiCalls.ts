export const getUser = async () => {
    await fetch(`XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error(error))
}

export const getUserProfile = async (id: string) => {
    const url = `http//:localhost:8080/api/v1/users/${id}`

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
        
    }catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const getLocationName = async (id: string) => {
    try {
        const res = await fetch(`XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/:${id}`);

        const data = await res.json();

        return data.locationName;
    
    }     catch(error) {
        console.log(error)
    }   
};

export const getPosts = async (id: string) => {
    await fetch(`XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/:${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.posts)
        })
        .catch(error => console.error(error))
}

export const searchUser = async (query: string) => {
    const url = `http//:localhost:8080/api/v1/users/${query}`;

    try {
         const res = await fetch(url);
        const data = await res.json();
        
        return data;
    }catch (error) {
        console.error('Error fetching data:', error);
    }

    
}

export const createPost = async (data: {}) => {
    const url = `http//:localhost:8080/api/v1/users/${id}/posts`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    }catch (error) {
        console.error('Error fetching data:', error);
    }
}