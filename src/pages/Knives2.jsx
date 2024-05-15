import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompKnives2 from '../components/CompKnives2';



export class Knives2 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompKnives2/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Knives2;