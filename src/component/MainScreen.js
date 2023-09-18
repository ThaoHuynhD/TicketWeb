import React, { Component } from 'react'
import ChairList from './ChairList'
import TicketCart from './TicketCart'

export default class MainScreen extends Component {
    render() {
        return (
            <div className='bg mainScreen'>
                <div className='container'>
                    <div className="row">
                        <ChairList />
                        <TicketCart />
                    </div>
                </div>
            </div>
        )
    }
}
