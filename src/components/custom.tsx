import React from 'react';
import { Link } from 'react-router-dom';
const Header: React.FC = () => {
        // jQuery code starts here
        (function ($) {
          function b() {
            $(".grid").masonry({ itemSelector: ".grid-item" });
          }
    
          $(document).ready(function () {
            // Add scroll event listener
            window.addEventListener("scroll", function () {
              var b = document.querySelector(".top-header").offsetHeight;
              if ($(window).width() >= 992)
                window.scrollY > b
                  ? document.getElementById("masthead").classList.add("fixed-header")
                  : document
                      .getElementById("masthead")
                      .classList.remove("fixed-header");
              else {
                var c = document.querySelector(".bottom-header").offsetHeight,
                  d = b + c;
                window.scrollY > d
                  ? document.getElementById("masthead").classList.add("fixed-header")
                  : document
                      .getElementById("masthead")
                      .classList.remove("fixed-header");
              }
            });
    
            // Handle header search icon click
            $(document).on("click", ".header-search-icon .search-icon", function (e) {
              e.preventDefault();
              $(".header-search-form").addClass("search-in");
            });
    
            // Handle body or search-close click
            $("body, .search-close").click(function (e) {
              if (!$(e.target).is(".header-search-form input")) {
                $(".header-search-form").removeClass("search-in");
              }
            });
    
            // Initialize the slicknav plugin
            $("#navigation").slicknav({
              duration: 500,
              closedSymbol: '<i class="fas fa-plus"></i>',
              openedSymbol: '<i class="fas fa-minus"></i>',
              prependTo: ".mobile-menu-container",
              allowParentLinks: true,
              nestedParentLinks: false,
              label: "Menu",
              closeOnClick: true,
            });
    
            // Initialize date picker
            $(".input-date-picker").datepicker();
    
            // Initialize home-slider
            $(".home-slider").slick({
              dots: false,
              infinite: true,
              autoplay: false,
              speed: 1200,
              fade: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight: false,
            });
    
            // Initialize client-slider
            $(".client-slider").slick({
              dots: false,
              infinite: true,
              speed: 1000,
              prevArrow: false,
              nextArrow: false,
              slidesToShow: 5,
              autoplay: false,
              responsive: [
                { breakpoint: 768, settings: { slidesToShow: 3 } },
                { breakpoint: 479, settings: { slidesToShow: 2 } },
              ],
            });
    
            // Initialize testimonial-slider
            $(".testimonial-slider").slick({
              dots: true,
              infinite: true,
              autoplay: false,
              speed: 1200,
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight: false,
              prevArrow: false,
              nextArrow: false,
            });
    
            // Handle back to top button
            $(window).scroll(function () {
              $(this).scrollTop() > 300
                ? $("#backTotop").fadeIn(200)
                : $("#backTotop").fadeOut(200);
            });
    
            $("#backTotop").click(function (e) {
              e.preventDefault();
              $("html, body").animate({ scrollTop: 0 }, 1000);
            });
    
            // Call the loopcounter function
            $(document).ready(function () {
              loopcounter("time-counter");
            });
    
            // Initialize single-tour-slider
            $(".single-tour-slider").slick({
              dots: true,
              infinite: true,
              autoplay: false,
              speed: 1200,
              slidesToShow: 2,
              adaptiveHeight: false,
              prevArrow: false,
              nextArrow: false,
            });
    
            // Initialize choice-slider
            $(".choice-slider").slick({
              dots: false,
              infinite: true,
              autoplay: false,
              speed: 1200,
              fade: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight: false,
            });
    
            // Initialize product-thumbnails and product-thumb-nav sliders
            $(".product-thumbnails").slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              fade: true,
              asNavFor: ".product-thumb-nav",
            });
    
            $(".product-thumb-nav").slick({
              slidesToShow: 4,
              slidesToScroll: 1,
              asNavFor: ".product-thumbnails",
              dots: false,
              centerMode: true,
              focusOnSelect: true,
            });
    
            // On window load, fade out the siteLoader
            $(window).load(function () {
              $("#siteLoader").fadeOut(500);
              b();
            });
    
            // Handle slider-range
            $("#slider-range").slider({
              range: "max",
              min: 0,
              max: 1000,
              value: 500,
              slide: function (event, ui) {
                $("#maxAmount").val(ui.value);
              },
            });
    
            $("#maxAmount").val($("#slider-range").slider("value"));
    
            // Initialize modal video
            $("#video-container").modalVideo({
              youtube: { controls: 0, nocookie: true },
            });
    
            // Counter animation
            $(".counter").counterUp();
    
            // Handle quantity buttons
            $(".quantity").prop("disabled", true);
    
            $(document).on("click", ".plus-btn", function (e) {
              e.preventDefault();
              $(".quantity").val(parseInt($(".quantity").val()) + 1);
            });
    
            $(document).on("click", ".minus-btn", function (e) {
              e.preventDefault();
              $(".quantity").val(parseInt($(".quantity").val()) - 1);
              if ($(".quantity").val() == 0) {
                $(".quantity").val(1);
              }
            });
          });
        })(jQuery);
        // jQuery code ends here
      }, []);
  );
};

export default Header;
