import { BookOpen, BookmarkSimple, Books, UserList } from "@phosphor-icons/react";
import Avatar from "../Avatar";
import { Container, ContentInfo, Gap, Info, Title, UserName } from "./styles";

export default function Analytics() {
  return (
    <Container>
      <Title>
        <Avatar />
        <UserName>
          <h2>Gabriel Oliveira</h2>
          <p>membro desde 2022</p>
        </UserName>
        <Gap />
      </Title>
      <Info>

        <ContentInfo>
          <BookOpen size={32} />
          <div>
            <h1>3853</h1>
            <h2>Páginas lidas</h2>
          </div>
        </ContentInfo>

        <ContentInfo>
          <Books size={32} />
          <div>
            <h1>10</h1>
            <h2>Livros avaliados</h2>
          </div>
        </ContentInfo>

        <ContentInfo>
          <UserList size={32} />
          <div>
            <h1>8</h1>
            <h2>Autores lidos</h2>
          </div>
        </ContentInfo>

        <ContentInfo>
          <BookmarkSimple size={32} />
          <div>
            <h1>Computação</h1>
            <h2>Categoria mais lida</h2>
          </div>
        </ContentInfo>

      </Info>
    </Container>
  )
}