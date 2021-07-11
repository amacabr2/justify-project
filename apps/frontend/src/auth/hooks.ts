import {useContext, useState} from "react";
import {AuthContext} from "./AuthContext";
import {login} from "./api";
import {AuthContextValue, User} from "./types";

export const useAuth = () => useContext(AuthContext);

export const useProvideAuth = (): AuthContextValue => {
    const [user, setUser] = useState<User | null>(null);

    const logIn = async (email: string, cb: () => void) => {
        if (email) {
            await login(email).then((token: string) => {
                setUser({token, email});
                cb();
            });
        }
    };

    return {user, logIn};
};