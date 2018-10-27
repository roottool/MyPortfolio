import * as React from 'react';
import { Link } from "react-router-dom";

import './SideDrawer.css';

interface IProps {
    show: boolean,
    drawToggleClickHandler(): void,
}

class SideDrawer extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    };

    public render() {
        let drawerClasses = ['side-drawer'];

        if (this.props.show) {
            drawerClasses = ['side-drawer', 'open'];
        }

        return (
            <nav className={drawerClasses.join(' ')}>
                <div className="side-drawer__title-area">
                    <p className="side-drawer__title">Menu</p>
                </div>
                <ul>
                    <Link to="/MyPortfolio/about">
                        <li onClick={this.clickHandler}>About</li>
                    </Link>
                    <Link to="/MyPortfolio/works">
                        <li onClick={this.clickHandler}>Works</li>
                    </Link>
                    <Link to="/MyPortfolio/skills">
                        <li onClick={this.clickHandler}>Skills</li>
                    </Link>
                </ul>
            </nav>
        );
    }

    private clickHandler() {
        this.props.drawToggleClickHandler();
    }
}

export default SideDrawer;