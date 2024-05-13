"use client"

import { Card } from "@/components/ui/card";
import { useState, useEffect, ChangeEvent } from "react";

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
    const [disable, setDisable] = useState(false)
    const [lastChanges, setLastChanges] = useState<string[]>([])
    function setMassValue(e : ChangeEvent<HTMLInputElement>){
        if(e.target == null){
            return;
        }
        const n = parseInt(e.target.value)
        if(isNaN(n)){
            setMass(0)
            return;
        }
        if(lastChanges.length >= 2 && !lastChanges.includes("m")){
            let temp = [...lastChanges]
            temp.shift()
            temp.push("m")
            setLastChanges(temp)
        } else if(!lastChanges.includes("m")){
            let temp = [...lastChanges]
            temp.push("m")
            setLastChanges(temp)
        }
        setMass(n)
    }
    function setAccValue(e : ChangeEvent<HTMLInputElement>){
        if(e.target == null){
            return;
        }
        const n = parseInt(e.target.value)
        if(isNaN(n)){
            setAcceleration(0)
            return;
        }
        if(lastChanges.length >= 2 && !lastChanges.includes("a")){
            let temp = [...lastChanges]
            temp.shift()
            temp.push("a")
            setLastChanges(temp)
        } else if(!lastChanges.includes("a")){
            let temp = [...lastChanges]
            temp.push("a")
            setLastChanges(temp)
        }
        setAcceleration(n)
    }
    function setForceValue(e : ChangeEvent<HTMLInputElement>){
        if(e.target == null){
            return;
        }
        const n = parseInt(e.target.value)
        if(isNaN(n)){
            setForce(0)
            return;
        }
        if(lastChanges.length >= 2 && !lastChanges.includes("f")){
            let temp = [...lastChanges]
            temp.shift()
            temp.push("f")
            setLastChanges(temp)
        } else if(!lastChanges.includes("f")){
            let temp = [...lastChanges]
            temp.push("f")
            setLastChanges(temp)
        }
        setForce(n)
    }

    
    function calculate(){
        console.log(mass)
        console.log(acceleration)
        console.log(force)
        console.log(lastChanges)
        if(!lastChanges.includes("m")){
            let n = force/acceleration
            setMass(n)
            return
        }
        if(!lastChanges.includes("a")){
            let n = force/mass
            setAcceleration(n)
            return
        }
        if(!lastChanges.includes("f")){
            let n = mass*acceleration
            setForce(n)
            return
        }
    }
    return(
        <div className="w-100 flex align-middle justify-center p-5">
            <Card className="flex w-[600px] h-[300px] border-black flex-col justify-center p-5 ">
                <div className="flex flex-col w-100 gap-2 justify-center">
                    <div className="flex flex-col">
                        <label>Mass: </label>
                        <input type="text" className="border-b-2 border-black" onChange={(e) => setMassValue(e)} value={mass}></input>
                    </div>
                    <div className="flex flex-col">
                        <label>Acceleration: </label>
                        <input type="text" className="border-b-2 border-black" onChange={(e) => setAccValue(e)} value={acceleration}></input>
                    </div>
                    <div className="flex flex-col">
                        <label>Force: </label>
                        <input type="text" className="border-b-2 border-black" disabled={disable} onChange={(e) => setForceValue(e)} value={force}></input>
                    </div>
                    <button className="border-solid rounded-sm border border-black w-[100px]" onClick={calculate}>Calculate</button>
                </div>
            </Card>
        </div>
    )
}