"use client"

import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

export default function force(){
    const massUnits = [
        {label: "kg", value: 1},
        {label: "lbs", value: 2},
    ]
    const accelerationUnits = [
        {label: "m/s^2", value: 1},
        {label: "km/s^2", value: 2},
        {label: "ft/s^2", value: 3},
    ]

    const [toSolve, setToSolve] = useState({
        mass: 0,
        acceleration: 0,
        force: 0
    })

    const [mass, setMass] = useState(0);
    const [acceleration, setAcceleration] = useState(0)
    const [force, setForce] = useState(0)

    return(
        <div className="w-100 flex align-middle justify-center p-5">
            <Card className="flex w-[600px] h-[300px] border-black flex-col justify-center p-5 ">
                <div className="flex flex-col w-100 gap-2 justify-center">
                    <div className="flex flex-col">
                        <label>Mass: </label>
                        <input type="text" className="border-b-2 border-black" onChange={(e) => setMass(parseInt(e.target.value))} value={mass}></input>
                    </div>
                    <div className="flex flex-col">
                        <label>Acceleration: </label>
                        <input type="text" className="border-b-2 border-black" onChange={(e) => setAcceleration(parseInt(e.target.value))} value={acceleration}></input>
                    </div>
                    <div className="flex flex-col">
                        <label>Force: </label>
                        <input type="text" className="border-b-2 border-black" onChange={(e) => setForce(parseInt(e.target.value))} value={force}></input>
                    </div>
                    <button className="border-solid rounded-sm border border-black w-[100px]">Calculate</button>
                </div>
            </Card>
        </div>
    )
}