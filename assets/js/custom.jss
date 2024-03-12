var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

window.onload = function () {
    var OrderBookLength = document.getElementById("OrderBookLength");
    var PlatformFee = document.getElementById("PlatformFee");
    var RequestQueueLength = document.getElementById("RequestQueueLength");
    var EventQueueLength = document.getElementById("EventQueueLength");
    var createButton = document.getElementById("createButton");
    OrderBookLength.disabled = true;
    PlatformFee.disabled = true;
    RequestQueueLength.disabled = true;
    EventQueueLength.disabled = true;
    createButton.disabled = true;
};


function toggleInput() {
    var switchButton = document.getElementById("switch");
    var OrderBookLength = document.getElementById("OrderBookLength");
    var RequestQueueLength = document.getElementById("RequestQueueLength");
    var EventQueueLength = document.getElementById("EventQueueLength");

    if (switchButton.checked) {
        OrderBookLength.classList.remove("hidden");
        OrderBookLength.removeAttribute("disabled");

        RequestQueueLength.classList.remove("hidden");
        RequestQueueLength.removeAttribute("disabled");

        EventQueueLength.classList.remove("hidden");
        EventQueueLength.removeAttribute("disabled");
    } else {
        OrderBookLength.classList.add("hidden");
        OrderBookLength.value = "909";
        OrderBookLength.setAttribute("disabled", "true");

        RequestQueueLength.classList.add("hidden");
        RequestQueueLength.value = "63";
        RequestQueueLength.setAttribute("disabled", "true");

        EventQueueLength.classList.add("hidden");
        EventQueueLength.value = "2978";
        EventQueueLength.setAttribute("disabled", "true");
    }
}

function toggleApprove() {
    var approveButton = document.getElementById("approve");
    var createButton = document.getElementById("createButton");

    if (approveButton.checked) {
        createButton.removeAttribute("disabled");

    } else {
        createButton.setAttribute("disabled", "true");
    }
}


(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
