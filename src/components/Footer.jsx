import React from "react";

const getCurrentYear = new Date().getFullYear(); 

function Footer(){
    return (
        <footer>
            <p>Copyright ⓒ 2023-{getCurrentYear} by <a href="eyasir329.com">eyasir329</a></p>
        </footer>
    );
}

export default Footer;