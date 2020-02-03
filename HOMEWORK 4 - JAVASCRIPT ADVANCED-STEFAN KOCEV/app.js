//AJAX CALL
$.ajax({
        url: `https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g6/Class06/materials/students.json`,
        success: function(data) {  
            let dataParsed = JSON.parse(data) 
            getAverageMoreThanThree(dataParsed)
            femalesAndFiveAverage(dataParsed)  
            malesFromSkAndAboveEighteen(dataParsed)
            averageFromFemalesOverTwentyFour(dataParsed)
            maleStudentsWithFirstLetterBAndAverageOverTwo(dataParsed)
        }
        ,
        error: function () {
        }
    })

// All students with an average grade higher than 3
function getAverageMoreThanThree(dataParsed){
    let getAverage = 
    dataParsed
    .filter(dataParsed => dataParsed.averageGrade >3 )
    .map(dataParsed => `${dataParsed.firstName} ${dataParsed.lastName}`)
    console.log(getAverage)
}

// All female student names with an average grade of 5
function femalesAndFiveAverage(dataParsed){
    let femalesAndFiveAverage=
    dataParsed
    .filter(dataParsed=> dataParsed.gender === `Female` && dataParsed.averageGrade === 5)
    .map(dataParsed =>`Name: ${dataParsed.firstName}`)
    console.log(femalesAndFiveAverage)
}

// All male student full names who live in Skopje and are over 18 years old
function malesFromSkAndAboveEighteen (dataParsed){
    let malesFromSkAndAboveEighteen =
    dataParsed
    .filter(dataParsed => dataParsed.gender ===`Male` && dataParsed.city === `Skopje` && dataParsed.age > 18)
    .map(dataParsed=>`Full Name: ${dataParsed.firstName} ${dataParsed.lastName}`)
    console.log(malesFromSkAndAboveEighteen)
}


// The average grades of all female students over the age of 24
function averageFromFemalesOverTwentyFour(dataParsed){
    let averageFromFemalesOverTwentyFour = 
    dataParsed
    .filter(dataParsed => dataParsed.gender ===`Female` && dataParsed.age >24)
    .map(dataParsed => `Average from ${dataParsed.firstName} ${dataParsed.lastName} is: ${dataParsed.averageGrade}`)
    console.log(averageFromFemalesOverTwentyFour)
}

// All male students with a name starting with B and average grade over 2
function maleStudentsWithFirstLetterBAndAverageOverTwo(dataParsed){
    let maleStudentsWithFirstLetterBAndAverageOverTwo=
    dataParsed
    .filter(dataParsed => dataParsed.firstName.startsWith(`B`) && dataParsed.averageGrade >2)
    .map(dataParsed =>`Name: ${dataParsed.firstName} ${dataParsed.lastName}`)
    console.log(maleStudentsWithFirstLetterBAndAverageOverTwo)
}


