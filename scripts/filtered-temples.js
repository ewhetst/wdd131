const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function() {
    const navigationLinks = document.querySelectorAll('.navigation a');

    navigationLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            navigationLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            
            link.classList.add('active');

            const mainTitle = document.querySelector('main h2');
            mainTitle.textContent = link.getAttribute('title');

            const filter = link.getAttribute('title');
            filterAndDisplayTemples(filter);
        });
    });
});


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Columbia River",
        location: "Richland, Washington",
        dedicated: "2001, November, 18",
        area: 16880,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbia-river-washington/400x250/columbia-river-temple-lds-1030774-wallpaper.jpg"
      },
      {
        templeName: "Oklahoma City",
        location: "Olkahoma City, Oklahoma",
        dedicated: "2000, July, 30",
        area: 10769,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oklahoma-city-oklahoma/400x250/1-Oklahoma-City-Temple-2231521.jpg"
      },
      {
        templeName: "Rexburg",
        location: "Rexburg, Idaho",
        dedicated: "2008, February, 10",
        area: 57504,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rexburg-idaho/400x250/rexburg-temple-775365-wallpaper.jpg"
      },
      {
        templeName: "Denver Colorado",
        location: "Denver, Colorado",
        dedicated: "1986, October, 24",
        area: 27006,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/denver-colorado/400x250/denver-colorado-temple-lds-845690-wallpaper.jpg"
      },
      {
        templeName: "Logan Utah",
        location: "Logan, Utah",
        dedicated: "1884, May, 14",
        area: 119619 ,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-temple-760446-wallpaper.jpg"
      },
  ];
  function createTempleCard(temple) {
    const templeCard = document.createElement('figure');
    templeCard.classList.add('temple-card');

    const name = document.createElement('h3');
    name.textContent = temple.templeName;
    
    const location = document.createElement('figcaption');
    location.textContent = temple.location;
    
    const dedicated = document.createElement('figcaption');
    dedicated.textContent = "Dedicated: " + temple.dedicated;
    
    const area = document.createElement('figcaption');
    area.textContent = "Area: " + temple.area + " sq ft";
    
    const image = document.createElement('img');
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = 'lazy';
    
    
 
    templeCard.appendChild(name);
    templeCard.appendChild(location);
    templeCard.appendChild(dedicated);
    templeCard.appendChild(area);
    templeCard.appendChild(image);
    
    return templeCard;
  }
  
  function filterAndDisplayTemples(filter) {
    const templeContainer = document.getElementById('templeContainer');
    templeContainer.innerHTML = '';
    
    let filteredTemples = [];
    if (filter === 'Old') {
      filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900);
    } else if (filter === 'New') {
      filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000);
    } else if (filter === 'Large') {
      filteredTemples = temples.filter(temple => temple.area > 90000);
    } else if (filter === 'Small') {
      filteredTemples = temples.filter(temple => temple.area < 10000);
    } else if (filter === 'Home') {
      filteredTemples = temples;
    }
    
    filteredTemples.forEach(temple => {
      const templeCard = createTempleCard(temple);
      templeContainer.appendChild(templeCard);
    });
  }
  

  filterAndDisplayTemples('Home');