const offersContainer = document.getElementsByClassName("offers_container")[0];

const cards = await axios.get("https://autsorsing-backend.onrender.com/getFirstCards");



cards.data.map((card, index) => {
  const offer = document.createElement("div");
  offer.className += "offer offer" + (index + 1);

  const title = document.createElement("h4");
  title.classList.add("offer_title");
  title.innerText = card.title;

  const subtitle = document.createElement("p");
  subtitle.classList.add("offer_subtitle");
  subtitle.innerText = card.description;

  const leaveOrder = document.createElement("a");
  leaveOrder.href = "#";
  leaveOrder.classList.add("offer_submit");
  leaveOrder.innerHTML = "Оставить заявку";
  leaveOrder.id = index + 1;

  const offerPoints = document.createElement("ul");
  offerPoints.classList.add("offer_points");

  
  card.price[0].map((p) => {
    const offerPrice = document.createElement("li");
    offerPrice.classList.add("point_style");
    offerPrice.innerText = p;

    offerPoints.appendChild(offerPrice);
  });

  offer.appendChild(title);
  offer.appendChild(subtitle);
  offer.appendChild(leaveOrder);
  offer.appendChild(offerPoints);
  
  offersContainer.insertBefore(offer, offersContainer.lastElementChild);
});

let open_popupButtons = document.querySelectorAll(".open_popup,.offer_submit");

open_popupButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("service", e.target.id);
    popup_bg.classList.add("active");
    popup.classList.add("active");
  });
});