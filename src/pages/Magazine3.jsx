import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompMagazine3 from '../components/CompMagazine3';



export class Magazine3 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompMagazine3/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Magazine3;