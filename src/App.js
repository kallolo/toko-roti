import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import buatDonatAction from './actions/buatDonatAction';


class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <span className="logo" role="img" aria-label="bread">🍞</span>
          <h1 className="App-title">DAPUR TOKO ROTI</h1>
        </header>
        <div className="ready-wrapper">
          <span>
            <span role="img" aria-label="donut">🍩</span>
            <strong> 0 </strong> {/* tukar dengan nilai dari Redux */}
            <span> DONAT </span>
          </span>
          <span>
            <span role="img" aria-label="cake">🍰</span>
            <strong> 0 </strong> {/* tukar dengan nilai dari Redux */}
            <span> CAKE </span>
          </span>
        </div>
        <div className="item-wrapper">
          <div className="item">
            <strong>TEPUNG</strong> {this.props.bahan.tepung} {/* tukar dengan nilai dari Redux */}
          </div>
          <div className="item">
            <strong>COKLAT</strong> {this.props.bahan.coklat} {/* tukar dengan nilai dari Redux */}
          </div>
          <div className="item">
            <strong>CHERRY</strong> {this.props.bahan.cherry} {/* tukar dengan nilai dari Redux */}
          </div>
        </div>
        <div className="action-wrapper">
          <button className="btn" onClick = {this.props.buatDonat}>
            <span className="icon" role="img" aria-label="donut">🍩</span>
            <span>Buat 1 Donat Coklat</span>
          </button>
          <button className="btn">
            <span className="icon" role="img" aria-label="cake">🍰</span>
            <span>Buat 1 Cake</span>
          </button>
          <button className="btn">
            <span className="icon" role="img" aria-label="cart">🛒</span>
            <span>Isi Ulang Bahan</span>
          </button>
        </div>
      </div>
    );
  }
}

//mengubah state yang ada di redux ke props di component react
const ubahStateKeProps = (state) => {
  // console.log(state.bahan)
  return{
    bahan : state.bahan,
  }
}

//mengbah method/dispatch di redux ke props di raact
const ubahDispatchKeProps = (dispatch) => {
  return{
    buatDonat : () => dispatch(buatDonatAction),
  }
}

export default connect(ubahStateKeProps,ubahDispatchKeProps)(App); //konsep currying dalam javascript
