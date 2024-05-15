import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompPistol2 from '../components/CompPistol2';



export class Pistol2 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompPistol2/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Pistol2;