import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompPistol3 from '../components/CompPistol3';



export class Pistol3 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompPistol3/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Pistol3;