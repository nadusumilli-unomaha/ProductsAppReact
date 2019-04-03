import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";

export default () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Layout>
    );
};
