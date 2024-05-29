"use client"
import InelasticCalculator from "./inelCalculations"
import Converter from "./conversions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {Select,
        SelectContent,
        SelectItem,
        SelectTrigger,
        SelectValue, } from "@/components/ui/select";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useState, useEffect, ChangeEvent } from "react";
import KaTeX from "@/components/custom/KaTeX";
import { Label } from "@/components/ui/label";
import { parse } from "path";
export default function force(){
    const massUnits = [
        {label: "kg", value: 1},
        {label: "lbs", value: 2},
    ]
    const velocityUnits = [
        {label: "m/s", value: 1},
        {label: "km/s", value: 2},
        {label: "ft/s", value: 3},
    ]

    const [toSolve, setToSolve] = useState({
        mass: 0,
        acceleration: 0,
        force: 0
    })

    const [massOne, setMassOne] = useState("0");
    const [massTwo, setMassTwo] = useState("0")
    const [velocityOne, setVelocityOne] = useState("0")
    const [velocityTwo, setVelocityTwo] = useState("0")
    const [velocityFinal, setVelocityFinal] = useState("0")
    const [momentum, setMomentum] = useState("0")
    const [disable, setDisable] = useState(false)
    const [lastChanges, setLastChanges] = useState<string[]>([])
    const [massOneUnit, setMassOneUnit] = useState("1")
    const [massTwoUnit, setMassTwoUnit] = useState("1")
    const [velOneUnit, setVelOneUnit] = useState("1")
    const [velTwoUnit, setVelTwoUnit] = useState("1")
    const [velFinUnit, setVelFinUnit] = useState("1")
    const [momAns, setMomAns] = useState(false)
    const [mOneAns, setMOneAns] = useState(false)
    const [mTwoAns, setMTwoAns] = useState(false)
    const [vOneAns, setVOneAns] = useState(false)
    const [vTwoAns, setVTwoAns] = useState(false)
    const [vFinAns, setVFinAns] = useState(false)
    const [latexText, setLatexText] = useState<string[]>([])
    function setMassOneValue(e : ChangeEvent<HTMLInputElement>){
        console.log("modified")
        if(e.target == null){
            return;
        }
        const n = parseFloat(e.target.value)
        if(isNaN(n)){
            setMassOne("0")
            return;
        }
        if(e.target.value.includes(".")  && e.target.value.length == 2){
            setMassOne(n+`.`)
            return
        }
        if(lastChanges.length >= 4 && !lastChanges.includes("m1")){
            let temp = [...lastChanges]
            temp.shift()
            temp.push("m1")
            setLastChanges(temp)
        } else if(!lastChanges.includes("m1")){
            let temp = [...lastChanges]
            temp.push("m1")
            setLastChanges(temp)
        }
        setMassOne(n.toString())
    }
    function setMassTwoValue(e : ChangeEvent<HTMLInputElement>){
        if(e.target == null){
            return;
        }
        const n = parseFloat(e.target.value)
        if(isNaN(n)){
            setMassTwo("0")
            return;
        }
        if(e.target.value.includes(".")  && e.target.value.length == 2){
            setMassTwo(n+`.`)
            return
        }
        if(lastChanges.length >= 4 && !lastChanges.includes("m2")){
            let temp = [...lastChanges]
            temp.shift()
            temp.push("m2")
            setLastChanges(temp)
        } else if(!lastChanges.includes("m2")){
            let temp = [...lastChanges]
            temp.push("m2")
            setLastChanges(temp)
        }
        setMassTwo(n.toString())
    }
    function setVelocityOneValue(e : ChangeEvent<HTMLInputElement>){
        if(e.target == null){
            return;
        }
        const n = parseFloat(e.target.value)
        if(isNaN(n)){
            setVelocityOne("0")
            return;
        }
        if(e.target.value.includes(".") && e.target.value.length == 2){
            setVelocityOne(n+`.`)
            return
        }
        if(lastChanges.length >= 4 && !lastChanges.includes("v1")){
            let temp = [...lastChanges]
            temp.shift()
            temp.push("v1")
            setLastChanges(temp)
        } else if(!lastChanges.includes("v1")){
            let temp = [...lastChanges]
            temp.push("v1")
            setLastChanges(temp)
        }
        setVelocityOne(n.toString())
    }
    function setVelocityTwoValue(e : ChangeEvent<HTMLInputElement>){
        if(e.target == null){
            return;
        }
        const n = parseFloat(e.target.value)
        if(isNaN(n)){
            setVelocityTwo("0")
            return;
        }
        if(e.target.value.includes(".") && e.target.value.length == 2){
            setVelocityTwo(n+`.`)
            return
        }
        if(lastChanges.length >= 4 && !lastChanges.includes("v2")){
            let temp = [...lastChanges]
            temp.shift()
            temp.push("v2")
            setLastChanges(temp)
        } else if(!lastChanges.includes("v2")){
            let temp = [...lastChanges]
            temp.push("v2")
            setLastChanges(temp)
        }
        setVelocityTwo(n.toString())
    }
    function setVelocityFinalValue(e : ChangeEvent<HTMLInputElement>){
        if(e.target == null){
            return;
        }
        const n = parseFloat(e.target.value)
        if(isNaN(n)){
            setVelocityFinal("0")
            return;
        }
        if(e.target.value.includes(".") && e.target.value.length == 2){
            setVelocityFinal(n+`.`)
            return
        }
        if(lastChanges.length >= 4 && !lastChanges.includes("vf")){
            let temp = [...lastChanges]
            temp.shift()
            temp.push("vf")
            setLastChanges(temp)
        } else if(!lastChanges.includes("vf")){
            let temp = [...lastChanges]
            temp.push("vf")
            setLastChanges(temp)
        }
        setVelocityFinal(n.toString())
    }
    function setMomentumValue(e : ChangeEvent<HTMLInputElement>){
        if(e.target == null){
            return;
        }
        const n = parseFloat(e.target.value)
        if(isNaN(n)){
            setMomentum("0")
            return;
        }
        if(e.target.value.includes(".") && e.target.value.length == 2){
            setMomentum(n+`.`)
            return
        }
        if(lastChanges.length >= 4 && !lastChanges.includes("m")){
            let temp = [...lastChanges]
            temp.shift()
            temp.push("m")
            setLastChanges(temp)
        } else if(!lastChanges.includes("m")){
            let temp = [...lastChanges]
            temp.push("m")
            setLastChanges(temp)
        }
        setMomentum(n.toString())
    }   
    function calculate(){

        setMomAns(false)
        setMOneAns(false)
        setMTwoAns(false)
        setVOneAns(false)
        setVTwoAns(false)
        setVFinAns(false)

        const inelCalc = new InelasticCalculator()
        const converter = new Converter()
        let m1 = parseFloat(massOne)
        let m2 = parseFloat(massTwo)
        let v1 = parseFloat(velocityOne)
        let v2 = parseFloat(velocityTwo)
        let vf = parseFloat(velocityFinal)
        let mo = parseFloat(momentum)
        console.log(lastChanges)
        let temp = []
        let kg = massOne
        let velOne = velocityOne
        if(massOneUnit != "1" || velOneUnit != "1" || massTwoUnit != "1" ||velTwoUnit != "1" || velFinUnit != "1" ){
            temp.push(String.raw`\text{First we convert the units to the proper ones, which are}\\ \text{kilograms, meters per second in order to get} \\ \text{the unit of } kgm/s\\`)
            if(massOneUnit == "2"){
                m1 = converter.poundsToKg(m1, temp)
            }
            if(massTwoUnit == "2"){
                m2 = converter.poundsToKg(m2, temp)
            }
            if(velOneUnit == "3"){
                v1 = converter.feetToMeter(v1, temp)
            }
            if(velTwoUnit == "3"){
                v2 = converter.feetToMeter(v2, temp)
            }
            if(velFinUnit == "3"){
                vf = converter.feetToMeter(vf, temp)
            }
            if(velOneUnit == "2"){
                v1 = converter.kmToMeter(v1, temp)
            }
            if(velTwoUnit == "2"){
                v2 = converter.kmToMeter(v2, temp)
            }
            if(velFinUnit == "2"){
                vf = converter.kmToMeter(vf, temp)
            }
        }
        if(!lastChanges.includes("m") && !lastChanges.includes("vf")){
            let mom = inelCalc.calculateMomentum(m1, v1, m2, v2, temp, setVelocityFinal)
            setVFinAns(true)
            setMomAns(true)
            setMomentum(mom.toString())
        }
        if(!lastChanges.includes("m1")){
            setMOneAns(true)
            inelCalc.calculateMassOne(m2, vf, v2, v1, temp, setMassOne, setMomentum)
        }
        if(!lastChanges.includes("m2")){
            setMTwoAns(true)
            inelCalc.calculateMassTwo(m1, vf, v2, v1, temp, setMassTwo, setMomentum)
        }
        if(!lastChanges.includes("v1")){
            setVOneAns(true)
            inelCalc.calculateVelocityOne(vf, m2, v2, m1, temp, setVelocityOne, setMomentum)
        }
        if(!lastChanges.includes("v2")){
            setVTwoAns(true)
            inelCalc.calculateVelocityTwo(vf, m1, v1, m2, temp, setVelocityTwo, setMomentum)
        }
        setLatexText(temp)
    }
    return(
        <div className="w-100 justify-center  p-5 flex flex-col gap-5 items-center bg-lightgreenish min-h-[95vh]">
            <Card className="flex w-auto h-auto border-black flex-col justify-center p-5 items-center gap-3">
                <CardHeader>
                    <CardTitle>
                        Inelastic Collision Calculator
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center flex-col gap-y-5">
                <div className="flex flex-col w-100 gap-2 justify-center">
                    <div className="flex flex-col">
                        <Label>Object 1 Mass: </Label>
                        <div className="flex flex-row gap-5">
                            <input type="text" className={`border-b-2 border-black ` + (mOneAns ? "bg-green-200":"bg-none")} onChange={(e) => setMassOneValue(e)} value={massOne}></input>
                            <Select onValueChange={(e: string) => setMassOneUnit(e)} defaultValue="1">
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Mass Unit" />
                                </SelectTrigger>
                                <SelectContent>
                                    {massUnits.map((x, i) => <SelectItem value={(x.value).toString()} key = {i+`m1`}>{x.label}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Label>Object 1 Velocity: </Label>
                        <div className="flex flex-row gap-5">
                            <input type="text" className={`border-b-2 border-black ` + (vOneAns ? "bg-green-200":"bg-none")} onChange={(e) => setVelocityOneValue(e)} value={velocityOne}></input>
                            <Select onValueChange={(e) => setVelOneUnit(e)} defaultValue="1">
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Velocity Unit" />
                                </SelectTrigger>
                                <SelectContent>
                                    {velocityUnits.map((x, i) => <SelectItem value={(x.value).toString()} key={i+`v1`}>{x.label}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Label>Object 2 Mass: </Label>
                        <div className="flex flex-row gap-5">
                            <input type="text" className={`border-b-2 border-black ` + (mTwoAns ? "bg-green-200":"bg-none")} onChange={(e) => setMassTwoValue(e)} value={massTwo}></input>
                            <Select onValueChange={(e: string) => setMassTwoUnit(e)} defaultValue="1">
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Mass Unit" />
                                </SelectTrigger>
                                <SelectContent>
                                    {massUnits.map((x, i) => <SelectItem value={(x.value).toString()} key = {i+`m2`}>{x.label}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Label>Object 2 Velocity:</Label>
                        <div className="flex flex-row gap-5">
                            <input type="text" className={`border-b-2 border-black ` + (vTwoAns ? "bg-green-200":"bg-none")} onChange={(e) => setVelocityTwoValue(e)} value={velocityTwo}></input>
                            <Select onValueChange={(e) => setVelTwoUnit(e)} defaultValue="1">
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Velocity Unit" />
                                </SelectTrigger>
                                <SelectContent>
                                    {velocityUnits.map((x, i) => <SelectItem value={(x.value).toString()} key={i+`v2`}>{x.label}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Label>Final Velocity:</Label>
                        <div className="flex flex-row gap-5">
                            <input type="text" className={`border-b-2 border-black ` + (vFinAns ? "bg-green-200":"bg-none")} onChange={(e) => setVelocityFinalValue(e)} value={velocityFinal}></input>
                            <Select onValueChange={(e) => setVelFinUnit(e)} defaultValue="1">
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Velocity Unit" />
                                </SelectTrigger>
                                <SelectContent>
                                    {velocityUnits.map((x, i) => <SelectItem value={(x.value).toString()} key={i+`vf`}>{x.label}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Label>Combined Momentum: </Label>
                        <div className="flex flex-row gap-5">
                            <input type="text" className={`border-b-2 border-black ` + (momAns ? "bg-green-200":"bg-none")} disabled={true} onChange={(e) => setMomentumValue(e)} value={momentum}></input>
                            <Label>kgm/s</Label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-5">
                    <button className="border-solid rounded-sm border border-black w-[100px]" onClick={()=>window.location.reload()}>Reset</button>
                    <button className="border-solid rounded-sm border border-black w-[100px]" onClick={calculate}>Calculate</button>
                </div>
                </CardContent>
                
            </Card>
            
            <Accordion type="single" collapsible className="flex max-w-[500px] w-auto border-solid border-gray-500 border-2 rounded-xl p-2">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Click here to show solution</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-5 max-w-[500px] w-auto">
                            {latexText.map((e, i) => <KaTeX texExpression={e} className="flex max-w-[500px] h-auto text-wrap" key={i+`-katextComp`}></KaTeX>)}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}