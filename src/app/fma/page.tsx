"use client"

import { Card } from "@/components/ui/card";
import {Select,
        SelectContent,
        SelectItem,
        SelectTrigger,
        SelectValue, } from "@/components/ui/select";
import { useState, useEffect, ChangeEvent } from "react";
import KaTeX from "@/components/custom/KaTeX";
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
    const [massUnit, setMassUnit] = useState("1")
    const [accUnit, setAccUnit] = useState("1")
    const [latexText, setLatexText] = useState<string[]>([])
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
    function lbToKg(pounds: number){
        return (pounds * 0.453)
    }
    function ftToMet(acc: number){
        return (acc/3.28084)
    }
    
    function calculate(){
        console.log(mass)
        console.log(acceleration)
        console.log(force)
        console.log(lastChanges)
        let temp = []
        let kg = mass
        let acc = acceleration
        if(massUnit != "1" || accUnit != "1"){
            temp.push(String.raw`\text{First we convert the units to the proper ones, which are kilograms, meters per second squared in order to get the unit of Newtons} \\`)
            if(massUnit == "2"){
                kg = lbToKg(mass)
                let lbText = String.raw`\text{Converting the mass of lbs into kilograms: }\\ \text{ }\\ ${mass}lbs \text{ x } \frac{1 kg}{2.20462 lbs}`
                let scLine = String.raw`\\ \text{Where mass }= \frac{${mass}kg}{2.20462}`
                let result = String.raw`\text{To which the final result will be } = ${kg}kg`
                temp.push(lbText)
                temp.push(scLine)
                temp.push(result)
            }
            if(accUnit == "3"){
                acc = ftToMet(acceleration)
                let ftText = String.raw`\text{Converting the acceleration of } ft/s^2 \text{ into } m/s^2 \text{: }\\ \text{ }\\ ${acceleration}ft/s^2 \text{ x } \frac{1 m/s^2}{3.28084ft/s^2}`
                let scLine = String.raw`\\ \text{Where the acceleration is }= \frac{${acceleration}m/s^2}{3.28084}`
                let result = String.raw`\text{To which the final result will be } = ${acc}ft/s^2`
                temp.push(ftText)
                temp.push(scLine)
                temp.push(result)
            }
            if(accUnit == "2"){
                acc = acceleration*1000
                let kmText = String.raw`\text{Converting the acceleration of } km/s^2 \text{ into } m/s^2 \text{: }\\ \text{ }\\ ${acceleration}km/s^2 \text{ x } \frac{1000 m/s^2}{1km/s^2}`
                let scLine = String.raw`\\ \text{Where the acceleration is }= \frac{${acc}m/s^2}{1}`
                let result = String.raw`\text{To which the final result will be } = ${acc}m/s^2`
                temp.push(kmText)
                temp.push(scLine)
                temp.push(result)
            }
            
        }
        if(!lastChanges.includes("m")){
            let fLine = String.raw`\text{Since the unit missing is the mass (last two modified parameters were acceleration and force), we first need to transpose the acceleration onto the left side of the equation} \\`
            let scLine = String.raw`\text{Given: }\\ F = ma \\`
            let thLine = String.raw`\\${force}kgm/s^2 \text{ or } N \text{ } = m(${acc}m/s^2)\\`
            let frLine = String.raw`\\ \frac{${force}kg}{${acc}} = m`
            
            temp.push(fLine)
            temp.push(scLine)
            temp.push(thLine)
            temp.push(frLine)
            
            let n = force/acc
            let fiLine = String.raw`\text{To which the final result is: }\\m = ${n}kg`
            temp.push(fiLine)
            setMass(n)
        }
        if(!lastChanges.includes("a")){
            let n = force/kg
            setAcceleration(n)
        
        }
        if(!lastChanges.includes("f")){
            let n = kg*acc
            setForce(n)

        }
        setLatexText(temp)
    }
    return(
        <div className="w-100 align-middle justify-center p-5 flex flex-col">
            <Card className="flex w-[600px] h-[300px] border-black flex-col justify-center p-5 ">
                <div className="flex flex-col w-100 gap-2 justify-center">
                    <div className="flex flex-col">
                        <label>Mass: </label>
                        <div className="flex flex-row gap-5">
                            <input type="text" className="border-b-2 border-black" onChange={(e) => setMassValue(e)} value={mass}></input>
                            <Select onValueChange={(e: string) => setMassUnit(e)}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Mass Unit" />
                                </SelectTrigger>
                                <SelectContent>
                                    {massUnits.map((x, i) => <SelectItem value={(x.value).toString()} key = {i+`m`}>{x.label}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label>Acceleration: </label>
                        <div className="flex flex-row gap-5">
                            <input type="text" className="border-b-2 border-black" onChange={(e) => setAccValue(e)} value={acceleration}></input>
                            <Select onValueChange={(e) => setAccUnit(e)}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder=" Acceleration Unit" />
                                </SelectTrigger>
                                <SelectContent>
                                    {accelerationUnits.map((x, i) => <SelectItem value={(x.value).toString()} key={i+`a`}>{x.label}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label>Force: </label>
                        <input type="text" className="border-b-2 border-black" disabled={disable} onChange={(e) => setForceValue(e)} value={force}></input>
                    </div>
                    <button className="border-solid rounded-sm border border-black w-[100px]" onClick={calculate}>Calculate</button>
                </div>
            </Card>
            <div className="flex flex-col gap-5 max-w-[500px]">
                {latexText.map((e, i) => <KaTeX texExpression={e} className="flex max-w-[500px] h-auto" key={i+`-katextComp`}></KaTeX>)}
            </div>
        </div>
    )
}