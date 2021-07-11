import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {AuthForm, JustifyForm} from "./features";
import {AuthProvider} from "./auth";
import {PrivateRoute} from "./components";

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <Container fluid className="p-3">
                    <Row className="justify-content-md-center">
                        <Col lg="8">
                            <Switch>
                                <Route exact path="/">
                                    <AuthForm />
                                </Route>
                                <PrivateRoute path="/justify">
                                    <JustifyForm />
                                </PrivateRoute>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </AuthProvider>
  );
}

export default App;
