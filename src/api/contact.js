module.exports = {
    addLead: (data) => {
        return fetch("http://localhost:3003/add", {
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