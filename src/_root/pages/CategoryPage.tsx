import Loading from "@/components/Loading";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  //   lot of temp code here
  const getProducts = async (category: any) => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://65dafdac3ea883a15290faca.mockapi.io/api/v1/products"
      );

      if (
        category === "all" ||
        category === "sell" ||
        category === "best-seller" ||
        category === "todays-deal"
      ) {
        setProducts(response.data);
        setLoading(false);
      } else {
        const filteredProducts = response.data.filter(
          (product: any) => product.category.toLowerCase() === category
        );
        setProducts(filteredProducts);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts(category);
  }, [category]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-[var(--main-background)] flex justify-center">
      <div className="xl:mx-auto w-full py-8 flex justify-center p-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-4">
          {products &&
            products.map((product: any, key: any) => (
              <ProductCard
                productId={product.id}
                thumbnail={product.preview_img}
                description={product.description}
                key={key}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
