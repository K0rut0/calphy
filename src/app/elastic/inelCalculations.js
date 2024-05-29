export default class ElasticCalculator {
  calculateObjectMomentum (mass, velocity, temp, setMomentum, objNum, place) {
    let fl = String.raw`\text{To calculate the momentum of the} \\ \text{given object ${objNum}, we only need to} \\ \text{to multiply its mass by its velocity}`;
    let sl = String.raw`\text{Given the formula: } P = mv `;
    let thl = String.raw`\\ \text{Object momentum } = (${mass}kg)(${velocity}m/s)`;

    temp.push (fl);
    temp.push (sl);
    temp.push (thl);

    const mom = parseFloat ((mass * velocity).toFixed (5));

    let fol = String.raw`\\ \text{${place} momentum ${objNum}} = \fbox{${mom}kgm/s}`;
    temp.push (fol);
    setMomentum(mom)
    return mom;
  }

  calculateMassOne (m2, vf2, v2, v1, vf1, temp, setMassOne) {
    let fl = String.raw`\text{Since the last unchanged parameter was the} \\ \text{mass of object one, we need to use} \\ \text{the derived formula given below:}\\`;
    let sl = String.raw`\\ m_1 = m_2(\frac{(v_{2f}-v_2)}{v_1-v_{1f}}) \\`;
    let thl = String.raw`\\ \text{Through substitution we get: }\\`;
    let fol = String.raw`\\ m_1 = (${m2}kg)(\frac{${vf2}m/s - ${v2}m/s}{${v1}m/s - ${vf1}m/s})`;

    let numerator = parseFloat ((vf2 - v2).toFixed (5));
    let denominator = parseFloat ((v1 - vf1).toFixed (5));

    let fil = String.raw`\\ m_1 = (${m2}kg)\frac{(${numerator})}{${denominator}}`;
    let resultant = parseFloat ((numerator / denominator).toFixed (5));
    let sil = String.raw`\\ m_1 = (${m2}kg)(${resultant})`;
    let massOne = parseFloat ((m2 * resultant).toFixed (5));
    let sel = String.raw`\\ \text{Giving us the final result of: }\\ m_1 = \fbox{${massOne}kg}`;
    temp.push (fl);
    temp.push (sl);
    temp.push (thl);
    temp.push (fol);
    temp.push (fil);
    temp.push (sil);
    temp.push (sel);

    setMassOne (massOne.toString ());
    return massOne
  }
  calculateMassTwo (m1, vf2, v2, v1, vf1, temp, setMassTwo) {
    let fl = String.raw`\text{Since the last unchanged parameter was the} \\ \text{mass of object two, we need to use} \\ \text{the derived formula given below:}\\`;
    let sl = String.raw`\\ m_2 = m_1(\frac{(v_1-v_{1f})}{v_{2f}-v_2}) \\`;
    let thl = String.raw`\\ \text{Through substitution we get: }\\`;
    let fol = String.raw`\\ m_2 = (${m1}kg)(\frac{${v1}m/s - ${vf1}m/s}{${vf2}m/s - ${v2}m/s})`;

    let numerator = parseFloat ((v1 - vf1).toFixed (5));
    let denominator = parseFloat ((vf2 - v2).toFixed (5));
    let fil = String.raw`\\ m_2 = (${m1}kg)\frac{(${numerator})}{${denominator}}`;
    let resultant = parseFloat ((numerator / denominator).toFixed (5));
    let sil = String.raw`\\ m_2 = (${m1}kg)(${resultant})`;
    let massTwo = parseFloat ((m1 * resultant).toFixed (5));
    let sel = String.raw`\\ \text{Giving us the final result of: }\\ m_1 = \fbox{${massTwo}kg}`;

    temp.push (fl);
    temp.push (sl);
    temp.push (thl);
    temp.push (fol);
    temp.push (fil);
    temp.push (sil);
    temp.push (sel);

    setMassTwo (massTwo.toString ());
    return massTwo
  }

  calculateInitialVelocityOne (vf1, vf2, m2, v2, m1, temp, setInitVelocityOne) {
    let fl = String.raw`\text{Since the last unchanged parameter was the} \\ \text{initial velocity of object one, we need to use} \\ \text{the derived formula given below:}\\`;
    let sc = String.raw`v_1 = v_{1f} + \frac{m_2(v_{2f}-v_2)}{m_1}`;
    let thl = String.raw`\\ \text{Through substitution we get: }\\`;
    let fol = String.raw`\\ v_1 = ${vf1}m/s + \frac{${m2}kg(${vf2}m/s - ${v2}m/s)}{${m1}kg}`;

    let resOne = parseFloat ((vf2 - v2).toFixed (5));
    let numerator = parseFloat ((m2 * resOne).toFixed (5));
    let resultant = parseFloat ((numerator / m1).toFixed (5));
    let initVelOne = parseFloat ((vf1 + resultant).toFixed (5));
    let fil = String.raw`\\ v_1 = ${vf1}m/s + \frac{${m2}kg(${resOne}m/s)}{${m1}kg}`;
    let sil = String.raw`\\ v_1 = ${vf1}m/s + \frac{${numerator}kgm/s}{${m1}kg}`;
    let sel = String.raw`\\ v_1 = ${vf1}m/s + ${resultant}m/s`;
    let eil = String.raw`\\ \text{Giving us the final result of: }\\ v_1 = \fbox{${initVelOne}m/s}`;

    temp.push (fl);
    temp.push (sc);
    temp.push (thl);
    temp.push (fol);
    temp.push (fil);
    temp.push (sil);
    temp.push (sel);
    temp.push (eil);

    setInitVelocityOne (initVelOne.toString());
    return initVelOne
  }
  calculateInitialVelocityTwo (vf1, vf2, m2, v1, m1, temp, setInitVelocityTwo) {
    let fl = String.raw`\text{Since the last unchanged parameter was the} \\ \text{initial velocity of object two, we need to use} \\ \text{the derived formula given below:}\\`;
    let sc = String.raw`v_2 = v_{2f} + \frac{m_1(v_{1f}-v_1)}{m_2}`;
    let thl = String.raw`\\ \text{Through substitution we get: }\\`;
    let fol = String.raw`\\ v_2 = ${vf2}m/s + \frac{${m1}kg(${vf1}m/s - ${v1}m/s)}{${m2}kg}`;

    let resOne = parseFloat ((vf1 - v1).toFixed (5));
    let numerator = parseFloat ((m1 * resOne).toFixed (5));
    let resultant = parseFloat ((numerator / m2).toFixed (5));
    let initVelTwo = parseFloat ((vf2 + resultant).toFixed (5));
    let fil = String.raw`\\ v_2 = ${vf2}m/s + \frac{${m1}kg(${resOne}m/s)}{${m2}kg}`;
    let sil = String.raw`\\ v_2 = ${vf2}m/s + \frac{${numerator}kgm/s}{${m2}kg}`;
    let sel = String.raw`\\ v_2 = ${vf2}m/s + ${resultant}m/s`;
    let eil = String.raw`\\ \text{Giving us the final result of: }\\ v_1 = \fbox{${initVelTwo}m/s}`;

    temp.push (fl);
    temp.push (sc);
    temp.push (thl);
    temp.push (fol);
    temp.push (fil);
    temp.push (sil);
    temp.push (sel);
    temp.push (eil);

    setInitVelocityTwo(initVelTwo.toString());
    return initVelTwo
  }
  calculateFinalVelocityOne(v1, m2, v2, vf2, m1, temp, setVelocityOneFinal){
    let fl = String.raw`\text{Since the last unchanged parameter was the} \\ \text{Final velocity of object one, we need to use} \\ \text{the derived formula given below:}\\`;
    let sc = String.raw`v_{1f} = v_1 + \frac{m_2(v_2 - v_{2f})}{m_1}`;
    let thl = String.raw`\\ \text{Through substitution we get: }\\`;
    let fol = String.raw`\\ v_{1f} = ${v1}m/s + \frac{${m2}kg(${v2}m/s - ${vf2}m/s)}{${m1}kg}`;

    let resOne = parseFloat ((v2 - vf2).toFixed (5));
    let numerator = parseFloat ((m2 * resOne).toFixed (5));
    let resultant = parseFloat ((numerator / m1).toFixed (5));
    let finVelOne = parseFloat ((v1 + resultant).toFixed (5));
    let fil = String.raw`\\ v_{1f} = ${v1}m/s + \frac{${m2}kg(${resOne}m/s)}{${m1}kg}`;
    let sil = String.raw`\\ v_{1f} = ${v1}m/s + \frac{${numerator}kgm/s}{${m1}kg}`;
    let sel = String.raw`\\ v_{1f} = ${v1}m/s + ${resultant}m/s`;
    let eil = String.raw`\\ \text{Giving us the final result of: }\\ v_{1f} = \fbox{${finVelOne}m/s}`;

    temp.push (fl);
    temp.push (sc);
    temp.push (thl);
    temp.push (fol);
    temp.push (fil);
    temp.push (sil);
    temp.push (sel);
    temp.push (eil);
    
    setVelocityOneFinal(finVelOne)
    return finVelOne
  }
  calculateFinalVelocityTwo(v2, m1, v1, vf1, m2, temp, setVelocityTwoFinal){
        let fl = String.raw`\text{Since the last unchanged parameter was the} \\ \text{Final velocity of object two, we need to use} \\ \text{the derived formula given below:}\\`;
        let sc = String.raw`v_{2f} = v_2 + \frac{m_1(v_1 - v_{1f})}{m_2}`;
        let thl = String.raw`\\ \text{Through substitution we get: }\\`;
        let fol = String.raw`\\ v_{2f} = ${v2}m/s + \frac{${m1}kg(${v1}m/s - ${vf1}m/s)}{${m2}kg}`;
    
        let resOne = parseFloat ((v1 - vf1).toFixed (5));
        let numerator = parseFloat ((m1 * resOne).toFixed (5));
        let resultant = parseFloat ((numerator / m2).toFixed (5));
        let finVelTwo = parseFloat ((v2 + resultant).toFixed (5));
        let fil = String.raw`\\ v_{2f} = ${v2}m/s + \frac{${m1}kg(${resOne}m/s)}{${m2}kg}`;
        let sil = String.raw`\\ v_{2f} = ${v2}m/s + \frac{${numerator}kgm/s}{${m2}kg}`;
        let sel = String.raw`\\ v_{2f} = ${v2}m/s + ${resultant}m/s`;
        let eil = String.raw`\\ \text{Giving us the final result of: }\\ v_{2f} = \fbox{${finVelTwo}m/s}`;
    
        temp.push (fl);
        temp.push (sc);
        temp.push (thl);
        temp.push (fol);
        temp.push (fil);
        temp.push (sil);
        temp.push (sel);
        temp.push (eil);
        
        setVelocityTwoFinal(finVelTwo)
        return finVelTwo
  }

}
