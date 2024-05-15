import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompMagazine1 from '../components/CompMagazine1';



export class Magazine1 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompMagazine1/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Magazine1;