import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompKnives3 from '../components/CompKnives3';



export class Knives3 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompKnives3/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Knives3;