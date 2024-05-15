import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompShotgun3 from '../components/CompShotgun3';



export class Shotgun3 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompShotgun3/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Shotgun3;