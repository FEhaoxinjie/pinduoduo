const HOST = 'http://localhost:3000';

export default function test(url, data) {
    console.log(JSON.stringify(data));
    return fetch(HOST + url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}