export default class InelasticCalculator{
    calculateMomentum(m1, v1, m2, v2, temp, setVelocityFinal){
            let fl = String.raw`\text{Since the last two unchanged parameters were the} \\ \text{combined momentum and final velocity, we only need} \\ \text{to do direct substitution.}`
            let sl = String.raw`\text{Given the formula: } m_1v_1 + m_2v_2 = v_f(m_1+m_2) \\ \text{or} \\ \text{momentum of object 1 +} \\ \text{momentum of object 2 = Total momentum} \\`
            let thl = String.raw`\\ \text{Total momentum } = (${m1}kg)(${v1}m/s) + (${m2}kg)(${v2}m/s)`

            temp.push(fl)
            temp.push(sl)
            temp.push(thl)

            const momentOne = parseFloat((m1*v1).toFixed(5))
            const momentTwo = parseFloat((m2*v2).toFixed(5))
            const finalVel = parseFloat(((momentOne + momentTwo)/(m1+m2)).toFixed(5))
            setVelocityFinal(finalVel.toString())
            const mom = parseFloat((momentOne + momentTwo).toFixed(5))

            let fol = String.raw`\\ \text{Total momentum } = \fbox{${mom}kgm/s}`
            let fil = String.raw`\\ \text{To get the final velocity of the combined system, we } \\ \text{divide the momentum by the total mass of} \\ \text{the two objects: }\\`
            let sil = String.raw`\\ \text{Final Velocity }=\frac{${mom}kgm/s}{${m1+m2}kg} \\`
            let sel = String.raw`\\ \text{Final Velocity }=\fbox{${finalVel}m/s}`

            temp.push(fol)
            temp.push(fil)
            temp.push(sil)
            temp.push(sel)

            return mom
    }

    calculateMassOne(m2, vf, v2, v1, temp, setMassOne, setMomentum){
            let fl = String.raw`\text{Since the last unchanged parameter was the} \\ \text{mass of object one, we need to use} \\ \text{the derived formula given below:}\\`
            let sl = String.raw`\\ m_1 = \frac{m_2(v_f-v_2)}{v_1-v_f} \\`
            let thl = String.raw`\\ \text{Through substitution we get: }\\`
            let fol = String.raw`\\ m_1 = \frac{${m2}kg(${vf}m/s - ${v2}m/s)}{${v1}m/s - ${vf}m/s}`
            let fil = String.raw`\\ m_1 = \frac{${m2}kg(${parseFloat((vf - v2).toFixed(5))}m/s)}{${parseFloat((v1 - vf).toFixed(5))}m/s}`

            temp.push(fl)
            temp.push(sl)
            temp.push(thl)
            temp.push(fol)
            temp.push(fil)

            const numerator = m2 * (vf - v2)
            const denominator = v1 - vf
            console.log(numerator + " / " + denominator)
            const mOne = parseFloat((numerator / denominator).toFixed(5))
            const momentOne = mOne*v1
            const momentTwo = m2*v2
            const mom = momentOne + momentTwo

            let sil = String.raw`\\m_1 = \frac{${parseFloat(numerator.toFixed(5))}kg}{${parseFloat(denominator.toFixed(5))}}`
            let sel = String.raw`\\ \text{To which the final result is: } \\ m_1 = \fbox{${mOne}kg}`
            let eil = String.raw`\\ \text{And through direct substitution again: }`
            let nil = String.raw`\\ \text{Total Momentum} = ${mOne}kg(${v1}m/s) + ${m2}kg(${v2}m/s)`
            let tel = String.raw`\\ \text{Total Momentum} = ${parseFloat(momentOne.toFixed(5))}kgm/s + ${parseFloat(momentTwo.toFixed(5))}kgm/s`
            let ell = String.raw`\\ \text{Total Momentum} = \fbox{${parseFloat(mom.toFixed(5))}kgm/s}`

            temp.push(sil)
            temp.push(sel)
            temp.push(eil)
            temp.push(nil)
            temp.push(tel)
            temp.push(ell)
            setMassOne(mOne.toFixed(5).toString())
            setMomentum(mom.toString())
    }
    calculateMassTwo(m1, vf, v2, v1, temp, setMassTwo, setMomentum){
            let fl = String.raw`\text{Since the last unchanged parameter was the} \\ \text{mass of object two, we need to use} \\ \text{the derived formula given below:}\\`
            let sl = String.raw`\\ m_2 = \frac{m_1(v_f-v_1)}{v_2-v_f} \\`
            let thl = String.raw`\\ \text{Through substitution we get: }\\`
            let fol = String.raw`\\ m_2 = \frac{${m1}kg(${vf}m/s - ${v1}m/s)}{${v2}m/s - ${vf}m/s}`
            let fil = String.raw`\\ m_2 = \frac{${m1}kg(${parseFloat((vf - v1).toFixed(5))}m/s)}{${parseFloat((v2 - vf).toFixed(5))}m/s}`

            temp.push(fl)
            temp.push(sl)
            temp.push(thl)
            temp.push(fol)
            temp.push(fil)

            const numerator = m1 * (vf - v1)
            const denominator = v2 - vf
            const mTwo = parseFloat((numerator / denominator).toFixed(5))
            const momentOne = m1*v1
            const momentTwo = mTwo * v2
            const mom = momentOne + momentTwo

            let sil = String.raw`\\m_2 = \frac{${parseFloat(numerator.toFixed(5))}kg}{${parseFloat(denominator.toFixed(5))}}`
            let sel = String.raw`\\ \text{To which the final result is: } \\ m_1 = \fbox{${mTwo}kg}`
            let eil = String.raw`\\ \text{And through direct substitution again: }`
            let nil = String.raw`\\ \text{Total Momentum} = ${m1}kg(${v1}m/s) + ${mTwo}kg(${v2}m/s)`
            let tel = String.raw`\\ \text{Total Momentum} = ${parseFloat(momentOne.toFixed(5))}kgm/s + ${parseFloat(momentTwo.toFixed(5))}kgm/s`
            let ell = String.raw`\\ \text{Total Momentum} = \fbox{${parseFloat(mom.toFixed(5))}kgm/s}`

            temp.push(sil)
            temp.push(sel)
            temp.push(eil)
            temp.push(nil)
            temp.push(tel)
            temp.push(ell)
            setMassTwo(mTwo.toString())
            setMomentum(mom.toString())
    }
    calculateVelocityOne(vf, m2, v2, m1, temp, setVelocityOne, setMomentum){
            let fl = String.raw`\text{Since the last unchanged parameter was the} \\ \text{velocity of object one, we need to use} \\ \text{the derived formula given below:}\\`
            let sc = String.raw`v_1 = v_f + \frac{m_2(v_f-v_2)}{m_1}`
            let thl = String.raw`\\ \text{Through substitution we get: }\\`
            let fol = String.raw`\\ v_1 = ${vf}m/s + \frac{${m2}kg(${vf}m/s - ${v2}m/s)}{${m1}kg}`
            let fil = String.raw`\\ v_1 = ${vf}m/s + \frac{(${m2}kg)(${parseFloat((vf-v2).toFixed(5))}m/s)}{${m1}kg}`

            const numerator =  parseFloat((m2 * (vf - v2)).toFixed(5))
            const next = parseFloat((numerator/m1).toFixed(5))
            const velOne = parseFloat((next + vf).toFixed(5))
            const momentOne = parseFloat((m1*velOne).toFixed(5))
            const momentTwo = parseFloat((m2 * v2).toFixed(5))
            const mom = parseFloat((momentOne + momentTwo).toFixed(5))

            let sil = String.raw`v_1 =  ${vf}m/s + \frac{${numerator}kgm/s}{${m1}kg}`
            let sel = String.raw`v_1 =  ${vf}m/s + ${next}m/s`
            let eil = String.raw`\text{To which the final result is:}\\v_1 = \fbox{${velOne}m/s}`
            let nil = String.raw`\\ \text{And through direct substitution again: }`
            let tel = String.raw`\\ \text{Total Momentum} = ${m1}kg(${velOne}m/s) + ${m2}kg(${v2}m/s)`
            let ell = String.raw`\\ \text{Total Momentum} = ${parseFloat(momentOne.toFixed(5))}kgm/s + ${parseFloat(momentTwo.toFixed(5))}kgm/s`
            let twl = String.raw`\\ \text{Total Momentum} = \fbox{${parseFloat(mom.toFixed(5))}kgm/s}`

            temp.push(fl)
            temp.push(sc)
            temp.push(thl)
            temp.push(fol)
            temp.push(fil)
            temp.push(sil)
            temp.push(sel)
            temp.push(eil)
            temp.push(nil)
            temp.push(tel)
            temp.push(ell)
            temp.push(twl)

            setVelocityOne(velOne.toString())
            setMomentum(mom.toString())
    }
    calculateVelocityTwo(vf, m1, v1, m2, temp, setVelocityTwo, setMomentum){
            let fl = String.raw`\text{Since the last unchanged parameter was the} \\ \text{velocity of object one, we need to use} \\ \text{the derived formula given below:}\\`
            let sc = String.raw`v_2 = v_f + \frac{m_1(v_f-v_1)}{m_2}`
            let thl = String.raw`\\ \text{Through substitution we get: }\\`
            let fol = String.raw`\\ v_2 = ${vf}m/s + \frac{${m1}kg(${vf}m/s - ${v1}m/s)}{${m2}kg}`
            let fil = String.raw`\\ v_2 = ${vf}m/s + \frac{(${m1}kg)(${parseFloat((vf-v1).toFixed(5))}m/s)}{${m2}kg}`

            const numerator =  parseFloat((m1 * (vf - v1)).toFixed(5))
            const next = parseFloat((numerator/m2).toFixed(5))
            const velTwo = parseFloat((next + vf).toFixed(5))
            const momentOne = parseFloat((m1*v1).toFixed(5))
            const momentTwo = parseFloat((m2 * velTwo).toFixed(5))
            const mom = parseFloat((momentOne + momentTwo).toFixed(5))

            let sil = String.raw`v_2 =  ${vf}m/s + \frac{${numerator}kgm/s}{${m2}kg}`
            let sel = String.raw`v_2 =  ${vf}m/s + ${next}m/s`
            let eil = String.raw`\text{To which the final result is:}\\v_2 = \fbox{${velTwo}m/s}`
            let nil = String.raw`\\ \text{And through direct substitution again: }`
            let tel = String.raw`\\ \text{Total Momentum} = ${m1}kg(${v1}m/s) + ${m2}kg(${velTwo}m/s)`
            let ell = String.raw`\\ \text{Total Momentum} = ${parseFloat(momentOne.toFixed(5))}kgm/s + ${parseFloat(momentTwo.toFixed(5))}kgm/s`
            let twl = String.raw`\\ \text{Total Momentum} = \fbox{${parseFloat(mom.toFixed(5))}kgm/s}`

            temp.push(fl)
            temp.push(sc)
            temp.push(thl)
            temp.push(fol)
            temp.push(fil)
            temp.push(sil)
            temp.push(sel)
            temp.push(eil)
            temp.push(nil)
            temp.push(tel)
            temp.push(ell)
            temp.push(twl)

            setVelocityTwo(velTwo.toString())
            setMomentum(mom.toString())
    }
}