import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompShotgun2 from '../components/CompShotgun2';



export class Shotgun2 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompShotgun2/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Shotgun2;