const products = [
    {
      id: 1,
      name: "flux capacitor"
    },
    {
      id: 2,
      name: "power laces"
    },
    {
      id: 3,
      name: "time circuits"
    },
    {
      id: 4,
      name: "low voltage reactor"
    },
    {
      id: 5,
      name: "warp equalizer"
    }
  ];

document.addEventListener('DOMContentLoaded', () => {
    // Populate the product select options
    const productNameSelect = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });

    // Handle form submission and review count
    const form = document.getElementById('reviewForm');
    form.addEventListener('submit', () => {
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);
    });
});
