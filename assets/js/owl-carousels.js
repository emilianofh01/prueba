/* HOME CAROUSEL: PROPERTIES */
$('.owl-home-propierties').owlCarousel({
    lazyload: true,
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    autoWidth: true,
});

/* PROPERTY DETAILS CAROUSEL: MAIN PREVIEW */
$('.owl-property-main-preview').owlCarousel({
    loop: true,
    nav: false,
    responsive:{
        0:{
            items: 1,
            margin: 0,
        },
        600:{
            items: 2,
            margin: 0,
        },
        900:{
            items: 3,
            margin: 0,
        },
        1250:{
            items: 4,
            margin: 0,
        },
    }
});

/* PROPERTY DETAILS CAROUSEL: GALLERY */
$('.owl-property-gallery').owlCarousel({
    lazyload: true,
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    autoWidth: true,
});

/* CONTACTS (RECENTLY ADDED CLIENTS) */
$('.owl-clients-recently').owlCarousel({
    lazyload: true,
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    autoWidth: true,
});

/* COSTUMER PROFILE: PROPERTIES */
$('.owl-customer-properties').owlCarousel({
    lazyload: true,
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    autoWidth: true,   
});

/* COSTUMER PROFILE: FAVORITES */
$('.owl-customer-favorites').owlCarousel({
    lazyload: true,
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    autoWidth: true,   
});

/* SCHEDULE ADD VIEW*/
$('.owl-schedule-add').owlCarousel({
    lazyload: true,
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    autoWidth: true,   
});
$('.owl-schedule-add-date').owlCarousel({
    lazyload: true,
    loop: false,
    margin: 4,
    nav: false,
    dots: false,
    autoWidth: true,   
});