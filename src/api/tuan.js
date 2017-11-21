const HOST = 'http://localhost:3000';

export default function getTuan(url) {
    return fetch(HOST + url, {
        method: 'get',
        credentials: 'include',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then(res => res.json());
}