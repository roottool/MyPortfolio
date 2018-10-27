import * as React from 'react';

import './Backdrop.css';

interface IProps {
    backdropClickHandler(): void,
}

class Backdrop extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    };

    public render() {
        return (
            <div className="backdrop" onClick={this.clickHandler}/>
        );
    }

    private clickHandler() {
        this.props.backdropClickHandler();
    }
}

export default Backdrop;