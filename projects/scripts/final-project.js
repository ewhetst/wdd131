document.addEventListener('DOMContentLoaded', () => {
    // Set the current year
    const currentYearElement = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    // Set the last modified date
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = lastModifiedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    lastModifiedElement.textContent = formattedDate;

    // Project data
    const projects = [
        {
            title: "Wooden Coasters",
            description: "Engraved wooden coasters with intricate designs.",
            image: "images/wooden-coasters.jpg"
        },
        {
            title: "Metal bottle",
            description: "Engraved through powder coat see design on a stainless bottle.",
            image: "images/bottle.png"
        },
        {
            title: "Layered flag",
            description: "Personalized wood flag cut and unique engravings.",
            image: "images/flag.png"
        }
    ];

    // Load projects dynamically
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectsContainer.appendChild(projectElement);
    });
});
