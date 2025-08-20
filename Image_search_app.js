const acceskey = "OodRxLXgkhObdh-9fOSQb6MfsiAbZALhzzB3hEwf1_s"

const formel = document.querySelector("form");
const searchinputel = document.getElementById("search-input");
const searchbutton = document.getElementById("searchbutton");
const showmore = document.getElementById("showmore");
const searchcontainer = document.getElementById("search-result");

let inutvalue ;
let page = 1
 async function searchImage() {
    inputvalue = searchinputel.value;
     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputvalue}&client_id=${acceskey}`;
    try{
        const response = await fetch(url);
        const data = await response.json();//parse in json
        page++







        for (let index = 0; index < data.results.length; index++) {
            console.log(data.results[index].urls.regular)

            const imagewrapper = document.createElement("div");
            imagewrapper.classList.add("search-result");
            const anchor = document.createElement("a");

            anchor.href = data.results[index].links.html;
            anchor.target = "_blank";
            anchor.rel="noopener noreferrer"
            const image = document.createElement("img");
            image.src = data.results[index].urls.regular;
            anchor.appendChild(image);
            anchor.innerHTML += data.results[index].description;
            imagewrapper.appendChild(anchor);
            searchcontainer.appendChild(imagewrapper);

        }



    }catch (error){
        console.log(error)
    }

}


formel.addEventListener("submit",(e)=>{
    e.preventDefault();
    searchImage()
    searchcontainer.innerHTML = "";

    showmore.style.display = "block";


})

showmore.addEventListener("click", () => {
    searchImage();
})
