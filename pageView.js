
(function () {
    class PageModel{
        constructor(imgPath, title, text) {
            this.imgPath = imgPath;
            this.title = title;
            this.text = text;
        }
    }

    const pageList = [
        new PageModel('./static/img/bridges/bridge.jpg',
        "The Greatest Bridges",
        "Welcome to our website dedicated to celebrating the architectural marvels that span the globe – bridges! From breathtaking feats of engineering to iconic landmarks, join us on a journey across rivers, canyons, and cityscapes to explore some of the most magnificent bridges ever built. Whether you're a bridge enthusiast, an admirer of architectural wonders, or simply curious about the world's greatest crossings, you've come to the right place. Let's embark on an adventure together and discover the beauty and innovation behind these incredible structures. Welcome aboard!"
        ),
        new PageModel('./static/img/bridges/Golden-Gate-Bridge-San-Francisco.png',
        "Golden Gate Bridge",
        "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide (1.6 km) strait connecting San Francisco Bay and the Pacific Ocean. The structure links the U.S. city of San Francisco, California—the northern tip of the San Francisco Peninsula—to Marin County, carrying both U.S. Route 101 and California State Route 1 across the strait. It also carries pedestrian and bicycle traffic, and is designated as part of U.S. Bicycle Route 95. Recognized by the American Society of Civil Engineers as one of the Wonders of the Modern World,[7] the bridge is one of the most internationally recognized symbols of San Francisco and California."
        ),
        new PageModel('./static/img/bridges/Brooklyn_Bridge.jpg',
        "Brooklyn Bridge",
        "The Brooklyn Bridge is a hybrid cable-stayed/suspension bridge in New York City, spanning the East River between the boroughs of Manhattan and Brooklyn. Opened on May 24, 1883, the Brooklyn Bridge was the first fixed crossing of the East River. It was also the longest suspension bridge in the world at the time of its opening, with a main span of 1,595.5 feet (486.3 m) and a deck 127 ft (38.7 m) above mean high water. The span was originally called the New York and Brooklyn Bridge or the East River Bridge but was officially renamed the Brooklyn Bridge in 1915."
        ),
        new PageModel('./static/img/bridges/tower_bridge.jpg',
        "Tower Bridge",
        "Tower Bridge is a Grade I listed combined bascule and suspension bridge in London, built between 1886 and 1894, designed by Horace Jones and engineered by John Wolfe Barry with the help of Henry Marc Brunel.[1] It crosses the River Thames close to the Tower of London and is one of five London bridges owned and maintained by the City Bridge Foundation, a charitable trust founded in 1282. The bridge was constructed to give better access to the East End of London, which had expanded its commercial potential in the 19th century. The bridge was opened by Edward, Prince of Wales and Alexandra, Princess of Wales in 1894."
        ),
        new PageModel('./static/img/bridges/forth_bridge.jpg',
        "Forth Bridge",
        "The Forth Bridge is a cantilever railway bridge across the Firth of Forth in the east of Scotland, 9 miles west of central Edinburgh. Completed in 1890, it is considered a symbol of Scotland, and is a UNESCO World Heritage Site. It was designed by English engineers Sir John Fowler and Sir Benjamin Baker."
        ),
    ];


    let selectedPageId = 0;

    let pageNum = pageList.length;

    let pageView = document.getElementById("pageView");
    let pageHeader = document.getElementById("pageHeader");
    let pageText = document.getElementById("pageText");

    var pageIndicatorDiv = document.getElementById("pageIndicatorDiv");

    const pageViewIndicatorList = [];

    for (let i = 0; i < pageNum; i++) {
        let newLink = document.createElement("a");

        newLink.setAttribute("href", "index.html");
        newLink.addEventListener('click', function (event) {
            onItemClicked(event, i);
        });

        let newElement = document.createElement("div");

        newElement.classList.add("pageIndicator");
        // if (i == 0) {
        //     newElement.classList.add("selectedPageIndicator");
        // }
        newLink.appendChild(newElement);

        pageViewIndicatorList.push(newElement);

        pageIndicatorDiv.appendChild(newLink);
    }

    onItemClicked(null, 0);

    document.getElementById("pageViwer_previusPage").addEventListener("click", function (event) { previusPage(event); });
    document.getElementById("pageViwer_nextPage").addEventListener("click", function (event) { nextPage(event); });


    function previusPage(event) {
        event.preventDefault();
        let tempNum = selectedPageId - 1;
        if (tempNum < 0) {
            tempNum = pageNum-1;
        }
        onItemClicked(event,tempNum);
    }
    
    function nextPage(event) {
        event.preventDefault();
        let tempNum = selectedPageId + 1;
        if (tempNum >= pageNum) {
            tempNum = 0;
        }
        onItemClicked(event,tempNum);
    }

    // navBarItems.forEach(function (element, id) {

    //     element.addEventListener('click', function (event) {
    //         onItemClicked(event, id);
    //     });

    //     updateStyle();
    // });

    function onItemClicked(event, id) {
        if (event != null) {
            event.preventDefault();
        }
        selectedPageId = id;
        updateStyle();
        changePage(selectedPageId);

        //TODO: Change Main content
    }

    function updateStyle() {
        pageViewIndicatorList.forEach(function (element, id) {
            if (selectedPageId == id) {
                element.classList.add('selectedPageIndicator');
            } else {
                element.classList.remove('selectedPageIndicator');
            }
        });
    }

    function changePage(id) {
        pageView.style.backgroundImage = "url(" + pageList[id].imgPath + ")";
        pageHeader.innerHTML = pageList[id].title;
        pageText.innerHTML = pageList[id].text;
    }
})();

