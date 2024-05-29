export default class Converter{
    lbToKg(pounds){
        return (pounds * 0.453592)
    }
    ftToMet(acc){
        return (acc/3.28084)
    }
    poundsToKg(m1, temp){
                let mass = this.lbToKg(m1)
                let lbText = String.raw`\text{Converting the mass of lbs into kilograms: }\\ \text{ }\\ ${m1}lbs \text{ x } \frac{1 kg}{2.20462 lbs}`
                let scLine = String.raw`\\ \text{Where mass }= \frac{${m1}kg}{2.20462}`
                let result = String.raw`\text{To which the final result will be } = ${mass}kg`
                temp.push(lbText)
                temp.push(scLine)
                temp.push(result)
                mass = parseFloat(mass.toFixed(7))
                return mass
    }
    feetToMeter(v1, temp){
                let velo = this.ftToMet(v1)
                let ftText = String.raw`\text{Converting the velocity of } ft/s \text{ into } m/s \text{: }\\ \text{ }\\ ${v1}ft/s \text{ x } \frac{1 m/s}{3.28084ft/s}`
                let scLine = String.raw`\\ \text{Where the velocity is }= \frac{${v1}m/s}{3.28084}`
                let result = String.raw`\text{To which the final result will be } = ${velo.toFixed(6)}m/s`
                temp.push(ftText)
                temp.push(scLine)
                temp.push(result)
                velo = parseFloat(velo.toFixed(7))
                return velo
    }

    kmToMeter(v1, temp){
                let velo = v1 * 1000
                let kmText = String.raw`\text{Converting the velocity of } km/s \text{ into } m/s \text{: }\\ \text{ }\\ ${v1}km/s \text{ x } \frac{1000 m/s}{1km/s}`
                let scLine = String.raw`\\ \text{Where the velocity is }= \frac{${velo}m/s}{1}`
                let result = String.raw`\text{To which the final result will be } = ${velo}m/s`
                temp.push(kmText)
                temp.push(scLine)
                temp.push(result)
                velo = parseFloat(velo.toFixed(7))
                return velo
    }

}