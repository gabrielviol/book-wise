import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { CaretRight, ChartLineUp } from "@phosphor-icons/react";
import { useDispatch } from "react-redux"

import Rating from "@/components/Rating";
import Comment from "@/components/Comment";
import Navbar from "@/components/Navbar";

import { fetchBooks, fetchUsers } from "@/store/fetchActions";

import {
  BookCard,
  Container,
  Content,
  HeaderTrending,
  TrendingBooks
} from "./styles";

interface RatingProps {
  id: string
  book_id: string
  user_id: string
  description: string
  rate: number
  created_at: Date
}

export default function Home() {
  const [ratings, setRatings] = useState<RatingProps[] | null>(null)

  const dispatch = useDispatch()

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
    dispatch(fetchUsers())
    dispatch(fetchBooks())
    getRatings()
  }, [])

  return (
    <Container>
      <Navbar />
      <Content>
        <span><ChartLineUp size={28} />Início</span>
        <p>Avaliações mais recentes</p>
        {ratings?.map((rating, i) => (
          <Comment
            key={rating.book_id + i}
            userId={rating.user_id}
            bookId={rating.book_id}
            createdAt={rating.created_at}
          />
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