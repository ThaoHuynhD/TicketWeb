import React, { Component } from 'react'

export default class TicketCart extends Component {
    render() {
        return (
            <div className='col-5'>
                <div className="ticketCart">
                    <h3>DANH SÁCH GHẾ BẠN CHỌN</h3>
                    <ul>
                        <li><p className='gheDuocChon'></p>Ghế đã đặt</li>
                        <li><p className='gheDangChon'></p>Ghế đang chọn</li>
                        <li><p className='gheChuaChon'></p>Ghế chưa đặt</li>
                    </ul>
                    <table>
                        <thead>
                            <tr>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Tổng tiền</td>
                                <td>110000</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}
