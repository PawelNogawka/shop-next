import React from "react";

import Wrapper from "../../components/Wrapper";
import Product from "../../components/Product";
import { client } from "../../lib/client";

const CategoriesItems = ({ products }) => {
  return (
    <main>
      <Wrapper>
        <section className="categories-items section-padding">
          <div className="categories-items__container">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </section>
      </Wrapper>
    </main>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "category"] {
    slug {
      current
    }
  }
  `;

  const categories = await client.fetch(query);

  const paths = categories.map((category) => ({
    params: {
      slug: category.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const productsQuery = `*[_type == 'product' && category->name == '${params.slug}']`;

  const products = await client.fetch(productsQuery);

  return {
    props: {
      products,
    },
  };
};
export default CategoriesItems;
