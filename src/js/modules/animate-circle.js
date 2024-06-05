export const animCircleText = () => {
    const circleText = document.querySelectorAll(".circle-discont__text p");
    circleText.forEach(text => {
        text.innerHTML = text.innerText.split("").map((letter, i) =>
            `<span style="transform:rotate(${i * 7.75}deg")>${letter}</span>`
        )
        .join("");
    } )
}
