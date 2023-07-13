import Navbar from "@/components/Navbar";
import { Container, ContainerAnalytics, Content } from "./styles";
import { MagnifyingGlass, User } from "@phosphor-icons/react";
import BookCard from "@/components/BookCard";
import Analytics from "@/components/Analytics";
import Input from "@/components/Input";

export default function Profile() {
  return (
    <Container>
      <Navbar />
      <Content>
        <span><User size={28} />Início</span>
        <Input placeholder="Buscar livros avaliados" size={'small'} />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </Content>
      <ContainerAnalytics>
        <Analytics />
      </ContainerAnalytics>
    </Container>
  )
}