const API_BASE_URL = "http://127.0.0.1:5000";

/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("🌾 AgriSmart Homepage Loaded Successfully");

    highlightActivePage();

    animateFeatureCards();

});

/* ================= NAVIGATION FUNCTIONS ================= */

/* Open Crop Guide */
function openCropGuide() {
    window.location.href = "pages/crops.html";
}

/* Open Marketplace */
function openMarketplace() {
    window.location.href = "pages/market.html";
}

/* Open Government Schemes */
function openSchemes() {
    window.location.href = "pages/schemes.html";
}

/* Open Login/Register */
function openLogin() {
    window.location.href = "pages/login.html";
}

/* Open Smart Irrigation Hub */
function openIrrigationHub() {
    window.location.href = "pages/irrigation.html";
}

/* ================= UI HELPERS ================= */

/* Highlight Active Navigation Link */
function highlightActivePage() {

    const links = document.querySelectorAll(".nav-links a");

    const currentPage =
        window.location.pathname.split("/").pop();

    links.forEach(link => {

        const href =
            link.getAttribute("href").split("/").pop();

        if (href === currentPage) {

            link.style.color = "#ffe066";
            link.style.fontWeight = "600";
        }

    });
}

/* ================= FEATURE CARD ANIMATION ================= */

function animateFeatureCards() {

    const cards =
        document.querySelectorAll(".feature-card");

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";
                }

            });

        }, {
            threshold: 0.15
        });

    cards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(40px)";

        card.style.transition =
            `all 0.6s ease ${index * 0.1}s`;

        observer.observe(card);

    });
}

/* ================= FUTURE API READY FUNCTIONS ================= */

async function fetchData(endpoint) {

    try {

        const response =
            await fetch(`${API_BASE_URL}/${endpoint}`);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        return await response.json();

    } catch (error) {

        console.error("❌ API Error:", error);

        return null;
    }
}

/* ================= FUTURE BACKEND MODULES ================= */

async function getMarketplaceData() {
    return await fetchData("market");
}

async function getCropData() {
    return await fetchData("crops");
}

async function getSchemesData() {
    return await fetchData("schemes");
}

async function getIrrigationData() {
    return await fetchData("irrigation");
}

/* ================= NOTIFICATION SYSTEM ================= */

function showNotification(message) {

    const notification =
        document.createElement("div");

    notification.innerText = message;

    notification.style.position = "fixed";
    notification.style.top = "20px";
    notification.style.right = "20px";

    notification.style.background = "#0b7a33";
    notification.style.color = "white";

    notification.style.padding = "15px 20px";
    notification.style.borderRadius = "10px";

    notification.style.boxShadow =
        "0 5px 15px rgba(0,0,0,0.2)";

    notification.style.zIndex = "9999";

    document.body.appendChild(notification);

    setTimeout(() => {

        notification.remove();

    }, 3000);
}

/* ================= BACK TO TOP ================= */

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

console.log("✅ AgriSmart Script Loaded Successfully");