import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { createProduct } from "../../services/product"
import Layout from '../shared/Layout'
import './AddProduct.scss'


export default function AddProduct(props) {

  const [product, setProduct] = useState({
    brand: "",
    productName: "",
    size: "",
    price: "",
    unit: "",
    salePrice: "",
    unitPrice: "",
    category: "",
    imageUrls: ""
  })

  const [isCreated, setIsCreated] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({ ...product, [name]: value })
    //this sets the product to the previous version of the product, but then overwrites the targeted key's value with the updated value
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(product)
    const created = await createProduct(product)
    // const created = "test"
    // above is for testing only
    setIsCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/admin/products/`} />
  }
  //change this to /admin/products or something later probably


  return (
    <Layout user={props.user}>
      <div className="AddProduct">
        <form
          className="add-product-form"
          onSubmit={handleSubmit}
        >
          <input
            className="input-brand"
            placeholder="Brand"
            value={product.brand}
            name="brand"
            required
            onChange={handleChange}
          />
          <input
            className="input-product-name"
            placeholder="Product Name"
            value={product.productName}
            name="productName"
            required
            onChange={handleChange}
          />
          <input
            className="input-size"
            placeholder="Size"
            value={product.size}
            name="size"
            onChange={handleChange}
          />
          <input
            className="input-price"
            placeholder="Price"
            value={product.price}
            name="price"
            required
            onChange={handleChange}
          />
          <input
            className="input-unit"
            placeholder="Unit"
            value={product.unit}
            name="unit"
            onChange={handleChange}
          />
          <input
            className="input-sale-price"
            placeholder="Sale Price"
            value={product.salePrice}
            name="salePrice"
            onChange={handleChange}
          />
          <input
            className="input-unit-price"
            placeholder="Unit Price"
            value={product.unitPrice}
            name="unitPrice"
            onChange={handleChange}
          />
          <input
            className="input-category"
            placeholder="Category"
            value={product.category}
            name="category"
            onChange={handleChange}
          />
          <input
            className="input-image-urls"
            placeholder="Image URLs"
            value={product.imageUrls}
            name="imageUrls"
            required
            onChange={handleChange}
          />
          <button
            type="submit" className="submit-button"
          >
            Update
   </button>
        </form>

      </div>
    </Layout>
  )
}
