
const apiUrl = 'https://aware-slip-newt.cyclic.app/';

document.addEventListener("DOMContentLoaded", async () => {
    const allowedPaths = ["latest.html", "sports.html", "business.html"];

    if (allowedPaths.some(path => window.location.pathname.includes(path))) {
        // await fetchAllNews();
        await carrouselNews();
        await fetchAllNews();
    }if(window.location.pathname.includes("latest.html")){
        await latestNews();
        await latestSPRTS("Sports")
        await latestBSNS("Business")
        await latestEDU("Education")
    }


});

const fetchAllNews = async() =>{
    try{
        const response = await fetch(`${apiUrl}/category`);
        const  category = await response.json();
        console.log(category)
    }catch (error){
        console.error("Error", error)
    }
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function carrouselNews() {
    try {
        const response = await fetch(`${apiUrl}/category`);
        const carrousel = await response.json();

        // Shuffle the carrousel array
        const shuffledCarrousel = shuffleArray(carrousel);

        const slideNews = document.getElementById("news-carrousel");
        shuffledCarrousel.slice(0, 2).forEach((slide) => {
            const div = document.createElement("div");
            div.innerHTML = `
                <div class="carousel-item">
                    <img class="carousel-image" src="${slide.imageUrl}" alt="${slide.altText}" />
                </div>
            `;
            slideNews.appendChild(div);
        });
    } catch (error) {
        console.error("Error", error);
    }
}




async function latestNews() {
    try {
        const response = await fetch(`${apiUrl}/category`);
        const latest = await response.json();
        const shuffledLtst = shuffleArray(latest);
        // Get all elements with the class "latest-news"
        const ltstNewsElements = document.querySelectorAll(".latest-news");
        
  
        ltstNewsElements.forEach((ltstNews) => {
            shuffledLtst.slice(0, 3).forEach((late) => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <div class="gallery">
                        <img src="${late.imageUrl}" alt="${late.title}" width="600" height="400">
                        <div class="desc">${late.title}</div>
                    </div>
                `;
                ltstNews.appendChild(div);
            });
        });
    } catch (error) {
        console.error("Error", error);
    }
}

async function latestSPRTS(name) {
    try {
        const response = await fetch(`${apiUrl}/category?name=${encodeURIComponent(name)}`);
        const latest = await response.json();
        const shuffledLatest = shuffleArray([...latest]);
        const ltstNwsElements = document.querySelectorAll(".sport-latest");
        const headline = document.querySelectorAll(".sport-news");

        Array.from(ltstNwsElements).forEach((ltstNews) => {
            latest.slice(0, 3).forEach((late) => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <div class="row-content">
                        <img src="${late.imageUrl}" alt="">
                        <div class="desc">${late.title}</div>
                    </div>
                `;
                ltstNews.appendChild(div);
            });
        });

        Array.from(headline).forEach((sports) => {
            latest.slice(0, 1).forEach((late) => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <img src=${late.imageUrl} alt="">
                    <div class="sport-desc">${late.title}</div>
                `;
                sports.appendChild(div); // Fix: Change ltstNews to sports
            });
        });

    } catch (error) {
        console.error("Error", error);
    }
}

async function latestBSNS(name) {
    try {
        const response = await fetch(`${apiUrl}/category?name=${encodeURIComponent(name)}`);
        const latest = await response.json();
        const shuffledLatest = shuffleArray([...latest]);
        const ltstNwsElements = document.querySelectorAll(".business-latest");
        const headline = document.querySelectorAll(".business-news");

        Array.from(ltstNwsElements).forEach((ltstNews) => {
            latest.slice(0, 3).forEach((late) => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <div class="row-content">
                        <img src="${late.imageUrl}" alt="">
                        <div class="desc">${late.title}</div>
                    </div>
                `;
                ltstNews.appendChild(div);
            });
        });

        Array.from(headline).forEach((sports) => {
            latest.slice(0, 1).forEach((late) => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <img src=${late.imageUrl} alt="">
                    <div class="sport-desc">${late.title}</div>
                `;
                sports.appendChild(div); // Fix: Change ltstNews to sports
            });
        });

    } catch (error) {
        console.error("Error", error);
    }
}

async function latestEDU(name) {
    try {
        const response = await fetch(`${apiUrl}/category?name=${encodeURIComponent(name)}`);
        const latest = await response.json();
        const shuffledLatest = shuffleArray([...latest]);
        const ltstEDUElements = document.querySelectorAll(".edu-latest");
        const headline = document.querySelectorAll(".edu-news");

        Array.from(ltstEDUElements).forEach((ltstNews) => {
            latest.slice(0, 4).forEach((late) => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <div class="row-content">
                        <img src="${late.imageUrl}" alt="">
                        <div class="desc">${late.title}</div>
                    </div>
                `;
                ltstNews.appendChild(div);
            });
        });

        Array.from(headline).forEach((sports) => {
            latest.slice(0, 1).forEach((late) => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <img src=${late.imageUrl} alt="">
                    <div class="sport-desc">${late.title}</div>
                `;
                sports.appendChild(div); // Fix: Change ltstNews to sports
            });
        });

    } catch (error) {
        console.error("Error", error);
    }
}


