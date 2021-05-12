import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import * as Style from './kv.module.scss'
function Kv() {
    return (
        <div className={Style.wrap}>
            <div className={Style.overlay}>
                <Container className={Style.content}>
                    <Row>
                        <Col sm={12} className="mx-auto">
                            <div className={Style.siteHeading}>
                                <h1>Isowa blog</h1>
                                <span>磯和のブログです</span><br></br>
                                <span>いそわクリニックからのお知らせと医療情報をお伝えします。</span>
                            </div>
                        </Col>
                    </Row>
                </Container> 
            </div>  
        </div>
    )
}

export default Kv