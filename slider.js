//Here JavaScript is selecting all <img> elements on the page and stores them in a NodeList called images//
let images=document.querySelectorAll(".carosaol img");
//JavaScript is selecting the elements with the two classes: previous and next, which are the buttons to move the images in the slideshow//
let previousbutton=document.querySelector(".previous");
let nextbutton=document.querySelector(".next");
//Here the variable "currentindex" keeps track of which image is being shown in the slideshow as it proceeds. Here the first image is being shown//
let currentindex=0;
//Javascript counts how many total pictures there are and stores the information so that the slide show doesn't go beyond the total number of pictures//
let totalimageslength=images.length;
//the variable -offset- says each image will move left or right by 100% of its width, based on its current index, (100%). Further, the offset is a negative value, which means the images will move left. If the currentindex is 1, the offset is -100%. This means the current image will move left and the slideshow will show the second image. The for loop means JS will go through all the images in their array. Finally, each image's position is updated using transform: translateX. Each image shifts to the left based on the offset variable -currentindex*100%//
function updatecarosaol(){
    let offset=-currentindex*100;
    for(let i=0; i<totalimageslength;i++){
        images[i].style.transform=`translateX(${offset}%)`
        
    }

}
//Here direction means moving forward (+) or backward (-1) one slide. currentindex is supposed to reflect the new position of a carousel image being displayed. 
updatecarosaol()
function moveslide(direction){
    currentindex=currentindex+direction;
    //if the currentindex somehow went below the first slide, then JS resets currentindex back to 0 (the first picture).//
    if(currentindex<0){
        currentindex=0
    }
    //If the currentindex is greater than indicated by totalimageslength, then JS sets currentindex to the last slide's index (totalimageslenght -1) to stop going beyond the end//
    if(currentindex>=totalimageslength){
        currentindex=totalimageslength - 1;
    }
    updatecarosaol();
}
//Here the eventlistener "click" is added to the previousbutton. When that button is clicked by the user, the slideshow moves back one image (-1).//
previousbutton.addEventListener("click", function(){
    moveslide(-1)

} )// Here, an event listener is added to the nextbutton, which moves the slideshow forward by one image (1).//
nextbutton.addEventListener("click", function(){
    moveslide(1)
} )