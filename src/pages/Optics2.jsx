import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompOptics2 from '../components/CompOptics2';



export class Optics2 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompOptics2/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Optics2;