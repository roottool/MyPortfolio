import * as React from 'react';
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';

import './Works.css';

class Works extends React.Component {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <main className="main">
                <h1 className="works-page__title">Works</h1>
                <Container fluid={true} className="works-page__container">
                    <Row>
                        <Col xs="12" md="4">
                            <Card className="works-page__card">
                                <CardBody>
                                    <CardTitle>Cookie☆Sound</CardTitle>
                                    <CardText>
                                        C# + Firebase<br />
                                        Firebaseからローカルにダウンロードした、音声ファイルを再生するGUIチャットアプリです。
                                        IRCチャットサーバの同じチャットルーム内のメンバーに対して、ローカルの音声ファイルを再生させることが可能です。
                                    </CardText>
                                    <div className="works-page__source-link">
                                        <a href="https://github.com/roottool/Cookiesound-kari-">ソースコード</a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" md="4">
                            <Card className="works-page__card">
                                <CardBody>
                                    <CardTitle>Cookie☆☆Sound</CardTitle>
                                    <CardText>
                                        Python<br />
                                        ローカルの音声ファイルを再生するCUIチャットアプリです。
                                        IRCチャットサーバの同じチャットルーム内のメンバーに対して、ローカルの音声ファイルを再生させることが可能です。
                                    </CardText>
                                    <div className="works-page__source-link">
                                        <a href="https://github.com/roottool/CookieSound2">ソースコード</a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" md="4">
                            <Card className="works-page__card">
                                <CardBody>
                                    <CardTitle>OrgaSound</CardTitle>
                                    <CardText>
                                        Angular 6 + Firebase<br />
                                        Firebaseから音声ファイルを取得して再生することが出来るWebチャットアプリです。
                                        チャットルーム内のメンバーに対して、Firebase上にある音声ファイルを再生させることが可能です。
                                    </CardText>
                                    <div className="works-page__source-link">
                                        <a href="https://github.com/roottool/OrgaSound">ソースコード</a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="4">
                            <Card className="works-page__card">
                                <CardBody>
                                    <CardTitle>Portfolio site</CardTitle>
                                    <CardText>
                                        React<br />
                                        このポートフォリオです。
                                        Reactの学習のために作成しました。
                                        スマートフォンからの閲覧を考慮したレスポンシブデザインになっています。
                                    </CardText>
                                    <div className="works-page__source-link">
                                        <a href="https://github.com/roottool/MyPortfolio">ソースコード</a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default Works;