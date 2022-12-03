import lightGallery from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.3";
import lgZoom from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.3/plugins/zoom";
import lgThumbnail from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.3/plugins/thumbnail";


const lgContainer = document.getElementById('inline-gallery-container');
const inlineGallery = lightGallery(lgContainer, {
    container: lgContainer,
    dynamic: true,
    // Turn off hash plugin in case if you are using it
    // as we don't want to change the url on slide change
    hash: false,
    // Do not allow users to close the gallery
    closable: false,
    // Add maximize icon to enlarge the gallery
    showMaximizeIcon: true,
    // Append caption inside the slide item
    // to apply some animation for the captions (Optional)
    appendSubHtmlTo: '.lg-item',
    // Delay slide transition to complete captions animations
    // before navigating to different slides (Optional)
    // You can find caption animation demo on the captions demo page
    slideDelay: 400,
    plugins: [lgZoom, lgThumbnail],
    dynamicEl: [
        {
            src: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7055-1.jpg',
            thumb: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7055-1-thumb.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 1</h4>
                <p>Description of the slide 1</p>
            </div>`,
        },
        {
            src: 'http://127.0.0.1:8000/static/images/GOLF/IMG_6683-1.jpg',
            thumb: 'http://127.0.0.1:8000/static/images/GOLF/IMG_6683-1-thumb.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
        },
        {
            src: 'http://127.0.0.1:8000/static/images/GOLF/IMG_6955-1.jpg',
            thumb: 'http://127.0.0.1:8000/static/images/GOLF/IMG_6955-1-thumb.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
        },
        {
            src: 'http://127.0.0.1:8000/static/images/GOLF/IMG_6975-1.jpg',
            thumb: 'http://127.0.0.1:8000/static/images/GOLF/IMG_6975-1-thumb.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
        },
        {
            src: 'http://127.0.0.1:8000/static/images/GOLF/IMG_6983-1.jpg',
            thumb: 'http://127.0.0.1:8000/static/images/GOLF/IMG_6983-1-thumb.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
        },
        {
            src: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7006-1.jpg',
            thumb: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7006-1-thumb.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
        },
        {
            src: 'http://127.0.0.1:8000/static/images/GOLF/IMG_6623-1.jpg',
            thumb: 'http://127.0.0.1:8000/static/images/GOLF/IMG_6623-1-thumb.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
        },
        {
            src: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7101-1.jpg',
            thumb: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7101-1-thumb.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
        },
        {
            src: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7230-1.jpg',
            thumb: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7230-1-thumb.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
        },
        {
            src: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7264-1.jpg',
            thumb: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7264-1-thumb.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
        },
        {
            src: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7275-1.jpg',
            thumb: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7275-1-thumb.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
        },
        {
            src: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7350-1.jpg',
            thumb: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7350-1-thumb.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
        },
        {
            src: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7357-1.jpg',
            thumb: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7357-1-thumb.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
        },
        {
            src: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7359-1.jpg',
            thumb: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7359-1-thumb.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
        },
        {
            src: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7374-1.jpg',
            thumb: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7374-1-thumb.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
        },
        {
            src: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7380-1.jpg',
            thumb: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7380-1-thumb.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
        },
        {
            src: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7396-1.jpg',
            thumb: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7396-1-thumb.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
        },
        {
            src: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7426-1.jpg',
            thumb: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7426-1-thumb.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
        },
        {
            src: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7514-1.jpg',
            thumb: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7514-1-thumb.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
        },
        {
            src: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7526-1.jpg',
            thumb: 'http://127.0.0.1:8000/static/images/GOLF/IMG_7526-1-thumb.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
        },
    ],
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery.openGallery();