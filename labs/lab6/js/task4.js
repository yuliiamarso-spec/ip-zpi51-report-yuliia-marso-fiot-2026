function initTask4() {

    function countingElements() {

        const categories = document.querySelector("#categories");
        const items = document.querySelectorAll("#categories .item");  

        console.log("Number of categories:", items.length);
        
            items.forEach(item => { 
                const title = item.querySelector("h2");
                const elements = item.querySelectorAll("ul li");

            console.log("Category:", title.textContent);    
            console.log("Elements:", elements.length);
            });

    }
    console.log(countingElements());
}