import { Link } from "react-router-dom";
import styled from "styled-components";

export default function OrderFinish(prop) {

  if(prop.name){return (
    <>
    <Head>
      Pedido feito com sucesso!
    </Head>
    <Container data-identifier='movie-info'>
      <h1>Filme e sessao</h1><br/>
      {prop.movie.movie.title}<br/>
      {prop.movie.day.weekday} {prop.movie.name}<br/>
    </Container>
    
    <Container data-identifier='seats-info'>
      <h1>Ingressos</h1>
      {prop.seats.map((n) => <p>assento {n}</p>)}<br/>
      
      
    </Container>
    <Container data-identifier='client-info'>
    <h1>Comprador</h1><br/>
    Nome: {prop.name}<br/>
    CPF: {prop.cpf}<br/>
    </Container>
    <HomeBtn>
      <Link data-identifier='go-home-btn' to='/'>
       <input data-test='go-home-btn' type="button" value="Voltar para Home" />
      </Link>
    </HomeBtn>
    </>
    )}
    else{
      return(
        <Container>
        <h1>
        Volte Ao menu e faca seu pedido
        </h1>
        <Img><img src="./Assets/dfcjda2-74a21565-2f97-4b33-abf9-a55e45f6918b.gif"/></Img>
        <HomeBtn>
          <Link to='/'>
            <input type="button" value="Voltar para Home" />
          </Link>
        </HomeBtn>
        </Container>
      )
    }
  }
  
  const Head =styled.div`
    display: flex;
    font-size: 24px;
    font-weight: 400;
    color:#247a6b;
    justify-content: center;
    text-align: center;
    margin-top: 35px;
  `
  const Container = styled.div`
    margin-top: 35px;
    margin-left: auto;
    margin-right: auto;
    
    width: 90%;
    font-size: 22px;
    font-weight: 400;
   
    h1{
      font-weight: 700;
      font-size: 24px;
      line-height: 15px;
    }
  `

  const Img = styled.div`
  display: flex;
    justify-content: center;
    margin-top: 35px;
    img{
      margin-left: auto;
    margin-right:auto ;
     width: 75% ;
    }
  `

  const HomeBtn = styled.div`
  display: flex;
  justify-content: center;
  top: 60px;
  margin-bottom: 40px;
  position: relative;
    input{
      width: 225px;
      height: 42px;
      left: 74px;
      top: 622px;

      background: #E8833A;
      border-radius: 3px;
      border-style: solid;
      border-width: 0;
      cursor: pointer;
      margin-bottom: 40px;
    }
  `