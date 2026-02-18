import React from "react";

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <a
  href={`https://wa.me/919080087187?text=${encodeURIComponent(
`✨ New Saree Enquiry ✨

Hello Anushalabel 👋,

A customer is interested in the following saree:

🛍 Product Name: ${product.name}
💰 Price: ₹${product.price}

📸 Product Image: 
${window.location.origin + product.image}

Kindly connect with the customer for further details.

Thank you 🙏`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="whatsapp-btn">
    Enquire on WhatsApp
  </button>
</a>
    </div>
  );
}

export default ProductCard;