import React, { Component } from 'react';
import './App.css';
import store from './store';
import buatDonatAction from './actions/buatDonatAction';


class App extends Component {
  constructor(){
    super();
    this.state = {
      tepung  : 0,
      coklat  : 0,
      cherry  : 0,
    }
  }
  componentDidMount(){
    // load state global dari redux untuk meperbahrui state di lokal 
    const bahan = store.getState().bahan;
    this.setState({
      tepung  : bahan.tepung,
      coklat  : bahan.coklat,
      cherry  : bahan.cherry,
    }); 

    // akan dipanggil setiap perubahan state global di redux
    store.subscribe(()=>{
      console.log('Ada perubahan state');
      // console.log(store.getState().bahan);
      // memperbahrui state ketika buat donat diklik
      const bahan = store.getState().bahan;
      this.setState({
        tepung  : bahan.tepung,
        coklat  : bahan.coklat,
        cherry  : bahan.cherry,
      }); 
    }
    );
  }

  tombolBuatDonat = () => {
    // console.log('tombolBuatDonat digunakan')
    store.dispatch(buatDonatAction);//aksi
    // console.log(store.getState().bahan);
  }

  render() {
    // const state = store.getState();
    // console.log(state);
    
    // store.dispatch(buatDonatAction);//aksi
    // console.log(store.getState());
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
            <strong>TEPUNG</strong> {this.state.tepung} {/* tukar dengan nilai dari Redux */}
          </div>
          <div className="item">
            <strong>COKLAT</strong> {this.state.coklat} {/* tukar dengan nilai dari Redux */}
          </div>
          <div className="item">
            <strong>CHERRY</strong> {this.state.cherry}  {/* tukar dengan nilai dari Redux */}
          </div>
        </div>
        <div className="action-wrapper">
          <button className="btn" onClick = {this.tombolBuatDonat}>
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
