import styled from "styled-components";
import React from 'react';
import loading from '../../assets/load.gif';
import './LoadingStyle.css'



function Loading() {
    return (
        <div  className="loader_container">
            <img className="loader" src={loading} alt="Loading" />
        </div>
    )
}
export default Loading;