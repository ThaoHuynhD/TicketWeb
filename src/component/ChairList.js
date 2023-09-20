import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChairRow from './ChairRow'

class ChairList extends Component {
    renderList() {
        return this.props.chairArr.map((itemRow, index) => {
            return <ChairRow key={index} itemRow={itemRow} />
        })
    }
    render() {
        return (
            <div className="col-7 my-auto pr-2">
                <div className='chairList'>
                    <h1 className='text-warning'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
                    <h5>Màn hình</h5>
                    <p className='screen'></p>
                    <table className='w-100'>
                        <thead>
                            <tr className='row'>
                                <th className='text-warning col'></th>
                                <th className='text-warning col'>1</th>
                                <th className='text-warning col'>2</th>
                                <th className='text-warning col'>3</th>
                                <th className='text-warning col'>4</th>
                                <th className='text-warning col'>5</th>
                                <th className='text-warning col'>6</th>
                                <th className='text-warning col'>7</th>
                                <th className='text-warning col'>8</th>
                                <th className='text-warning col'>9</th>
                                <th className='text-warning col'>10</th>
                                <th className='text-warning col'>11</th>
                                <th className='text-warning col'>12</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        chairArr: state.chairReducer.chairArr,
    };
};
export default connect(mapStateToProps)(ChairList);