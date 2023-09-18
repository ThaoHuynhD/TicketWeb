import React, { Component } from 'react'
import { connect } from 'react-redux';
import { REMOVE_CART } from '../constant/constant';

class TicketCart extends Component {
    renderSeatRow = () => {
        let { cart } = this.props;
        let sum = 0;
        console.log("this.props: ", this.props);
        return cart.map((item, index) => {
            sum += item.gia * 1;
            return (
                <tr key={index} className='w-100'>
                    <td>{item.soGhe}</td>
                    <td>{item.gia}</td>
                    <td><button className='btn btn-warning'>Cancle</button></td>
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
            <div className='col-5 pl-5'>
                <div className="ticketCart">
                    <h3>DANH SÁCH GHẾ BẠN CHỌN</h3>
                    <ul>
                        <li><p className='gheDuocChon'></p>Ghế đã đặt</li>
                        <li><p className='gheDangChon'></p>Ghế đang chọn</li>
                        <li><p className='gheChuaChon'></p>Ghế chưa đặt</li>
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
                            {this.renderSeatRow()}
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
        handleRemove: (soGhe) => {
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
