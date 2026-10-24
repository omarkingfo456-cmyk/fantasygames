const games = [
    {
        id: 1,
        name: "God of War Ragnarök",
        image: "images/god-of-war-ragnarok.jpg",
        categories: ["adventure", "action", "story"],
        size: "يُضاف لاحقًا",
        players: "لاعب واحد",
        offline: "تعمل دون إنترنت",
        description: "مغامرة مليئة بالقتال والاستكشاف، وتكمل رحلة كريتوس وأتريوس."
    },
    {
        id: 2,
        name: "Uncharted 4: A Thief's End",
        image: "images/uncharted-4.jpg",
        categories: ["adventure", "action", "story"],
        size: "يُضاف لاحقًا",
        players: "لاعب واحد في القصة",
        offline: "تعمل القصة دون إنترنت",
        description: "مغامرة سينمائية مليئة بالألغاز والاستكشاف والمطاردات."
    },
    {
        id: 3,
        name: "The Last of Us Part I",
        image: "images/the-last-of-us-part-1.jpg",
        categories: ["adventure", "action", "story", "horror"],
        size: "يُضاف لاحقًا",
        players: "لاعب واحد",
        offline: "تعمل القصة دون إنترنت",
        description: "قصة مغامرات وبقاء في عالم اجتاحه المصابون."
    },
    {
        id: 4,
        name: "Grand Theft Auto V",
        image: "images/gta-v.jpg",
        categories: ["action", "adventure"],
        size: "يُضاف لاحقًا",
        players: "لاعب واحد في طور القصة",
        offline: "طور القصة يعمل دون إنترنت",
        description: "لعبة عالم مفتوح تضم مهامًا وقيادة واستكشافًا."
    },
    {
        id: 5,
        name: "Resident Evil 4",
        image: "images/resident-evil-4.jpg",
        categories: ["horror", "action", "adventure"],
        size: "يُضاف لاحقًا",
        players: "لاعب واحد",
        offline: "تعمل القصة دون إنترنت",
        description: "لعبة رعب وبقاء تعتمد على الاستكشاف والقتال."
    },
    {
        id: 6,
        name: "Gran Turismo 7",
        image: "images/gran-turismo-7.jpg",
        categories: ["racing"],
        size: "يُضاف لاحقًا",
        players: "حسب طور اللعب",
        offline: "بعض الميزات تتطلب الإنترنت",
        description: "لعبة سباقات سيارات واقعية. تحقق من متطلبات الإنترنت قبل اللعب."
    },
    {
        id: 7,
        name: "EA SPORTS FC",
        image: "images/ea-sports-fc.jpg",
        categories: ["sports", "local"],
        size: "يُضاف لاحقًا",
        players: "اللعب المحلي حسب الطور",
        offline: "بعض الأطوار تعمل دون إنترنت",
        description: "لعبة كرة قدم، وتختلف الأطوار والميزات حسب الإصدار."
    },
    {
        id: 8,
        name: "Minecraft",
        image: "images/minecraft.jpg",
        categories: ["adventure", "kids", "local"],
        size: "يُضاف لاحقًا",
        players: "يدعم اللعب الجماعي المحلي في أوضاع مدعومة",
        offline: "تتوفر ميزات دون إنترنت",
        description: "لعبة بناء واستكشاف وإبداع. راجع إعدادات الإصدار وطريقة اللعب."
    }
];

const categoryNames = {
    all: "كل الألعاب",
    adventure: "مغامرات",
    horror: "رعب",
    action: "أكشن",
    story: "قصص",
    local: "لعب محلي",
    racing: "سباقات",
    sports: "رياضة",
    kids: "أطفال"
};

const grid = document.getElementById("gamesGrid");
const searchInput = document.getElementById("searchInput");
const resultsInfo = document.getElementById("resultsInfo");
const emptyMessage = document.getElementById("emptyMessage");
const categoryButtons = document.querySelectorAll(".category");

let selectedCategory = "all";

function renderGames() {
    const searchText = searchInput.value.trim().toLowerCase();

    const filteredGames = games.filter(game => {
        const matchesCategory =
            selectedCategory === "all" ||
            game.categories.includes(selectedCategory);

        const matchesSearch =
            game.name.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;
    });

    grid.innerHTML = "";

    filteredGames.forEach(game => {
        const card = document.createElement("article");
        card.className = "game-card";

        const image = document.createElement("img");
        image.className = "game-image";
        image.src = game.image;
        image.alt = game.name;
        image.loading = "lazy";

        image.addEventListener("error", () => {
            const placeholder = document.createElement("div");
            placeholder.className = "image-placeholder";
            placeholder.textContent = game.name;
            placeholder.setAttribute("role", "img");
            placeholder.setAttribute("aria-label", game.name);
            image.replaceWith(placeholder);
        }, { once: true });

        const info = document.createElement("div");
        info.className = "game-info";

        const title = document.createElement("h2");
        title.className = "game-title";
        title.textContent = game.name;

        const tags = document.createElement("div");
        tags.className = "game-tags";

        game.categories.forEach(category => {
            const tag = document.createElement("span");
            tag.className = "game-tag";
            tag.textContent = categoryNames[category];
            tags.appendChild(tag);
        });

        const button = document.createElement("button");
        button.className = "details-button";
        button.type = "button";
        button.textContent = "عرض التفاصيل";
        button.addEventListener("click", () => showDetails(game));

        info.append(title, tags, button);
        card.append(image, info);
        grid.appendChild(card);
    });

    resultsInfo.textContent =
        `عدد الألعاب: ${filteredGames.length}`;

    emptyMessage.hidden = filteredGames.length !== 0;
}

function showDetails(game) {
    const modal = document.getElementById("gameModal");
    document.getElementById("modalTitle").textContent = game.name;
    document.getElementById("modalDescription").textContent =
        game.description;

    document.getElementById("modalSize").textContent =
        "حجم اللعبة: " + game.size;

    document.getElementById("modalPlayers").textContent =
        "اللاعبون: " + game.players;

    document.getElementById("modalOffline").textContent =
        "الإنترنت: " + game.offline;

    modal.hidden = false;
    document.getElementById("modalClose").focus();
}

function closeDetails() {
    document.getElementById("gameModal").hidden = true;
}

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedCategory = button.dataset.category;

        categoryButtons.forEach(item => {
            item.classList.toggle("active", item === button);
        });

        renderGames();
    });
});

searchInput.addEventListener("input", renderGames);

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("modalClose")
        .addEventListener("click", closeDetails);

    document.getElementById("gameModal")
        .addEventListener("click", event => {
            if (event.target.id === "gameModal") {
                closeDetails();
            }
        });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeDetails();
        }
    });

    renderGames();
});
