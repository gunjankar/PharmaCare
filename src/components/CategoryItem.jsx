import styled from "styled-components"


const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 50%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: buttom;
`;

const Title = styled.h1`
    color: black;
    margin-button: 20px;
    align-items: buttom;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: black;
    color: gray;
    cursor: pointer;
    font-weight: 1000;
`;


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>ORDER NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem