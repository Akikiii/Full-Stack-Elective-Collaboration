import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompPistol5 from '../components/CompPistol5';



export class Pistol5 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompPistol5/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Pistol5;