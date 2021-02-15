function Slider() {
    this.slider = document.getElementsByClassName('slider')[0];
    this.imagesList = document.getElementsByTagName('img');
    this.imagesSrc = [];

    this.prevImage = null;
    this.currentImage = null;
    this.nextImage = null;

    this.isClick = false;

    function getStartImage() {
        this.numCurrentImage = 0;
        this.numPrevImage = this.imagesSrc.length - 1;
        this.numNextImage = 1;
    }

    function getImage() {
        for (let i = 0; i < this.imagesList.length; i++) {
            this.imagesSrc.push(this.imagesList[i].src);
        }
    }

    function drawImage() {
        if (this.prevImage) this.prevImage.remove();
        if (this.currentImage) this.currentImage.remove();
        if (this.nextImage) this.nextImage.remove();
        if (this.counter) this.counter.remove();

        this.prevImage = document.createElement('img');
        this.prevImage.classList.add('slider__item');
        this.prevImage.src = this.imagesSrc[this.numPrevImage];
        this.prevImage.style.left = -100 + 'vw';
        this.slider.append(this.prevImage);

        this.currentImage = document.createElement('img');
        this.currentImage.classList.add('slider__item');
        this.currentImage.src = this.imagesSrc[this.numCurrentImage];
        this.currentImage.style.left = 0 + 'vw';
        this.slider.append(this.currentImage);

        this.nextImage = document.createElement('img');
        this.nextImage.classList.add('slider__item');
        this.nextImage.src = this.imagesSrc[this.numNextImage];
        this.nextImage.style.left = 100 + 'vw';
        this.slider.append(this.nextImage);

        this.counter = document.createElement('span');
        this.counter.classList.add('slider__counter');
        this.counter.textContent = `${this.numCurrentImage+1} из ${this.imagesSrc.length}`;
        this.slider.append(this.counter);
    }



    function drawButtons() {

        this.buttonsPanel = document.createElement('div');
        this.buttonsPanel.classList.add('buttons-panel');
        this.slider.append(this.buttonsPanel);

        this.buttonLeft = document.createElement('a');
        this.buttonLeft.classList.add('buttons-panel__left');
        this.buttonLeft.textContent = String.fromCharCode(10094);
        this.buttonsPanel.append(this.buttonLeft);
        this.buttonLeft.addEventListener('click', () => {
            if (!this.isClick) leftButtonClick.call(this);
        });

        this.buttonRight = document.createElement('a');
        this.buttonRight.classList.add('buttons-panel__right');
        this.buttonRight.textContent = String.fromCharCode(10095);
        this.buttonsPanel.append(this.buttonRight);
        this.buttonRight.addEventListener('click', () => {
            if (!this.isClick) rightButtonClick.call(this);
        });
    }

    function getNumImages() {
        this.numPrevImage = (this.numPrevImage < 0) ? (this.imagesSrc.length - 1) : (this.numPrevImage > this.imagesSrc.length - 1) ? 0 : this.numPrevImage;
        this.numCurrentImage = (this.numCurrentImage < 0) ? (this.imagesSrc.length - 1) : (this.numCurrentImage > this.imagesSrc.length - 1) ? 0 : this.numCurrentImage;
        this.numNextImage = (this.numNextImage < 0) ? (this.imagesSrc.length - 1) : (this.numNextImage > this.imagesSrc.length - 1) ? 0 : this.numNextImage;
    }


    function leftButtonClick() {
        this.isClick = true;

        this.prevImage.style.left = 0;
        this.currentImage.style.left = 100 + 'vw';

        this.numPrevImage--
        this.numCurrentImage--;
        this.numNextImage--;

        getNumImages.call(this);
        setTimeout(() => {
            drawImage.call(this);
            this.isClick = false;
        }, 1000);
    }

    function rightButtonClick() {
        this.isClick = true;

        this.nextImage.style.left = 0;
        this.currentImage.style.left = -100 + 'vw';

        this.numPrevImage++;
        this.numCurrentImage++;
        this.numNextImage++;

        getNumImages.call(this);
        setTimeout(() => {
            drawImage.call(this);
            this.isClick = false;
        }, 1000);
    }


    this.createSlider = function () {
        getImage.call(this);
        getStartImage.call(this);
        drawImage.call(this);
        drawButtons.call(this);
    }
}

export {
    Slider
}