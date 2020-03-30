import {

getImages

} from './module/data.js'


//makes the button with click function

document.querySelector('button').addEventListener('click', async () => {
    
    //get images
    
    let text = document.querySelector('#search').value;

    let numberOfImages = document.querySelector('#numberOfImages').value;

    let data = await getImages(text, numberOfImages);

    updateUi(data);

})



//function update Ui 
function updateUi(data){
    //to clear search
    document.querySelector('#photos').innerHTML = '';

    data.photo.forEach(img => {
       
        
       let el = document.createElement('img');

       el.setAttribute('src', imgUrl(img, 'q'));

      el.classList.add('searchableImages');

       el.addEventListener('click', () => {

           img.src = enlarge(img);  

       });
       
       document.querySelector('#photos').appendChild(el);

    });

    const images = document.querySelectorAll('img');

images.forEach(image => {
   
    image.addEventListener('click', e => {

        lightbox.classList.add('active')

        const img = document.createElement('img')

img.classList.add('originalImages');

        img.src = image.src

        while (lightbox.firstChild) {
            
            lightbox.removeChild(lightbox.firstChild)
            
        }

        lightbox.appendChild(img)

       showOriginalImage(lightbox);

    });

});

};



//enlarge, o means original size
function enlarge(img) {

   img.src =  imgUrl(img, 'o')
  
};

//farms the image

function imgUrl(img, size) {

    return `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_${size}.jpg`

}

//creating div

const lightbox = document.createElement('div');

function showOriginalImage(lightbox) {

lightbox.id = 'lightbox';

document.body.appendChild(lightbox);

//remove lightbox

lightbox.addEventListener('click', event => {

        if (event.target !== event.currentTarget) return; 

        lightbox.remove('active');    
        
    });

}   




