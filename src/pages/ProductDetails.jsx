import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { axiosInstance } from "../apis/config";
import "../assets/css/productDetails.css";
export default function ProductDetails() {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    axiosInstance
      .get(`/products/${params.id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [params.id]);

  return (
    <div className="container">
      {isLoading && (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      <div className="row">
        <div className="col-md-12">
          <div class="card cardDetail mb-3">
            <div class="row no-gutters">
              <div class="col-md-4 mr-5">
                <img
                  src={
                    product?.images.length > 1
                      ? product?.images?.[1]
                      : product?.images?.[0]
                  }
                  className="card-img-top"
                  alt={product?.name}
                />
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h2 class="card-title">{product?.title}</h2>
                  <p class="card-text">{product?.description}</p>
                  <h5>{product?.price}$</h5>
                  <h5>
                    {" "}
                    {product?.rating} <i class="fa-solid fa-star"></i>
                  </h5>
                </div>
                <div className="checkStuck text-start">
                  {product?.availabilityStatus === "In Stock" ? (
                    <span className="inStock">In Stock</span>
                  ) : (
                    <span className="outOfStock">Out Of Stock</span>
                  )}
                </div>
                <div className="footer text-center">
                  <button
                    className="btn btn-info"
                    onClick={() => reDirectToDetails(props.productItem.id)}
                  >
                    Buy now
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => onDelete(recipeItem.id)}
                  >
                    Add to Cart <i class="fa-solid fa-cart-shopping"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
