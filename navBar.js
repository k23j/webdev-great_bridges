(function() {

    var navBarSelectedId = 0;

    var navBarItems = document.getElementById("navBar").querySelectorAll("a");
    
    navBarItems.forEach(function (element, id) {
    
        element.addEventListener('click', function (event) {
            onItemClicked(event, id);
        });
    
        updateStyle();
    });
    
    function onItemClicked(event, id) {
        event.preventDefault();
        navBarSelectedId = id;
        updateStyle();
    
        //TODO: Change Main content
    }
    
    function updateStyle() {
        navBarItems.forEach(function (element, id) {
            if (navBarSelectedId == id) {
                element.classList.add('selectedNavBarItem');
            } else {
                element.classList.remove('selectedNavBarItem');
            }
        });
    }
})();
