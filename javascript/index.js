const header = document.querySelector("header");
const getStarted = document.querySelector(".get-started");
getStarted.style.marginTop = `${header.offsetHeight}px`;

const overlay = document.querySelector(".overlay");

const btnMenu = document.querySelector(".header_icon-menu");
const listMenuHeader = document.querySelector(".header_menu");
const btnDeleteMenuHeader = document.querySelector(".header_menu i");

const textCompany = document.querySelector(".company h5");
const menuCompany = document.querySelector(".footer-list_detail-company");

const textServices = document.querySelector(".services h5");
const menuServices = document.querySelector(".footer-list_detail-services");

const textContact = document.querySelector(".contact h5");
const menuContact = document.querySelector(".footer-list_detail-contact");

const btnDeleteMenuFooter = document.querySelectorAll(
    ".btn-delete_menu-footer"
);

const handleTop = () => {
    element.style.top = `${header.offsetHeight}px`;
};

const handleMenu = (element) => {
    if (element.classList.contains("appearMenu")) {
        element.classList.remove("appearMenu");
        element.classList.add("hiddenMenu");
        overlay.classList.add("hiddenMenu");
        overlay.classList.remove("appearMenu");
        setTimeout(() => {
            overlay.style.display = "none";
            element.style.display = "none";
        }, 400);
    } else {
        element.classList.add("appearMenu");
        element.classList.remove("hiddenMenu");
        element.style.top = `${header.offsetHeight}px`;
        element.style.display = "block";
        overlay.style.display = "block";
        overlay.classList.remove("hiddenMenu");
        overlay.classList.add("appearMenu");
    }
};

btnMenu.onclick = () => handleMenu(listMenuHeader);
btnDeleteMenuHeader.onclick = () => handleMenu(listMenuHeader);
textCompany.onclick = () => handleMenu(menuCompany);
textServices.onclick = () => handleMenu(menuServices);
textContact.onclick = () => handleMenu(menuContact);

btnDeleteMenuFooter.forEach((btn) => {
    btn.onclick = (e) => {
        let arrElement = [
            ".footer-list_detail-company",
            ".footer-list_detail-services",
            ".footer-list_detail-contact",
        ];
        let elementNeedDelete;
        for (element of arrElement) {
            if (e.target.closest(element)) {
                elementNeedDelete = e.target.closest(element);
                console.log(elementNeedDelete);
                break;
            }
        }
        handleMenu(elementNeedDelete);
    };
});

overlay.onclick = () => {
    let arrElement = [listMenuHeader, menuCompany, menuServices, menuContact];
    for (element of arrElement) {
        if (element.classList.contains("appearMenu")) {
            handleMenu(element);
            break;
        }
    }
};

const textQuestons = document.querySelectorAll('.let-talk_detail-box_list-detail_questions');
const textAnswerWrapper = document.querySelectorAll('.let-talk_detail-box_list-detail_answer-wrapper');
// const textAnswer = document.querySelectorAll('.let-talk_detail-box_list-detail_answer');

const iconQuestions = document.querySelectorAll('.let-talk_detail-box_list-detail_questions i');
console.log(iconQuestions)


textQuestons.forEach((element, index) => {
    element.onclick = () => {
        if (textAnswerWrapper[index].classList.contains('active')) {
            textAnswerWrapper.forEach(btn => {
                btn.classList.remove('active')
                iconQuestions.forEach(icon => {
                    icon.classList.add("fa-plus")
                    icon.classList.remove("fa-minus")
                })
            })
        } else {
            textAnswerWrapper.forEach(btn => btn.classList.remove('active'))
            textAnswerWrapper[index].classList.toggle('active')
            iconQuestions.forEach(icon => {
                icon.classList.add("fa-plus")
                icon.classList.remove("fa-minus")
            })
            if (textAnswerWrapper[index].classList.contains("active")) {
                textAnswerWrapper[index].classList.add("appearAnswer")
                textAnswerWrapper[index].classList.remove("hiddenAnswer")
                iconQuestions[index].classList.remove("fa-plus")
                iconQuestions[index].classList.add("fa-minus")
            } else {
                textAnswerWrapper[index].classList.remove("appearAnswer")
                textAnswerWrapper[index].classList.add("hiddenAnswer")
                iconQuestions[index].classList.add("fa-plus")
                iconQuestions[index].classList.remove("fa-minus")
            }
        }

    }
})


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsiveClass: true,
    touchDrag: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.btn-direction.left').click(function () {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.btn-direction.right').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})


