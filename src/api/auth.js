module.exports = {
    signIn: (data) => {
        return fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => {
            return res.json();
        });
    },
    signUp: (data) => {
        return fetch("http://localhost:3001/register", {
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