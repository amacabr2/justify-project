import React, {createContext} from "react";
import { useProvideAuth } from "./hooks";
import { AuthContextValue } from "./types";

type Props = {
  children: React.ReactNode,
};

const AuthContext = createContext<AuthContextValue>({
    user: null,
    logIn: () => {}
});

const AuthProvider: React.FC<Props> = ({children}: Props) => {
    const auth = useProvideAuth();
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthContext, AuthProvider};