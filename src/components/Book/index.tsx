import Image from "next/image";
import Rating from "../Rating";
import img from '/public/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png';

import {
  ContainerCard,
  HeaderComment,
  TitleCard
} from "./styles";

interface BookProps {
  author: string;
  cover_url: string;
  created_at: string;
  id: string;
  name: string;
  summary: string;
  total_pages: number;
}

export default function Book({ book }: { book: BookProps }) {
  const { author, cover_url, created_at, id, name, summary, total_pages } = book;
  const linkImg = `/${cover_url}`
  console.log(linkImg)
  return (
    <ContainerCard>
      <HeaderComment>
        <div>
          <Image
            src={img}
            width={108}
            height={152}
            quality={100}
            alt="Capa livro"
          />
        </div>
        <TitleCard>
          <div>
            <h2>{name}</h2>
            <p>{author}</p>
          </div>
          <Rating />
        </TitleCard>
      </HeaderComment>
    </ContainerCard>
  )

}