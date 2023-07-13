import { CaretRight, ChartLineUp } from "@phosphor-icons/react";

import Rating from "@/components/Rating";
import Comment from "@/components/Comment";
import Navbar from "@/components/Navbar";

import {
  BookCard,
  Container,
  Content,
  HeaderTrending,
  TrendingBooks
} from "./styles";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Content>
        <span><ChartLineUp size={28} />Início</span>
        <p>Avaliações mais recentes</p>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
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