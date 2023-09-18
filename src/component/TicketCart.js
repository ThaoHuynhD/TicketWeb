import React, { Component } from 'react'
import { connect } from 'react-redux';
import { chairArr } from './data';

class TicketCart extends Component {
    renderSeatRow = (itemRow) => {
        return (
            <tbody key={itemRow.hang}>
                {itemRow.danhSachGhe.map((item) => (
                    <tr key={item.soGhe} className='w-100'>
                        <td>{item.soGhe}</td>
                        <td>{item.gia}</td>
                        <td><button className='btn btn-warning'>Cancle</button></td>
                    </tr>
                ))}
            </tbody>
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
                        {chairArr.map(this.renderSeatRow)}
                    </table>
                </div>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return { cart: state.chairReducer.cart };
};

export default connect(mapStateToProps)(TicketCart);
