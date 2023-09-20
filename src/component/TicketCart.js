import React, { Component } from 'react'
import { connect } from 'react-redux';
import { REMOVE_CART } from '../constant/constant';

class TicketCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonClicked: false,
        };
    }
    // handleRemove = () => {
    //     this.props.handleRemoveChair(this.props.cart.soGhe);
    //     this.props.setState((prevState) => ({
    //         buttonClicked: !prevState.buttonClicked,
    //     }));
    // }
    handleRemove = () => {
        this.props.handleRemoveChair(this.props.cart.soGhe);
        this.setState((prevState) => ({
            buttonClicked: !prevState.buttonClicked,
        }));
    }
    renderSeat = () => {
        let { cart } = this.props;
        console.log("this.props: ", this.props);
        return cart.map((item, index) => {
            let { soGhe, gia } = item;
            return (
                <tr key={index} className='w-100'>
                    <td>{soGhe}</td>
                    <td>{gia}</td>
                    <td>
                        <button
                            onClick={this.handleRemove}
                            className='btn btn-warning'>
                            Cancle
                        </button>
                    </td>
                </tr>
            );
        });
    };
    renderSum = () => {
        let { cart } = this.props;
        let sum = 0;
        cart.map((item) => {
            return sum += item.gia * 1;
        });
        return (
            <tr>
                <td>Tổng cộng</td>
                <td colSpan={2}>{sum}</td>
            </tr>
        );
    };
    render() {
        return (
            <div className='col-5 my-auto pl-5'>
                <div className="ticketCart">
                    <h3>DANH SÁCH GHẾ BẠN CHỌN</h3>
                    <ul>
                        <li><p className='ghe gheDuocChon'></p>Ghế đã đặt</li>
                        <li><p className='ghe gheDangChon'></p>Ghế đang chọn</li>
                        <li><p className='ghe gheChuaChon'></p>Ghế chưa đặt</li>
                    </ul>
                    <table className='w-100'>
                        <thead>
                            <tr>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderSeat()}
                            {this.renderSum()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return { cart: state.chairReducer.cart };
};
let mapDispatchToProps = (dispatch) => {
    return {
        handleRemoveChair: (soGhe) => {
            let action = {
                type: REMOVE_CART,
                payload: {
                    soGhe,
                }
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketCart);