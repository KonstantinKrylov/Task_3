let waterFall = require('../task_3/task_3');
let issuePoint = null;

function compare(a,b){
    for (let i = 0; i < a.length; i++){
        for (let key in a[i]){
            if (a[i][key] != b[i][key]) {
                issuePoint =`\n${key} Expected: ${a[i][key]}, Actual: ${b[i][key]}}`
                return false
            }
        }
    }
    return true
}

it("1. RED [1, 4, 1, 5], BLUE [7, 3, 12]", function(){
    let expResult = require('./testData');
    let result = waterFall.waterFall(expResult.in1_full,expResult.in1_empty);
    if(!compare(expResult.exp1,result)){
        throw new Error(`The actual result doesn't mach the expected one ${issuePoint}`);
    }
});

it("2. RED [1], BLUE [0]", function(){
    let expResult = require('./testData');
    let result = waterFall.waterFall(expResult.in2_full,expResult.in2_empty);
    if(!compare(expResult.exp2,result)){
        throw new Error(`The actual result doesn't mach the expected one ${issuePoint}`);
    }
});

it("3. RED [0], BLUE [1]", function(){
    let expResult = require('./testData');
    let result = waterFall.waterFall(expResult.in3_full,expResult.in3_empty);
    if(!compare(expResult.exp3,result)){
        throw new Error(`The actual result doesn't mach the expected one ${issuePoint}`);
    }
});

it("4. RED [], BLUE []", function(){
    let expResult = require('./testData');
    let result = waterFall.waterFall(expResult.in4_full,expResult.in4_empty);
    if(!compare(expResult.exp4,result)){
        throw new Error(`The actual result doesn't mach the expected one ${issuePoint}`);
    }
});