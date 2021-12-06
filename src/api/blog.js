module.exports = {
    post: (data, token) => {
        return fetch("http://localhost:3002/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Barear " + token
            },
            body: JSON.stringify(data)
        }).then((res) => {
            return res.json();
        });
    }
}