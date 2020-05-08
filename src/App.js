import React from 'react';
// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchdata} from './api'

class App extends React.Component
{
    state = {
        data : {},
    }
    async componentDidMount(){
        const fetcheddata =  await fetchdata();
        this.setState({data:fetcheddata});
    }

     render(){
         const { data } = this.state;
    
         return (
             <div className={styles.container}>
                 <Cards data = { data }/>
                 <Chart/>
                 <CountryPicker/>
             </div>
         )
     }
}


export default App;