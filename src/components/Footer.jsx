import React from "react";

const getCurrentYear = new Date().getFullYear(); 

function Footer(){
    return (
        <footer>
            <p>Copyright <span className="copyright">ⓒ</span><a href=" eyasir329.com" target="_blank"> eyasir329</a> 2023-{getCurrentYear}</p>
        </footer>
    );
}

export default Footer;
