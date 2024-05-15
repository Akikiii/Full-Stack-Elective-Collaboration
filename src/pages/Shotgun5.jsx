import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompShotgun5 from '../components/CompShotgun5';



export class Shotgun5 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompShotgun5/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Shotgun5;