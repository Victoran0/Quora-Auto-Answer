// Medium
// const commentBoxClass = document.getElementsByClassName('zr l')[0];
// const commentBox = commentBoxClass.getElementsByTagName('div')[0];
// console.log(commentBoxClass, commentBox)


// codeWithTOmi
// const commentBox = document.querySelectorAll('[data-slate-string="true"]')[0]

// const emailBox = document.getElementById('field_0');
// const firstName = document.getElementById('field_1');
// const buttonDiv = document.getElementsByClassName('emailoctopus-form-row-subscribe')[0];
// const button = buttonDiv.getElementsByTagName('button')[0];
// console.log(emailBox, firstName)

// emailBox.value = "oooppppps@mail.com"
// firstName.value = "Mikeeee"
// button.click()



// quora

// const answer = document.getElementsByClassName('content')[0];
// console.log(answer)




const clickAnsBtn = () => {
    const answerDiv = document.getElementsByClassName("q-box puppeteer_test_question_component_base")[0]
    
    const answerBtn = answerDiv.getElementsByClassName('q-click-wrapper qu-active--textDecoration--none qu-focus--textDecoration--none qu-borderRadius--pill qu-alignItems--center qu-justifyContent--center qu-whiteSpace--nowrap qu-userSelect--none qu-display--inline-flex qu-tapHighlight--white qu-textAlign--center qu-cursor--pointer qu-hover--textDecoration--none qu-hover--bg--darken ClickWrapper___StyledClickWrapperBox-zoqi4f-0 iyYUZT base___StyledClickWrapper-lx6eke-1 fJHGyh')[0];
    
    answerBtn.click()
}


const commentFunc = () => {
    const answerBox = document.querySelector('[contenteditable="true"]')
    
    answerBox.focus()
    
    const answer = answerBox.querySelector('.content')
    
    answer.innerHTML = 'you did it'
}


const autoAns = (func, time) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(func()), time)
    })
}


//     commentFunc()
// window.addEventListener('load', (e) => {
    
    //     console.log('all content loaded')
    //     clickAnsBtn()
// })

// setTimeout( () => {clickAnsBtn()}, 1000)
// setTimeout( () => {commentFunc()}, 3000)

// autoAns(clickAnsBtn, 2000)
// .then(() => {return autoAns(commentFunc, 2000)})

// autoAns(() => console.log('welcome '), 1000)
// .then(() => {
    //     return autoAns(() => console.log('Second promise fired'), 1000)
    // })


    const ansAuto = async () => {
        await autoAns(clickAnsBtn, 1000);
        await autoAns(commentFunc, 2000)
    }



chrome.runtime.onMessage.addListener((obj, sender, response) => {
    if (obj.message) {
        // setTimeout(() => clickAnsBtn(), 1000)
        // console.log('First Answer button Clicked')
        // autoAns(clickAnsBtn, 1000)
        // .then(() => {return autoAns(commentFunc, 2000)})
        ansAuto()
    }
})