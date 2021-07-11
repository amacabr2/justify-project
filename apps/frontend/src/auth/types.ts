export type User = {token: string, email: string};

export type AuthContextValue = {
    user: User | null,
    logIn: (email: string, cb: () => void) => void,
}