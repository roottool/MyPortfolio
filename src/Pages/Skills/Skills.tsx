import * as React from 'react';
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';

import './Skills.css';

class Skills extends React.Component {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <main className="main">
                <h1 className="skills-page__title">Skills</h1>
                <Container fluid={true} className="skills-page__container">
                    <Row>
                        <Col xs="12" md="4">
                            <Card className="skills-page__card">
                                <CardBody>
                                    <CardTitle>HTML &amp; CSS</CardTitle>
                                    <CardText>
                                        フロントエンドの制作で使用しています。
                                        このポートフォリオやOrgaSoundではBootstrap 4を使用しています。
                                        業務ではMaterial Design Liteを使用しています。
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" md="4">
                            <Card className="skills-page__card">
                                <CardBody>
                                    <CardTitle>SASS</CardTitle>
                                    <CardText>
                                        OrgaSoundの制作で使用しました。
                                        業務で使うかはわかりませんが、使えると便利であると感じたので学習中です。
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" md="4">
                            <Card className="skills-page__card">
                                <CardBody>
                                    <CardTitle>javascript (jQuery)</CardTitle>
                                    <CardText>
                                        業務で使用しています。
                                        主にES5以前の書式でjQueryと共に使用しています。
                                        恐らく2番目に長く使用しています。
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="4">
                            <Card className="skills-page__card">
                                <CardBody>
                                    <CardTitle>Typescript</CardTitle>
                                    <CardText>
                                        OrgaSoundとこのポートフォリオの制作で使用しました。
                                        業務では一切使用していませんが、使えるとjavascriptより書きやすいので学習中です。
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" md="4">
                            <Card className="skills-page__card">
                                <CardBody>
                                    <CardTitle>Angular 6</CardTitle>
                                    <CardText>
                                        OrgaSoundの制作で使用しました。
                                        Firebaseを使用したWebアプリ解説で、Angularを使用していたので学習のために採用しました。
                                        ライブラリはAngular MaterialとAngularFireを使用しました。
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" md="4">
                            <Card className="skills-page__card">
                                <CardBody>
                                    <CardTitle>React</CardTitle>
                                    <CardText>
                                        このポートフォリオの制作で使用しました。
                                        Typescriptを使いたかったので、このポートフォリオの制作にはTypescriptを採用しました。
                                        ライブラリはrouterとreactstrapを使用しました。
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="4">
                            <Card className="skills-page__card">
                                <CardBody>
                                    <CardTitle>C#</CardTitle>
                                    <CardText>
                                        Cookie☆Soundの制作で使用しました。
                                        1番長く使用していますが、業務としては数ヶ月程度の機能追加案件のコーディングに参加した程度です。
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" md="4">
                            <Card className="skills-page__card">
                                <CardBody>
                                    <CardTitle>Python</CardTitle>
                                    <CardText>
                                        業務のバックエンドとCookie☆☆Soundの制作で使用しました。
                                        業務ではDjangoと共に使用しています。
                                        恐らく3番目に長く使用しています。
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" md="4">
                            <Card className="skills-page__card">
                                <CardBody>
                                    <CardTitle>Firebase</CardTitle>
                                    <CardText>
                                        Cookie☆Sound、OrgaSoundの制作で使用しました。
                                        使用経験のあるサービスはAuthentication、Realtime Database、Storage、Hostingです。
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="4">
                            <Card className="skills-page__card">
                                <CardBody>
                                    <CardTitle>Unity (C#)</CardTitle>
                                    <CardText>
                                        Unityで制作されたスマートフォン用アプリのメンテナンスを業務で行っていました。
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" md="4">
                            <Card className="skills-page__card">
                                <CardBody>
                                    <CardTitle>Java (Android)</CardTitle>
                                    <CardText>
                                        業務でネイティブ向けライブラリをUnityで制作されたスマートフォンアプリに組み込むため、プラグインの作成を行っていました。
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" md="4">
                            <Card className="skills-page__card">
                                <CardBody>
                                    <CardTitle>Objective-C</CardTitle>
                                    <CardText>
                                        業務でネイティブ向けライブラリをUnityで制作されたスマートフォンアプリに組み込むため、プラグインの作成を行っていました。
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default Skills;