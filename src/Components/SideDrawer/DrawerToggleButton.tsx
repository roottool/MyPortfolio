import * as React from 'react';

import './DrawerToggleButton.css';

interface IProps {
    clickHandler(): void,
}

class DrawerToggleButton extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    };

    public render() {
        return (
            <button className="toggle-button" onClick={this.clickHandler}>
                <div className="toggle-button__line"/>
                <div className="toggle-button__line"/>
                <div className="toggle-button__line"/>
            </button>
        );
    }

    private clickHandler () {
        this.props.clickHandler();
    }
}

export default DrawerToggleButton;