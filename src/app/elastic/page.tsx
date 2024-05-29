"use client"
import ElasticCalculator from "./inelCalculations"
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
export default function Elastic(){
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
    const [initVelocityOne, setInitVelocityOne] = useState("0")
    const [initVelocityTwo, setInitVelocityTwo] = useState("0")
    const [velocityOneFinal, setVelocityOneFinal] = useState("0")
    const [velocityTwoFinal, setVelocityTwoFinal] = useState("0")
    const [momentumOne, setMomentumOne] = useState("0")
    const [momentumTwo, setMomentumTwo] = useState("0")
    const [momentumOneFinal, setMomentumOneFinal] = useState("0")
    const [momentumTwoFinal, setMomentumTwoFinal] = useState("0")
    const [disable, setDisable] = useState(false)
    const [lastChanges, setLastChanges] = useState<string[]>([])
    const [massOneUnit, setMassOneUnit] = useState("1")
    const [massTwoUnit, setMassTwoUnit] = useState("1")
    const [initVelOneUnit, setInitVelOneUnit] = useState("1")
    const [initVelTwoUnit, setInitVelTwoUnit] = useState("1")
    const [velOneFinUnit, setVelOneFinUnit] = useState("1")
    const [velTwoFinUnit, setVelTwoFinUnit] = useState("1")
    const [momAns, setMomAns] = useState(false)
    const [mOneAns, setMOneAns] = useState(false)
    const [mTwoAns, setMTwoAns] = useState(false)
    const [vInitOneAns, setVInitOneAns] = useState(false)
    const [vInitTwoAns, setVInitTwoAns] = useState(false)
    const [vOneFinAns, setVOneFinAns] = useState(false)
    const [vTwoFinAns, setVTwoFinAns] = useState(false)
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
        if(lastChanges.length >= 5 && !lastChanges.includes("m1")){
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
        if(lastChanges.length >= 5 && !lastChanges.includes("m2")){
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
    function setInitVelocityOneValue(e : ChangeEvent<HTMLInputElement>){
        if(e.target == null){
            return;
        }
        const n = parseFloat(e.target.value)
        if(isNaN(n)){
            setInitVelocityOne("0")
            return;
        }
        if(e.target.value.includes(".") && e.target.value.length == 2){
            setInitVelocityOne(n+`.`)
            return
        }
        if(lastChanges.length >= 5 && !lastChanges.includes("v1")){
            let temp = [...lastChanges]
            temp.shift()
            temp.push("v1")
            setLastChanges(temp)
        } else if(!lastChanges.includes("v1")){
            let temp = [...lastChanges]
            temp.push("v1")
            setLastChanges(temp)
        }
        setInitVelocityOne(n.toString())
    }
    function setInitVelocityTwoValue(e : ChangeEvent<HTMLInputElement>){
        if(e.target == null){
            return;
        }
        const n = parseFloat(e.target.value)
        if(isNaN(n)){
            setInitVelocityTwo("0")
            return;
        }
        if(e.target.value.includes(".") && e.target.value.length == 2){
            setInitVelocityTwo(n+`.`)
            return
        }
        if(lastChanges.length >= 5 && !lastChanges.includes("v2")){
            let temp = [...lastChanges]
            temp.shift()
            temp.push("v2")
            setLastChanges(temp)
        } else if(!lastChanges.includes("v2")){
            let temp = [...lastChanges]
            temp.push("v2")
            setLastChanges(temp)
        }
        setInitVelocityTwo(n.toString())
    }
    function setVelocityFinalOneValue(e : ChangeEvent<HTMLInputElement>){
        if(e.target == null){
            return;
        }
        const n = parseFloat(e.target.value)
        if(isNaN(n)){
            setVelocityOneFinal("0")
            return;
        }
        if(e.target.value.includes(".") && e.target.value.length == 2){
            setVelocityOneFinal(n+`.`)
            return
        }
        if(lastChanges.length >= 5 && !lastChanges.includes("vf1")){
            let temp = [...lastChanges]
            temp.shift()
            temp.push("vf1")
            setLastChanges(temp)
        } else if(!lastChanges.includes("vf1")){
            let temp = [...lastChanges]
            temp.push("vf1")
            setLastChanges(temp)
        }
        setVelocityOneFinal(n.toString())
    }
    function setVelocityFinalTwoValue(e : ChangeEvent<HTMLInputElement>){
        if(e.target == null){
            return;
        }
        const n = parseFloat(e.target.value)
        if(isNaN(n)){
            setVelocityTwoFinal("0")
            return;
        }
        if(e.target.value.includes(".") && e.target.value.length == 2){
            setVelocityTwoFinal(n+`.`)
            return
        }
        if(lastChanges.length >= 5 && !lastChanges.includes("vf2")){
            let temp = [...lastChanges]
            temp.shift()
            temp.push("vf2")
            setLastChanges(temp)
        } else if(!lastChanges.includes("vf2")){
            let temp = [...lastChanges]
            temp.push("vf2")
            setLastChanges(temp)
        }
        setVelocityTwoFinal(n.toString())
    }
    function setMomentumOneValue(e : ChangeEvent<HTMLInputElement>){
        if(e.target == null){
            return;
        }
        const n = parseFloat(e.target.value)
        if(isNaN(n)){
            setMomentumOne("0")
            return;
        }
        if(e.target.value.includes(".") && e.target.value.length == 2){
            setMomentumOne(n+`.`)
            return
        }
        if(lastChanges.length >= 5 && !lastChanges.includes("m")){
            let temp = [...lastChanges]
            temp.shift()
            temp.push("m")
            setLastChanges(temp)
        } else if(!lastChanges.includes("m")){
            let temp = [...lastChanges]
            temp.push("m")
            setLastChanges(temp)
        }
        setMomentumOne(n.toString())
    }   
    function setMomentumTwoValue(e : ChangeEvent<HTMLInputElement>){
        if(e.target == null){
            return;
        }
        const n = parseFloat(e.target.value)
        if(isNaN(n)){
            setMomentumTwo("0")
            return;
        }
        if(e.target.value.includes(".") && e.target.value.length == 2){
            setMomentumTwo(n+`.`)
            return
        }
        if(lastChanges.length >= 5 && !lastChanges.includes("m")){
            let temp = [...lastChanges]
            temp.shift()
            temp.push("m")
            setLastChanges(temp)
        } else if(!lastChanges.includes("m")){
            let temp = [...lastChanges]
            temp.push("m")
            setLastChanges(temp)
        }
        setMomentumTwo(n.toString())
    }   
    function calculate(){
        if(lastChanges.length <= 4){
            alert("Need more parameters")
            return
        }
        setMomAns(false)
        setMOneAns(false)
        setMTwoAns(false)
        setVInitOneAns(false)
        setVInitTwoAns(false)
        setVOneFinAns(false)
        setVTwoFinAns(false)
        const elCalc = new ElasticCalculator()
        const converter = new Converter()
        let m1 = parseFloat(massOne)
        let m2 = parseFloat(massTwo)
        let v1 = parseFloat(initVelocityOne)
        let v2 = parseFloat(initVelocityTwo)
        let vf1 = parseFloat(velocityOneFinal)
        let vf2 = parseFloat(velocityTwoFinal)
        console.log(lastChanges)
        let temp = []
        if(massOneUnit != "1" || initVelOneUnit != "1" || massTwoUnit != "1" ||initVelTwoUnit != "1" || velOneFinUnit != "1" || velTwoFinUnit != "1"){
            temp.push(String.raw`\text{First we convert the units to the proper ones, which are}\\ \text{kilograms, meters per second in order to get} \\ \text{the unit of } kgm/s\\`)
            if(massOneUnit == "2"){
                m1 = converter.poundsToKg(m1, temp)
            }
            if(massTwoUnit == "2"){
                m2 = converter.poundsToKg(m2, temp)
            }
            if(initVelOneUnit == "3"){
                v1 = converter.feetToMeter(v1, temp)
            }
            if(initVelTwoUnit == "3"){
                v2 = converter.feetToMeter(v2, temp)
            }
            if(velOneFinUnit == "3"){
                vf1 = converter.feetToMeter(vf1, temp)
            }
            if(velTwoFinUnit == "3"){
                vf2 = converter.kmToMeter(vf2, temp)
            }
            if(initVelOneUnit == "2"){
                v1 = converter.kmToMeter(v1, temp)
            }
            if(initVelTwoUnit == "2"){
                v2 = converter.kmToMeter(v2, temp)
            }
            if(velOneFinUnit == "2"){
                vf1 = converter.kmToMeter(vf1, temp)
            }
            if(velTwoFinUnit == "2"){
                vf2 = converter.kmToMeter(vf2, temp)
            }
        }
        if(!lastChanges.includes("m1")){
            m1 = elCalc.calculateMassOne(m2, vf2, v2, v1, vf1, temp, setMassOne)
            setMOneAns(true)
        }
        if(!lastChanges.includes("m2")){
            m2 = elCalc.calculateMassTwo(m1, vf2, v2, v1, vf1, temp, setMassTwo)
            setMTwoAns(true)
        }
        if(!lastChanges.includes("v1")){
            v1 = elCalc.calculateInitialVelocityOne(vf1, vf2, m2, v2, m1, temp, setInitVelocityOne)
            setVInitOneAns(true)
        }
        if(!lastChanges.includes("v2")){
            v2 = elCalc.calculateInitialVelocityTwo(vf1, vf2, m2, v1, m1, temp, setInitVelocityTwo)
            setVInitTwoAns(true)
        }
        if(!lastChanges.includes("vf1")){
            vf1 = elCalc.calculateFinalVelocityOne(v1, m2, v2, vf2, m1, temp, setVelocityOneFinal)
            setVOneFinAns(true)
        }
        if(!lastChanges.includes("vf2")){
            vf2 = elCalc.calculateFinalVelocityTwo(v2, m1, v1, vf1, m2, temp, setVelocityTwoFinal)
            setVTwoFinAns(true)
        }
        elCalc.calculateObjectMomentum(m1, v1, temp, setMomentumOne, 1, "Initial")
        elCalc.calculateObjectMomentum(m2, v2, temp, setMomentumTwo, 2, "Initial")
        elCalc.calculateObjectMomentum(m1, vf1, temp, setMomentumOneFinal, 1, "Final")
        elCalc.calculateObjectMomentum(m2, vf2, temp, setMomentumTwoFinal, 2, "Final")
        setMomAns(true)
        setLatexText(temp)
    }
    return(
        <div className="w-100 justify-center  p-5 flex flex-col gap-5 items-center h-min-[95vh] h-auto bg-lightgreenish">
            <Card className="flex w-auto h-auto border-black flex-col justify-center p-5 items-center gap-3">
                <CardHeader>
                    <CardTitle>
                        Elastic Collision Calculator
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-y-5">
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
                        <Label>Object 1 Initial Velocity: </Label>
                        <div className="flex flex-row gap-5">
                            <input type="text" className={`border-b-2 border-black ` + (vInitOneAns ? "bg-green-200":"bg-none")} onChange={(e) => setInitVelocityOneValue(e)} value={initVelocityOne}></input>
                            <Select onValueChange={(e) => setInitVelOneUnit(e)} defaultValue="1">
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
                        <Label>Object 2 Initial Velocity:</Label>
                        <div className="flex flex-row gap-5">
                            <input type="text" className={`border-b-2 border-black ` + (vInitTwoAns ? "bg-green-200":"bg-none")} onChange={(e) => setInitVelocityTwoValue(e)} value={initVelocityTwo}></input>
                            <Select onValueChange={(e) => setInitVelTwoUnit(e)} defaultValue="1">
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
                        <Label>Final Velocity One:</Label>
                        <div className="flex flex-row gap-5">
                            <input type="text" className={`border-b-2 border-black ` + (vOneFinAns ? "bg-green-200":"bg-none")} onChange={(e) => setVelocityFinalOneValue(e)} value={velocityOneFinal}></input>
                            <Select onValueChange={(e) => setVelOneFinUnit(e)} defaultValue="1">
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Velocity Unit" />
                                </SelectTrigger>
                                <SelectContent>
                                    {velocityUnits.map((x, i) => <SelectItem value={(x.value).toString()} key={i+`v1f`}>{x.label}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Label>Final Velocity Two:</Label>
                        <div className="flex flex-row gap-5">
                            <input type="text" className={`border-b-2 border-black ` + (vTwoFinAns ? "bg-green-200":"bg-none")} onChange={(e) => setVelocityFinalTwoValue(e)} value={velocityTwoFinal}></input>
                            <Select onValueChange={(e) => setVelTwoFinUnit(e)} defaultValue="1">
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Velocity Unit" />
                                </SelectTrigger>
                                <SelectContent>
                                    {velocityUnits.map((x, i) => <SelectItem value={(x.value).toString()} key={i+`v2f`}>{x.label}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Label>Inital Momentum One: </Label>
                        <div className="flex flex-row gap-5">
                            <input type="text" className={`border-b-2 border-black ` + (momAns ? "bg-green-200":"bg-none")} disabled={true} onChange={(e) => setMomentumOneValue(e)} value={momentumOne}></input>
                            <Label>kgm/s</Label>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Label>Initial Momentum Two: </Label>
                        <div className="flex flex-row gap-5">
                            <input type="text" className={`border-b-2 border-black ` + (momAns ? "bg-green-200":"bg-none")} disabled={true} onChange={(e) => setMomentumTwoValue(e)} value={momentumTwo}></input>
                            <Label>kgm/s</Label>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Label>Final Momentum One: </Label>
                        <div className="flex flex-row gap-5">
                            <input type="text" className={`border-b-2 border-black ` + (momAns ? "bg-green-200":"bg-none")} disabled={true} onChange={(e) => setMomentumOneValue(e)} value={momentumOneFinal}></input>
                            <Label>kgm/s</Label>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Label>Final Momentum Two: </Label>
                        <div className="flex flex-row gap-5">
                            <input type="text" className={`border-b-2 border-black ` + (momAns ? "bg-green-200":"bg-none")} disabled={true} onChange={(e) => setMomentumTwoValue(e)} value={momentumTwoFinal}></input>
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