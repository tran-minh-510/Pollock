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
