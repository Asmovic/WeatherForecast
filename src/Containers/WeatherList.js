import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entry: 1,
        };
    }

    /*     trigg() {
        this.setState({ entry: 2 });
    } */

    renderCity(cityData) {
        /*         if (cityData === undefined) {
            return trigg();
        } */

        const name = cityData.city.name;
        const temps = cityData.list.map(weather => {
            return weather.main.temp;
        });

        const pressures = cityData.list.map(weather => {
            return weather.main.pressure;
        });

        const humidities = cityData.list.map(weather => {
            return weather.main.humidity;
        });

        const { lon, lat } = cityData.city.coord;
        return (
            <tr key={name}>
                <td>
                    <GoogleMap lon={lon} lat={lat} />
                </td>
                <td>
                    <Chart data={temps} color="red" units="K" />
                </td>
                <td>
                    <Chart data={pressures} color="blue" units="kPa" />
                </td>
                <td>
                    <Chart data={humidities} color="green" units="%" />
                </td>
            </tr>
        );
    }
    render() {
        const { weather } = this.props;

        /*         if (this.state.entry === 2) {
            return <h1>Opps...</h1>;
        } */

        return (
            <div style={{ overflowX: 'auto' }}>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature (K)</th>
                            <th>Pressure (kPa)</th>
                            <th>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>{weather.map(this.renderCity)}</tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps({ weather }) {
    return {
        weather,
    };
}

export default connect(mapStateToProps)(WeatherList);
