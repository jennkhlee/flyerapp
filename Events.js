import React from 'react';
import data from '../data/fake_data/data';

const Events = Component => class extends React.Component{

    render(){

        return(
            <Component {...this.props} items={data} />
        );
    }
}

export default Events;