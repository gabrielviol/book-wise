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
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

interface RatingProps {
  id: string
  bookId: string
  userId: string
  description: string
  rate: number
  createdAt: Date
}

export default function Home() {
  const [ratings, setRatings] = useState<RatingProps[] | null>(null)
  const getRatings = async () => {
    try {
      const response = await api.get('/get/rating')
      const ratings = response.data
      setRatings(ratings)
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    getRatings()
  }, [])
  console.log(ratings)
  return (
    <Container>
      <Navbar />
      <Content>
        <span><ChartLineUp size={28} />Início</span>
        <p>Avaliações mais recentes</p>
        <Comment />
        {ratings?.map(rating => (
          <Comment />
        ))}
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