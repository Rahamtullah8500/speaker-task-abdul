
// js/app.js
document.addEventListener("DOMContentLoaded", () => {
  const sliderContainer = document.getElementById("slider");

  const speakers = [
    {
      name: "John Doe",
      role: "Chief Marketing Officer",
      organization: "XYZ Corporation",
      image: "../assets/images/profile.png",
      description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
   
    },
    {
      name: "Jane Smith",
      role: "Head of Product",
      organization: "ABC Corp",
      image: "../assets/images/profile1.png",
      description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
   
    },
    {
      name: "Michael Lee",
      role: "Lead Engineer",
      organization: "Tech Solutions",
      image: "../assets/images/profile2.png",
      description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
   
    },
    {
      name: "Alice Johnson",
      role: "Senior Developer",
      organization: "Innovative Tech",
      image: "../assets/images/profile3.png",
      description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
   
    },
    {
      name: "Chris Brown",
      role: "Product Manager",
      organization: "NextGen Solutions",
      image: "../assets/images/profile1.png",
      description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
   
    },
    {
      name: "Emily Davis",
      role: "Design Lead",
      organization: "Creative Studios",
      image: "../assets/images/profile2.png",
      description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
   
    },
  ];

  const popup = document.getElementById("speakerPopup");
  const popupClose = document.getElementById("popupClose");
  const popupTitle = document.getElementById("popupTitle");
  const popupRole = document.getElementById("popupRole");
  const popupOrganization = document.getElementById("popupOrganization");
  const popupDescription = document.getElementById("popupDescription");
  const popupImage = document.getElementById("popupImage");


  speakers.forEach((speaker) => {
    const card = document.createElement("div");
    card.classList.add("swiper-slide"); 

    const img = document.createElement("img");
    img.classList.add("slider__card-img");
    img.src = speaker.image;
    img.alt = `${speaker.name}'s profile`;

    const title = document.createElement("h3");
    title.classList.add("slider__card-title");
    title.textContent = speaker.name;

    const role = document.createElement("p");
    role.classList.add("slider__card-role");
    role.textContent = speaker.role;

    const organization = document.createElement("p");
    organization.classList.add("slider__card-organization");
    organization.textContent = speaker.organization;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(role);
    card.appendChild(organization);

  card.addEventListener("click", () => {
    popupImage.src = speaker.image;
    popupTitle.textContent = speaker.name;
    popupRole.textContent = speaker.role;
    popupOrganization.textContent = speaker.organization;
    popupDescription.textContent = speaker.description;
    popup.style.display = "block";
  });

  sliderContainer.querySelector(".swiper-wrapper").appendChild(card);
});

popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});


  new Swiper(".swiper-container", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "slider",
    breakpoints: {
      768: {
        slidesPerView: 4,
      },
      480: {
        slidesPerView: 1,
      },
    },
  });
});
