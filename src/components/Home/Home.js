import React, { Component } from 'react'
import './Home.css'
import SiteCarousel from '../SiteCarousel/SiteCarousel'
import VehicleBrowser from '../VehicleBrowser/VehicleBrowser'

class Home extends Component {

    render() {
        if(this.props.vehicleData) {
            return (
                <div>
                    <SiteCarousel vehicleData={this.props.vehicleData}/>
                    <VehicleBrowser vehicleData={this.props.vehicleData}/>
                </div>
            )
        } else {
            return null
        }
    }
}

export default Home;