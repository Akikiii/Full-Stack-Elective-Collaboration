import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompKnives1 from '../components/CompKnives1';



export class Knives1 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompKnives1/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Knives1;