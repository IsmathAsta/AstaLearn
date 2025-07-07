import React from "react";
import { useSelector } from "react-redux";

export default function Dummy() {
    const customers = useSelector((state)=>state.customers)
    return (
        <>
            <h3>Customer list</h3>
            <ul>{
                customers.map((customer) => <li>{customer}</li>)
            }
              
            </ul>
        </>
    )
}