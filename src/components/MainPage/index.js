import React, { Component } from 'react';
import moment from 'moment';


export default class index extends Component {
    render() {
    const time = '20200102';
        const rq = moment(Number(time)).format('YYYY-MM-DD');

        return (
            <div>
                {rq}
            </div>
        )
    }
}
