import React from "react";
import {Redirect, Route} from "react-router-dom";
import {useAuth} from "../auth";

type Props = {
  children: React.ReactNode;
  path: string;
};

const PrivateRoute: React.FC<Props> = ({ children, path }: Props) => {
    const auth = useAuth();

    return (
        <Route
            path={path}
            render={({location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}

export {PrivateRoute};