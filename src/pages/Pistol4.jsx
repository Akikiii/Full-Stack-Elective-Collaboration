import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompPistol4 from '../components/CompPistol4';



export class Pistol4 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompPistol4/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Pistol4;