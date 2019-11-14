import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Index from './index/index';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                        <Route path="/" component={Index}/>
                    </Switch>
            </Router>
        );

    }
}
export default App;