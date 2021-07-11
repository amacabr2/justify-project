import React from "react";
import {useAuth} from "../auth";
import {Redirect, Route} from "react-router-dom";

type Props = {
  children: React.ReactNode;
  path: string;
};

const PrivateRoute: React.FC<Props> = ({ children, path }: Props) => {
    const auth = useAuth();
    console.log({auth});
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