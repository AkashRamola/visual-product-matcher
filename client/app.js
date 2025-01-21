document.getElementById("upload-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const imageFile = document.getElementById("image").files[0];
    const imageUrl = document.getElementById("image-url").value;
    const uploadedImagePreview = document.getElementById("uploaded-image-preview");
    const resultsContainer = document.getElementById("results");
    const imagePreviewSection = document.getElementById("image-preview-section");
    const resultsSection = document.getElementById("results-section");

    // Clear previous results
    uploadedImagePreview.innerHTML = "";
    resultsContainer.innerHTML = "";
    imagePreviewSection.classList.add("hidden");
    resultsSection.classList.add("hidden");

    let imagePath = "";

    if (imageFile) {
        // Handle File Upload
        const formData = new FormData();
        formData.append("image", imageFile);

        const res = await fetch("http://localhost:5000/api/products/upload", {
            method: "POST",
            body: formData,
        });
        const data = await res.json();
        imagePath = data.path;
    } else if (imageUrl) {
        // Handle Image URL
        imagePath = imageUrl;
    }

    // Display Uploaded Image
    if (imagePath) {
        uploadedImagePreview.innerHTML = `<img src="${imagePath}" alt="Uploaded Image">`;
        imagePreviewSection.classList.remove("hidden");
    }

    // Fetch Similar Products
    const res = await fetch(`http://localhost:5000/api/products/similar?imagePath=${encodeURIComponent(imagePath)}`);
    const products = await res.json();

    // Display Similar Products
    if (products.length > 0) {
        products.forEach((product) => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p>Category: ${product.category}</p>
                <p>Similarity Score: ${product.similarityScore}</p>
            `;
            resultsContainer.appendChild(productElement);
        });
        resultsSection.classList.remove("hidden");
    } else {
        resultsContainer.innerHTML = "<p>No similar products found.</p>";
        resultsSection.classList.remove("hidden");
    }
});
