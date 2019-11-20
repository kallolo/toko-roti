import React, { Component } from 'react';
import './App.css';
import store from './store';
import buatDonatAction from './actions/buatDonatAction';


class App extends Component {
  render() {
    const state = store.getState();
    console.log(store.getState());
    
    store.dispatch(buatDonatAction);//aksi
    console.log(store.getState());
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
            <strong>TEPUNG</strong> 100 {/* tukar dengan nilai dari Redux */}
          </div>
          <div className="item">
            <strong>COKLAT</strong> 100 {/* tukar dengan nilai dari Redux */}
          </div>
          <div className="item">
            <strong>CHERRY</strong> 50 {/* tukar dengan nilai dari Redux */}
          </div>
        </div>
        <div className="action-wrapper">
          <button className="btn">
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

export default App;
