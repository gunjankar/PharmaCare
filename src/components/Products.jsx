import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Title = styled.h1`
    margin-top: 30px;
`;

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const Products = () => {
  return (
    <Container>
          {popularProducts.map(item=>(
              <Product item={item} key={item.id} />
          ))}
    </Container>
  );
};

export default Products;
