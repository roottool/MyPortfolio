import * as React from 'react';

import './Home.css';

class Home extends React.Component {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <main className="main">
              <h1 className="home-page__title">Welcome to roottool's portfolio site!</h1>
              <p>"Why do it yourself when robots do it better?"</p>
              <p>- echo -</p>
            </main>
        );
    };
}

export default Home;