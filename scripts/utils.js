const projects = [
  {
    title: "Project One",
    image: "/assets/imgs/1.jpg",
  },
  {
    title: "Project Two",
    image: "/assets/imgs/2.jpg",
  },
  {
    title: "Project Three",
    image: "/assets/imgs/3.jpg",
  },
];

const createProjectCards = () => {
  projects.forEach((project) => {
    let projectSection = document.createElement("div");
    projectSection.classList.add("project-card");

    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    // Image container
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("project-image-container");

    let image = document.createElement("img");
    image.classList.add("project-img");
    image.src = project.image;

    // Overlay
    let overlay = document.createElement("div");
    overlay.classList.add("project-overlay");

    let overlayTitle = document.createElement("h3");
    overlayTitle.innerText = project.title;

    let overlayButton = document.createElement("button");
    overlayButton.innerText = "Open Project";

    overlay.append(overlayTitle, overlayButton);

    imageContainer.append(image, overlay);

    projectDiv.append(imageContainer);
    projectSection.appendChild(projectDiv);

    document.getElementById("projects").appendChild(projectSection);
  });
};

export { createProjectCards };
