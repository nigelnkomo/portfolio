// Blog posts

const projects = [
    {
        title: "Project One",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro deleniti, dolores quas error veniam. Ratione enim, natus doloribus totam, quo laborum dolores ex ipsum suscipit libero, aut nulla possimus?",
        image: "../assets/imgs/1.jpg",
    },
    {
        title: "Project Two",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro deleniti, dolores quas error veniam. Ratione enim, natus doloribus totam, quo laborum dolores ex ipsum suscipit libero, aut nulla possimus?",
        image: "../assets/imgs/2.jpg",
    },
    {
        title: "Project Three",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur porro deleniti, dolores quas error veniam. Ratione enim, natus doloribus totam, quo laborum dolores ex ipsum suscipit libero, aut nulla possimus?",
        image: "../assets/imgs/3.jpg",
    },
];

const createProjectCards = () => {
    projects.forEach((project) => {
        let projectSection = document.createElement("div");
        projectSection.classList.add("project-card");

        let projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        let imageContainer = document.createElement("div");
        imageContainer.classList.add("project-image-container");

        let image = document.createElement("img");
        image.classList.add("project-img");
        image.src = project.image;

        let projectDetails = document.createElement("div");
        projectDetails.classList.add("project-details");

        let projectTitle = document.createElement("h3");
        projectTitle.innerText = project.title;

        let projectInfo = document.createElement("p");
        projectInfo.innerText = project.info;

        imageContainer.appendChild(image);
        projectDetails.append(projectTitle, projectInfo);
        projectDiv.append(imageContainer, projectDetails);
        projectSection.appendChild(projectDiv);

        document.getElementById("projects").appendChild(projectSection);
    });
};

export { createProjectCards };
