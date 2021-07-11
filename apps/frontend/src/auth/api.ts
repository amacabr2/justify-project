const getToken = () => localStorage.getItem('token');

const setToken = (token: string) => {
    localStorage.setItem('token', token);
    return token;
}

const login = async (email: string): Promise<string> =>
    fetch('/api/token', {
        method: "POST",
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({email}),
    })
        .then(response => response.json())
        .then(({token}) => {
            setToken(token);
            return token;
        });

const addTokenInHeader = (headers: Record<string, any>) => ({
    ...headers,
    Authorization: `Bearer ${getToken()}`,
});

export {
    getToken,
    setToken,
    login,
    addTokenInHeader,
}