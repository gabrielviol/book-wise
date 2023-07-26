import Navbar from "@/components/Navbar";
import { Button, Categories, Container, Content, Header, ListBooks } from "./styles";
import { Binoculars } from "@phosphor-icons/react";
import Input from "@/components/Input";
import Book from "@/components/Book";
import { useDispatch, useSelector } from "react-redux";
import { BookState } from "@/store/reducers/booksReducer";

interface BookProps {
  author: string
  cover_url: string
  created_at: string
  id: string
  name: string
  summary: string
  total_pages: number
}

export default function Explore() {
  const books = useSelector(BookState)

  return (
    <Container>
      <Navbar />
      <Content>
        <Header>
          <span><Binoculars size={28} />Início</span>
          <Input placeholder="Buscar livro ou autor" />
        </Header>
        <Categories>
          <Button active="true">Tudo</Button>
          <Button>Computação</Button>
          <Button>Educação</Button>
          <Button>Fantasia</Button>
          <Button>Ficção científica</Button>
          <Button>Horror</Button>
          <Button>HQs</Button>
          <Button>Suspense</Button>
        </Categories>
        <ListBooks>
          {books?.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </ListBooks>
      </Content>
    </Container>
  )
}