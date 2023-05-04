// const answerBtn = document.createElement('h1');
// answerBtn.textContent = 'wowwwwww bro'
// const root = document.getElementById('root');
// root.appendChild(answerBtn)



const changeBackground = () => {
    const button = document.createElement("input")
button.type = "button";
button.value = "Change background to red";
button.className = "btn";

const child = document.body.firstChild;
document.body.insertBefore(button, child);

button.addEventListener("click", () => {
    console.log("button-click");
    document.body.style.backgroundColor = "red"
}); }

const clickAnsBtn = () => {
    const answerDiv = document.getElementsByClassName("q-box puppeteer_test_question_component_base")[0]

    const answerBtn = answerDiv.getElementsByClassName('q-click-wrapper qu-active--textDecoration--none qu-focus--textDecoration--none qu-borderRadius--pill qu-alignItems--center qu-justifyContent--center qu-whiteSpace--nowrap qu-userSelect--none qu-display--inline-flex qu-tapHighlight--white qu-textAlign--center qu-cursor--pointer qu-hover--textDecoration--none qu-hover--bg--darken ClickWrapper___StyledClickWrapperBox-zoqi4f-0 iyYUZT base___StyledClickWrapper-lx6eke-1 fJHGyh')[0];
    
    answerBtn.click()
}

window.addEventListener('load', (e) => {

    console.log('all content loaded')
    changeBackground()
})