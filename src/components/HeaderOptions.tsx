import React from "react";

import '../styles/components/headerOptions.css'

function HeaderOptions(props:any) {

    const label = props.label
    const goTo = props.goTo

    return (
        <div id="header-options">
            <button onClick={goTo}>{label}</button>
        </div>
    )
}

export default HeaderOptions