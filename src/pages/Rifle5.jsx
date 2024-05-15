import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompRifle5 from '../components/CompRifle5';



export class Rifle5 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompRifle5/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Rifle5;