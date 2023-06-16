const main = document.getElementsByClassName("main")[0];

const services = await axios.get("https://autsorsing-backend.onrender.com/getServices");

services.data.map((service) => {
  const title = document.createElement("title");
  title.classList.add("title");
  title.innerText = service.title;

  main.appendChild(title);

  service.subservice.map((sub) => {
    const offer = document.createElement("div");
    offer.classList.add("offer_point");

    const name = document.createElement("p");
    name.classList.add("title_point");
    name.innerText = sub.name;

    const cost = document.createElement("span");
    cost.classList.add("point_cost");
    cost.innerText = sub.price;

    offer.appendChild(name);
    offer.appendChild(cost);

    main.appendChild(offer);
  });
});

const decorLine = document.createElement("div");
decorLine.classList.add("decor_line")

const divButton = document.createElement("div");
divButton.classList.add("button");

const link = document.createElement("a");
link.href = "../../index.html";
link.classList.add("button_back");
link.innerText = "На главную";

divButton.appendChild(link);

main.appendChild(decorLine);
main.appendChild(divButton);

