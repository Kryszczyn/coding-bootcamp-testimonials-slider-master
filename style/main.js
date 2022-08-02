const dataObj = [
    {
        img: './../images/image-tanya.jpg',
        quote: "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ",
        name: "Tanya Sinclair",
        job: "UX Engineer",
    },
    {
        img: './../images/image-john.jpg',
        quote: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
        name: "John Tarkpor",
        job: "Junior Front-end Developer",
    }
]

const switchLeft = document.querySelector('.switch__left'),
    switchRight = document.querySelector('.switch__right'),
    imageContainer = document.querySelector('.image__container'),
    quoteContainer = document.querySelector('.description__text'),
    authorContainer = document.querySelector('.description__name');


let currentIndex = 0;
function changeImage(index) {
    imageContainer.style.backgroundImage = `url(${dataObj[index].img})`;
    quoteContainer.innerHTML = dataObj[index].quote;
    authorContainer.innerHTML = `${dataObj[index].name} - ${dataObj[index].job}`;
}

switchRight.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > dataObj.length - 1) {
        currentIndex = 0;
    }
    changeImage(currentIndex);
})

switchLeft.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = dataObj.length - 1;
    }
    changeImage(currentIndex);
})