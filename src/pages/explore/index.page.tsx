import Navbar from "@/components/Navbar";
import { Button, Categories, Container, Content, Header, ListBooks } from "./styles";
import { Binoculars } from "@phosphor-icons/react";
import Input from "@/components/Input";
import BookCard from "@/components/BookCard";
import Book from "@/components/Book";

export default function Explore() {
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
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
        </ListBooks>
      </Content>
    </Container>
  )
}