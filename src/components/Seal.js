import React, { Component } from 'react';

class Seal extends Component {
    componentDidMount() {
        const beacon = document.createElement('script');
        beacon.type = 'text/javascript';
        beacon.src = 'https://cdn.siteblindado.com/aw.js';
        document.body.appendChild(beacon);
    }

    render() {
        return (
            <div id="armored_website">
                <param id="aw_preload" value="true" />
                <param id="aw_use_cdn" value="true" />
            </div>
        );
    }
}

export default Seal;
