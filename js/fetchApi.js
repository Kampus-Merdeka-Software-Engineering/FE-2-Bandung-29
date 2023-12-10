
const apiUrl = 'https://be-2-bandung-29-production.up.railway.app';

document.addEventListener("DOMContentLoaded", async () => {
    const allowedPaths = ["sports.html", "business.html"];
    const Firstpath = ["latest.html", "index.html"]

    if (allowedPaths.some(path => window.location.pathname.includes(path))) {
        // await fetchAllNews();
        await carrouselNews();
        // await fetchAllNews();
    }if(Firstpath.some(path => window.location.pathname.includes(path))){
        await latestNews();
        await latestSPRTS();
        await latestBSNS();
        await latestEDU();
        await carrouselNews();
    }if(window.location.pathname.includes("business.html")){
        await businessNews();
    }if(window.location.pathname.includes("sports.html")){
        await sportNews();
    }if(window.location.pathname.includes("culture.html")){
        await cultureNews();
    }if(window.location.pathname.includes("education.html")){
        await eduNews();
    }




});

// const fetchAllNews = async() =>{
//     try{
//         const response = await fetch(`${apiUrl}/category`);
//         const  category = await response.json();
//         console.log(category)
//     }catch (error){
//         console.error("Error", error)
//     }
// }

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
        shuffledCarrousel.slice(0, 3).forEach((slide) => {
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

async function latestSPRTS() {
    try {
        const response = await fetch(`${apiUrl}/category`);
        const latest = await response.json();
        const SPRTSItems = latest.filter(category => category.name === "Sports");
        const shuffledLatest = shuffleArray([...SPRTSItems]);
        const shuffledLatestHeadline = shuffleArray([...SPRTSItems]);
        const ltstNwsElements = document.querySelectorAll(".sport-latest");
        const headline = document.querySelectorAll(".sport-news");

        Array.from(ltstNwsElements).forEach((ltstNews) => {
            shuffledLatest.slice(0, 3).forEach((late) => {
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
            shuffledLatestHeadline.slice(0, 1).forEach((late) => {
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

async function latestBSNS() {
    try {
        const response = await fetch(`${apiUrl}/category`);
        const latest = await response.json();
        const busItems = latest.filter(category => category.name === "Business");
        const shuffledLatest = shuffleArray([...busItems]);
        const shuffledLatestHeadline = shuffleArray([...busItems]);
        const ltstNwsElements = document.querySelectorAll(".business-latest");
        const headline = document.querySelectorAll(".business-news");

        Array.from(ltstNwsElements).forEach((ltstNews) => {
            shuffledLatest.slice(0, 3).forEach((late) => {
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

        Array.from(headline).forEach((business) => {
            shuffledLatestHeadline.slice(0, 1).forEach((late) => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <img src=${late.imageUrl} alt="">
                    <div class="sport-desc">${late.title}</div>
                `;
                business.appendChild(div); // Fix: Change ltstNews to sports
            });
        });

    } catch (error) {
        console.error("Error", error);
    }
}

async function latestEDU() {
    try {
        const response = await fetch(`${apiUrl}/category`);
        const latest = await response.json();
        const eduItems = latest.filter(category => category.name === "Education");
        const shuffledEdulatest = shuffleArray([...eduItems]);
        const shuffledEduHeadline = shuffleArray([...eduItems]);
        const ltstEDUElements = document.querySelectorAll(".edu-latest");
        const headline = document.querySelectorAll(".edu-news");

        Array.from(ltstEDUElements).forEach((ltstEDU) => {
            shuffledEdulatest.slice(0, 4).forEach((late) => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <div class="row-content">
                        <img src="${late.imageUrl}" alt="">
                        <div class="desc">${late.title}</div>
                    </div>
                `;
                ltstEDU.appendChild(div);
            });
        });

        Array.from(headline).forEach((edu) => {
            shuffledEduHeadline.slice(0, 1).forEach((late) => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <img src=${late.imageUrl} alt="">
                    <div class="sport-desc">${late.title}</div>
                `;
                edu.appendChild(div); // Fix: Change ltstNews to sports
            });
        });

    } catch (error) {
        console.error("Error", error);
    }
}

async function businessNews() {
    try {
        const response = await fetch(`${apiUrl}/category`);
        const allCategories = await response.json();

        // Filter items where category.name equals "business"
        const businessItems = allCategories.filter(category => category.name === "Business");

        // Shuffle the filtered items
        const shuffledBusinessItems = shuffleArray([...businessItems]);

        const bsnsElements = document.querySelectorAll(".business-news");

        Array.from(bsnsElements).forEach((bsnsNews) => {
            shuffledBusinessItems.slice(0, 3).forEach((bsns) => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <div class="gallery">
                        <img src=${bsns.imageUrl} alt="" width="600" height="400">
                        <div class="desc">${bsns.title}</div>
                    </div>
                `;
                bsnsNews.appendChild(div);
            });
        });
    } catch (error) {
        console.error("Error", error);
    }
}

async function sportNews() {
    try {
        const response = await fetch(`${apiUrl}/category`);
        const allCategories = await response.json();

        // Filter items where category.name equals "business"
        const sportsItems = allCategories.filter(category => category.name === "Sports");

        // Shuffle the filtered items
        const shuffledSportItems = shuffleArray([...sportsItems]);

        const sprtsElements = document.querySelectorAll(".sport-news");

        Array.from(sprtsElements).forEach((sprtsNews) => {
            shuffledSportItems.slice(0, 3).forEach((sprts) => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <div class="gallery">
                        <img src=${sprts.imageUrl} alt="" width="262.82" height="226">
                        <div class="desc">${sprts.title}</div>
                    </div>
                `;
                sprtsNews.appendChild(div);
            });
        });
    } catch (error) {
        console.error("Error", error);
    }
}

async function cultureNews(){
    try{
    const response = await fetch(`${apiUrl}/category`);
    const allCategories = await response.json();

    // Filter items where category.name equals "business"
    const cultureItems = allCategories.filter(category => category.name === "Culture");

    // Shuffle the filtered items
    const shuffledCultureItems = shuffleArray([...cultureItems]);
    const shuffledCultureGrid = shuffleArray([...cultureItems]);
    const shuffledCultureHighlights = shuffleArray([...cultureItems]);

    const cltrElements = document.querySelectorAll(".culture-news");
    const cltrGrid = document.querySelectorAll(".culture-grid");
    const cltrHighlights = document.querySelectorAll(".culture-highligh");

    Array.from(cltrElements).forEach((cltrNews) => {
        shuffledCultureItems.slice(0, 4).forEach((cltr) => {
            const div = document.createElement("div");
            div.innerHTML = `
                <div class="gallery">
                    <img src=${cltr.imageUrl} alt="" width="262.82" height="226">
                    <div class="desc">${cltr.title}</div>
                </div>
            `;
            cltrNews.appendChild(div);
        });
    });

    Array.from(cltrGrid).forEach((cltrNews) => {
        shuffledCultureGrid.slice(0, 4).forEach((cltr) => {
            const div = document.createElement("div");
            div.innerHTML = `
                <div class="row-content">
                    <img src="${cltr.imageUrl}" alt="">
                    <div class="desc">${cltr.title}</div>
                </div>
            `;
            cltrNews.appendChild(div);
        });
    });

    Array.from(cltrHighlights).forEach((cltrNews) => {
        shuffledCultureHighlights.slice(0, 1).forEach((cltr) => {
            const div = document.createElement("div");
            div.innerHTML = `
                <img src=${cltr.imageUrl} alt="" width = "672.75" height = "342">
                <div class="sport-desc">${cltr.title}</div>
            `;
            cltrNews.appendChild(div); // Fix: Change ltstNews to sports
        });
    });
} catch (error) {
    console.error("Error", error);
}
}

async function eduNews(){
    try{
    const response = await fetch(`${apiUrl}/category`);
    const allCategories = await response.json();

    // Filter items where category.name equals "business"
    const eduItems = allCategories.filter(category => category.name === "Education");

    // Shuffle the filtered items
    const shuffledEduItems = shuffleArray([...eduItems]);
    const shuffledEduGrid = shuffleArray([...eduItems]);
    const shuffledEduHighlights = shuffleArray([...eduItems]);

    const eduElements = document.querySelectorAll(".edu-news");
    const eduGrid = document.querySelectorAll(".edu-grid");
    const eduHighlights = document.querySelectorAll(".edu-highligh");

    Array.from(eduElements).forEach((eduNews) => {
        shuffledEduItems.slice(0, 4).forEach((edu) => {
            const div = document.createElement("div");
            div.innerHTML = `
                <div class="gallery">
                    <img src=${edu.imageUrl} alt="" width="262.82" height="226">
                    <div class="desc">${edu.title}</div>
                </div>
            `;
            eduNews.appendChild(div);
        });
    });

    Array.from(eduGrid).forEach((eduNews) => {
        shuffledEduGrid.slice(0, 4).forEach((edu) => {
            const div = document.createElement("div");
            div.innerHTML = `
                <div class="row-content">
                    <img src="${edu.imageUrl}" alt="">
                    <div class="desc">${edu.title}</div>
                </div>
            `;
            eduNews.appendChild(div);
        });
    });

    Array.from(eduHighlights).forEach((eduNews) => {
        shuffledEduHighlights.slice(0, 1).forEach((edu) => {
            const div = document.createElement("div");
            div.innerHTML = `
                <img src=${edu.imageUrl} alt="" width = "672.75" height = "342">
                <div class="edu-desc">${edu.title}</div>
            `;
            eduNews.appendChild(div); // Fix: Change ltstNews to sports
        });
    });
} catch (error) {
    console.error("Error", error);
}
}

