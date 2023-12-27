export const fetchFromApi = async (route: string, body: object) => {
    return fetch('/api' + route, {
        method: "POST",
        body: JSON.stringify(body)
    });
}