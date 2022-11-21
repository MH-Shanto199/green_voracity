import Image from 'next/image';
import Link from 'next/link';

type productProps = {
  product: {
    name: string;
    slug: string;
    category: string;
    image: string;
    countInStock: string;
    brand?: string;
    price: number;
    netWeight: string;
    description: string;
  };
};

export default function ProductCard({ product }: productProps) {
  return (
    <>
      <div className="flex justify-center text-center relative w-full">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <Link href={`/product/${product.slug}`}>
            <img
              className="rounded-t-lg shadow-sm"
              src={product.image}
              alt=""
            />
          </Link>
          <div className="p-6">
            {product.brand ? <div className="brand">{product.brand}</div> : ''}
            <h1 className="text-gray-900 text-xl font-medium mb-2">
              {product.name}
            </h1>
            <div className="category">
              <span>Category:</span>
              {product.category}
            </div>
            <div className="unit">
              <span>available:</span>
              {product.countInStock}
            </div>

            <div className="price">
              <span>Price:</span> {product.price}৳ par {product.netWeight}
            </div>
            <button type="button" className="card-btn">
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
