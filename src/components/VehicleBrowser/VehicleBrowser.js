import React, { Component } from 'react'
import './VehicleBrowser.css'
import { Container, Row, Col, Card, CardImg, 
    CardText, CardBody, CardTitle, CardSubtitle, NavLink } from 'reactstrap'
import Numeral from 'numeral'

class VehicleBrowser extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const vehicleSelections = this.props.vehicleData.map((item) => {
            return <Col key={"vb" + item.detailKey} md={12/Math.ceil(this.props.vehicleData.length)}>
            <Card>
                <CardImg top width="100%" src={item.thumbnail} alt={item.altText} />
                <CardBody>
                    <CardTitle>Model year Model Name</CardTitle>
                    <CardSubtitle>{item.tagline}</CardSubtitle>
                    <CardText>Start at {Numeral(item.msrp).format('$0.0')}</CardText>
                    <NavLink href={"/detail/" + item.detailKey} >Details</NavLink>
                    <NavLink href="/build-and-price" >Build And Price</NavLink>
                    <NavLink href="/find-a-dealer">Dealers Near you</NavLink>
                </CardBody>
            </Card>
        </Col>
        })

        return (
            <div className="vehicleBrowser">
                <Container>
                    <Row>
                        {vehicleSelections}
                    </Row>
                </Container>
            </div>
        )
    }
}
export default VehicleBrowser