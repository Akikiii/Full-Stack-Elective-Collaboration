import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompOptics1 from '../components/CompOptics1';



export class Optics1 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompOptics1/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Optics1;