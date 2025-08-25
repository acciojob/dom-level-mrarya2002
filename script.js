//your JS code here. If required.
const targetElement = document.querySelector("#level");
    
    function findLevel(element){
        let level=0;
        while(element){
            element = element.parentElement;
            level++;
        }
        return level;
    }
    
    const getlevel = findLevel(targetElement);
    alert("The level of the element is: "+getlevel);