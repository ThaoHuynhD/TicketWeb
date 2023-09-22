import React, { Component } from 'react'
import SeatList from './SeatList'
import TicketCart from './TicketCart'

export default class MainScreen extends Component {
    render() {
        return (
            <div className='bg mainScreen'>
                <div className='container'>
                    <div className="row">
                        <SeatList />
                        <TicketCart
                            // isChecked={this.props.cart.some(cartItem => cartItem.soGhe === item.soGhe)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}