import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompOptics3 from '../components/CompOptics3';



export class Optics3 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompOptics3/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Optics3;