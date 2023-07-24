import Image from "next/image";
import Rating from "../Rating";

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
  const parts = cover_url.split("books/");
  const imageName = parts[1]
  const linkImg = `/images/books/${imageName}`
  console.log(linkImg)
  return (
    <ContainerCard>
      <HeaderComment>
        <div>
          <Image
            src={linkImg}
            width={108}
            height={152}
            alt={name}
            loading="eager"
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