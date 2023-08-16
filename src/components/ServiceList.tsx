import React from "react";

import '../styles/components/serviceList.css'

function ServiceList(props: any) {
    return (
        <div onClick={props.goTo} id="service-list">
            <span>SERVIÇO: {props.service}</span>
            <span>DESCRIÇÃO: {props.description}</span>
            <span>HORÁRIOS: {props.availability}</span>
        </div>
    )
}

export default ServiceList