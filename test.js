// window.setTimeout('history.go(0);',1000)
const usaBtnEl = document.querySelector('.usa')
const candaBtnEl = document.querySelector('.canada')
const usaSide = document.querySelector('.uniteds')
const canadaSide = document.querySelector('.canads')
const eligEl = document.querySelector('.eligibility')
const btn = document.querySelectorAll('.btn')


//  SPECIAL FUNCTION
function blue () {
    btn.forEach ((btns) => {
        btns.addEventListener('click' , () => {
            if (btns.classList.contains('blue') === false){
                btns.classList.add('blue')
            }
        })
    })
}

usaBtnEl.addEventListener('click', () => {
    usaSide.classList.add('show')
    canadaSide.classList.remove('show')
    eligEl.classList.add('width')
    blue()
})
candaBtnEl.addEventListener('click', () => {
    canadaSide.classList.add('show')
    usaSide.classList.remove('show')
    eligEl.classList.add('width')
})

//  NEXT BTN SIDE
const lastBtnEl = document.querySelectorAll('.last')
const nextBtnEl = document.querySelector('.next')

lastBtnEl.forEach((last) => {
    last.addEventListener('click', () => {
        nextBtnEl.classList.add('show')
    })
})
nextBtnEl.addEventListener('click',() => {
    eligEl.classList.add('hide')
})


//  SECOND QUESTIONS SCRIPTS
const tuberEl = document.querySelector('.tuber')
const mentalEl = document.querySelector('.mental')
const convictEl = document.querySelector('.conviction')
const noBtnEl = document.querySelector('.tuberno')
const yesBtnEl = document.querySelector('.tuberyes')
const menYesBtnEl = document.querySelector('.mentalyes')
const mentalNoBtnEl = document.querySelector('.mentalno')

const yesNextEl = document.querySelectorAll('.yes')
//  SCRIPT FOR ALL YES BUTTON
yesNextEl.forEach ((yes) => {
    yes.onclick = () => {
        nextTEl.classList.remove('hide')
    }
})
//  SCRIPT FOR ALL NO BUTTON
noBtnEl.onclick = () => {
    mentalEl.classList.add('show')
    tuberEl.classList.add('heightn')
    nextTEl.classList.add('hide')
}
mentalNoBtnEl.onclick = () => {
    convictEl.classList.add('show')
    tuberEl.classList.add('heightnd')
    nextTEl.classList.add('hide')
}

nextBtnEl.addEventListener('click', () => {
    tuberEl.classList.add('show')
})

//  NEXT BUTTON FOR 3RD QUESTION
const convitBtnEl = document.querySelectorAll('.convit')
const nextTEl = document.querySelector('.nextub')
convitBtnEl.forEach ((conv) => {
    conv.onclick = () => {
        nextTEl.classList.remove('hide')
        tuberEl.classList.add('heightrd')
    }
})
nextTEl.onclick = () => {
    tuberEl.classList.remove('show')
    citizenEl.classList.add('show')
}

//  CITZENSHIP QUESTION SCRIPT{}
const optionEl = document.querySelector('#countries')
const liveEl = document.querySelector('#live')
const currentEl = document.querySelector('.current')
const livingEl = document.querySelector('.living')
const citizenEl = document.querySelector('.citizen')
const citizBtnNo = document.querySelector('.citizino')
const citizBtnYes = document.querySelector('.citizenyes')
const goBtnEl = document.querySelector('.nextcit')

optionEl.onclick = () => {
    currentEl.classList.add('show')
    citizenEl.classList.add('heightn')
}

//  NO BTN SCRIPT{}
citizBtnNo.onclick = () => {
    goBtnEl.classList.remove('hide')
}
// YES BTN SCRIPT
citizBtnYes.onclick = () => {
    goBtnEl.classList.add('hide')
    livingEl.classList.add('show')
    citizenEl.classList.add('heightnd')
}
liveEl.onclick = () => {
    goBtnEl.classList.remove('hide')
}

