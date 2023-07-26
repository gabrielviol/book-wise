import { useSelector } from "react-redux";
import { UserState } from "@/store/reducers/usersReducer";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import Image from "next/image";

import Avatar from "../Avatar";
import Rating from "../Rating";

import {
  ContainerComment,
  HeaderComment,
  TitleComment,
  ContentComment,
  InfoBook
} from "./styles";
import { BookState } from "@/store/reducers/booksReducer";

interface CommentProps {
  userId: string
  bookId: string
  createdAt: Date
}

export default function Comment({ userId, bookId, createdAt }: CommentProps) {

  const users = useSelector(UserState)
  const userSelected = users.find(user => user.id === userId)

  const books = useSelector(BookState)
  const bookSelected = books.find(book => book.id === bookId)

  const parts = bookSelected?.cover_url.split("books/");
  const imageName = parts[1] ? parts[1] : ''
  const linkImg = `/images/books/${imageName}`

  const dateFormated = formatDateToRelativeTime(createdAt)
  function formatDateToRelativeTime(date) {
    const formattedDate = formatDistanceToNow(new Date(date), { addSuffix: true, locale: ptBR });
    return formattedDate;
  }

  return (
    <ContainerComment>
      <HeaderComment>
        <TitleComment>
          <Avatar userId={userId} />
          <div>
            <h2>{userSelected?.name}</h2>
            <p>{dateFormated}</p>
          </div>
        </TitleComment>
        <Rating />
      </HeaderComment>
      <ContentComment>
        <Image
          src={linkImg}
          alt={bookSelected ? bookSelected.name : 'null'}
          width={108}
          height={152}
          quality={80}
        />
        <InfoBook>
          <h2>{bookSelected.name}</h2>
          <h3>{bookSelected.author}</h3>
          <p>
            {bookSelected.summary}
          </p>
        </InfoBook>
      </ContentComment>
    </ContainerComment>
  )
}