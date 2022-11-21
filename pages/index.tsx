import Head from 'next/head';
import Layout from '../Fragments/Components/Layout';
import ProductCard from '../Fragments/Components/ProductCard';
import data from '../utils/data';

export default function Home() {
  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.products.map((product) => (
          <ProductCard product={product} key={product.slug} />
        ))}
      </div>
    </Layout>
  );
}
