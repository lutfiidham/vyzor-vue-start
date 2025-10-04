export let
    slidesOnly = {
        script: `
    <Carousel id="carouselExampleSlidesOnly">
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-26.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-27.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-33.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
            </Carousel>` },
    withControls = {
        script: `
    <Carousel id="carouselExampleControls">
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-28.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-31.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-32.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <template #addons>
                    <Navigation/>
                </template>
            </Carousel>` },
    withIndicators = {
        script: `<Carousel v-bind="carouselConfig" id="carouselExampleIndicators">
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-25.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-29.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-30.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <template #addons>
                    <Navigation/>
                    <Pagination />
                </template>
            </Carousel>` },
    withCaptions = {
        script: `<Carousel v-bind="carouselConfig" id="carouselExampleCaptions">
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-59.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="text-fixed-white">First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                </Slide>
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-60.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="text-fixed-white">Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                </Slide>
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-61.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="text-fixed-white">Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation/>
                    <Pagination />
                </template>
            </Carousel>` },
    crossfade = {
        script: `<Carousel v-bind="{slideEffect:'fade',autoplay:5000}" id="carouselExampleCaptions">
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-43.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-44.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-45.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <template #addons>
                    <Navigation/>
                </template>
            </Carousel>` },
    individualCarouselItemInterval = {
        script: `<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="/images/media/media-40.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="/images/media/media-41.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="/images/media/media-42.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>` },
    disableTouchSwiping = {
        script: `<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/images/media/media-13.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="/images/media/media-14.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="/images/media/media-18.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>` },
    darkVariant = {
        script: `<div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="/images/media/media-63.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5 class="text-fixed-white">First slide label</h5>
                                <p class="op-7">Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="/images/media/media-64.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5 class="text-fixed-white">Second slide label</h5>
                                <p class="op-7">Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/images/media/media-62.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5 class="text-fixed-white">Third slide label</h5>
                                <p class="op-7">Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>` },
    WrapAround = {
        script: `
                     <Carousel v-bind="{itemsToShow: 2,
  autoplay: 4000,
  wrapAround: true,
  pauseAutoplayOnHover: true,}" id="carouselExampleCaptions">
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-40.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-41.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-42.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>`
    },
    Vertical={
        script:` <Carousel v-bind="{dir: 'ttb',height: '400px',
}" id="carouselExampleCaptions">
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-40.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-41.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-42.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>`
    },
    MouseWheel={
        script:`<Carousel v-bind="{mouseWheel: true,
}" id="carouselExampleCaptions">
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-40.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-41.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-42.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>`
    },
    CustomNavigation={
        script:`<Carousel v-bind="{autoplay:5000,
}" id="carouselExampleCaptions" ref="carouselRef" v-model="currentSlide">
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-40.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-41.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <Slide>
                    <div class="carousel__item">
                        <img src="/images/media/media-42.jpg" class="d-block w-100" alt="...">
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
            <div>
                <button @click="prev">Prev</button>
                <input type="number" min="0" max="9" v-model="currentSlide" />
                <button @click="next">Next</button>
            </div>`
    }