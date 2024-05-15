import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompShotgun4 from '../components/CompShotgun4';



export class Shotgun4 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompShotgun4/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Shotgun4;