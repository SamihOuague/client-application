module.exports = {
    upload: (data) => {
        return fetch("http://localhost:3003/upload", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => {
            return res.json();
        });
    }
}