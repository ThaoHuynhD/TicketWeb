import React, { Component } from 'react'
import { connect } from 'react-redux';
import { DESELECT_SEAT, PAYMENT_COMPLETE } from '../constant/constant';
import { Modal } from 'antd';

class TicketCart extends Component {
    handlePaymentDone =()=>{
        if (this.props.cart.length === 0 ){
            Modal.warning({
                title: "Thanh toán thất bại",
                content: "Vui lòng chọn ghế",
              });
              return;
        }
        this.props.handlePaymentComplete(this.props.cart);
        Modal.success({
            title: "Thanh toán thành công",
            content: "Vui lòng đến trước 30 phút khi phim bắt đầu",
          });
    }
    handleRemove = () => {
        this.props.handleRemoveSeat(this.props.cart);
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
        console.log('RENDER TICKET CART');
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
                    <button onClick={this.handlePaymentDone} className='btn btn-success m-5 '>Thanh Toán</button>
                </div>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return { cart: state.seatReducer.cart };
};
let mapDispatchToProps = (dispatch) => {
    return {
        handleRemoveSeat: (item) => {
            let action = {
                type: DESELECT_SEAT,
                payload: {
                    item,
                }
            }
            dispatch(action);
        },
        handlePaymentComplete: (item) => {
            let action = {
                type: PAYMENT_COMPLETE,
                payload: {
                    item,
                }
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketCart);