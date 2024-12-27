document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const searchButton = document.getElementById("search-btn");
    const gameCards = document.querySelectorAll(".game-card");
  
    const filterGames = () => {
        const query = searchInput.value.toLowerCase();
        gameCards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            if (title.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    };
  
    // Filter games on button click
    searchButton.addEventListener("click", filterGames);
  
    // Optional: Filter games as the user types
    searchInput.addEventListener("input", filterGames);
  });
  document.addEventListener("DOMContentLoaded", () => {
    const buyButtons = document.querySelectorAll(".buy-btn");
  
    buyButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const card = event.target.closest(".game-card");
            const gameTitle = card.querySelector("h3").textContent;
            const gamePrice = card.querySelector("p").textContent;
  
            // Save details to localStorage
            localStorage.setItem("checkoutGameTitle", gameTitle);
            localStorage.setItem("checkoutGamePrice", gamePrice);
  
            // Navigate to checkout page
            window.location.href = "checkout.html";
        });
    });
  
    // If on checkout page, populate the details
    if (window.location.pathname.includes("checkout.html")) {
        const gameTitle = localStorage.getItem("checkoutGameTitle");
        const gamePrice = localStorage.getItem("checkoutGamePrice");
  
        document.getElementById("checkout-game-title").textContent = gameTitle;
        document.getElementById("checkout-game-price").textContent = gamePrice;
    }
  });