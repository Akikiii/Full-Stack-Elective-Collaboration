import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompAmmunition1 from '../components/CompAmmunition1';



export class Ammunition1 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompAmmunition1/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Ammunition1;