import React, {useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";


function Group(props) {

    return (
        <>    
            <Header token={props.token}/>
            <Footer />
        </>
    );
}

export default Group;
