

//DOM value
const checkbuttondom = document.querySelector('.check')
const exitbuttondom = document.querySelector('.exit')
const set_of_instructionDOM = document.querySelector('.set_of_instruction')
const progessDOM = document.querySelector("#progessvalue")
const value1DOM= document.querySelector(".value1")
const value2DOM= document.querySelector(".value2")
const answerDOM = document.querySelector('#answer')
const pointsDOM = document.querySelector('.points')
const currentquestionno = document.querySelector('.currentq_no')
const totalquestionoDOM = document.querySelectorAll('.totalq_no')
const marksDOM = document.querySelector(".marks")
const name1DOM = document.querySelector("#name")
const aDOM = document.querySelector(".value11")
const bDOM = document.querySelector(".value22")


//variable
let value1 = 0, value2 = 0, result = 0, points = 0

var totalquestion=prompt("enter no of question you need:")
var u_name=prompt("enter your name:")
name1DOM.innerHTML=u_name
totalquestionoDOM.forEach(ele => ele.innerHTML = totalquestion)


    progessDOM.max = totalquestion-1

var g=0


const RandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min

const RenderNumber = () => {
    value1 = RandomNumber(1, 10)
    value2 = RandomNumber(1, 10)
    result = value1 * value2
    value1DOM.innerHTML = value1
    value2DOM.innerHTML = value2
}

RenderNumber()

function dots()
{
    alert(`You Scored ${points}/${totalquestion} \n Lets play again`)
    window.location.replace("calculation.html")
    
}
answerDOM.onkeypress = (e) => {
    if (e.keyCode === 13) {

        if (progessDOM.value === (totalquestion - 1))
            {
                g=1
                checkbuttondom.click()
                dots()
               
                
             }
        else
            checkbuttondom.click()
    }
 }



  


//process answer
const checkanswer = () => {
    if (!isNaN(answerDOM.valueAsNumber)) {

        if (result === Number(answerDOM.value)) {
            points += 1
            pointsDOM.innerHTML = points

            marksDOM.classList.remove('wrong')

            marksDOM.classList.add('correct')
            marksDOM.innerHTML = "Correct Answer"

        }
        else {
            marksDOM.classList.remove('correct')
            marksDOM.classList.add('wrong')
            marksDOM.innerHTML = "Wrong Answer"
        }

        progessDOM.value += 1
        currentquestionno.innerHTML = progessDOM.value + 1
        answerDOM.value = ''

        


        if(g!=1)
        {
        
            RenderNumber()
        }
           
        
        return
    }
    else {
        alert("Answer Invalid")
        return
    }

}

//Buttons click event

checkbuttondom.onclick = checkanswer

exitbuttondom.onclick = () => {
   var s= prompt(`You Scored ${points}/${totalquestion} \n Want to EXIT?`)
    if(s=="yes"||s=="YES")
    {
        window.location.replace("calculation.html")
    }
    else if(s=="no"||s=="NO")
    {
        return
    }
   
}

