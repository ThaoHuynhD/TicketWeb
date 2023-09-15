import React, { Component } from 'react'
import ChairItem from './ChairItem'
import { connect } from 'react-redux'

class ChairList extends Component {
    renderList() {
        return this.props.map.ChairList((item, index) => {
            return <ChairItem key={index} item={item} />
        })
    }
    render() {
        return (
            <div className="col-7">
                <div className='chairList'>
                    <h1 className='text-warning'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
                    <h5>Màn hình</h5>
                    <p className='screen'></p>
                    <table >
                        <thead>
                            <th className='text-warning'>1</th>
                            <th className='text-warning'>2</th>
                            <th className='text-warning'>3</th>
                            <th className='text-warning'>4</th>
                            <th className='text-warning'>5</th>
                            <th className='text-warning'>6</th>
                            <th className='text-warning'>7</th>
                            <th className='text-warning'>8</th>
                            <th className='text-warning'>9</th>
                            <th className='text-warning'>10</th>
                            <th className='text-warning'>11</th>
                            <th className='text-warning'>12</th>
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
        shoeArr: state.shoeReducer.shoeArr,
    };
};
export default connect(mapStateToProps)(ChairList);

