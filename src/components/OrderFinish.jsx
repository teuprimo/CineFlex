import styled from "styled-components";

export default function OrderFinish(prop) {
    return (
    <>
    <Head>
      Pedido feito com sucesso!
    </Head>
    <Container>
      <h1>Filme e sessao</h1><br/>
      a<br/>
      a<br/>
    </Container>
    
    <Container>
      <h1>Ingressos</h1> <br/>
      a<br/>
      a
      
    </Container>
    <Container>
    <h1>Comprador</h1><br/>
    Nome:<br/>
    CPF:<br/>
    </Container>
    <HomeBtn>
      <input type="button" value="Voltar para Home" />
    </HomeBtn>
    </>
    );
  }
  
  const Head =styled.div`
    display: flex;
    font-size: 24px;
    font-weight: 400;
    color:#247a6b;
    justify-content: center;
    text-align: center;
    
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
  const HomeBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
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
    }
  `