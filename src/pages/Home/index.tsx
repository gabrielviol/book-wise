import { BookCard, Button, ButtonLogin, Container, Content, HeaderTrending, NavBar, TrendingBooks } from "./styles";
import { Binoculars, CaretRight, ChartLineUp, SignIn, Star } from "@phosphor-icons/react";
import Image from "next/image";

import Logo from '../../images/Logo.png'

import Rating from "@/components/Rating";
import Comment from "@/components/Comment";

export default function Home() {
  return (
    <Container>
      <NavBar>
        <div>
          <Image src={Logo} alt="Logo" />
          <Button active="true"><ChartLineUp size={24} />Início</Button>
          <Button><Binoculars size={24} />Explorar</Button>
        </div>
        <ButtonLogin>Fazer login <SignIn size={24} /></ButtonLogin>
      </NavBar>
      <Content>
        <span><ChartLineUp size={28} />Início</span>
        <p>Avaliações mais recentes</p>
        <Comment />
      </Content>
      <TrendingBooks>
        <HeaderTrending>
          <h2>Livros populares</h2>
          <button>Ver todos <CaretRight size={12} /></button>
        </HeaderTrending>
        <BookCard>
          Imagem
          <div>
            <div>
              <h2>Revolução dos bichos</h2>
              <p>George Orwell</p>
            </div>
            <Rating />
          </div>
        </BookCard>
        <BookCard>
          Imagem
          <div>
            <div>
              <h2>Revolução dos bichos</h2>
              <p>George Orwell</p>
            </div>
            <Rating />
          </div>
        </BookCard>
      </TrendingBooks>
    </Container>
  )
}