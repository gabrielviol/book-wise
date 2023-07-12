import Image from "next/image";
import {
  ContainerComment,
  ContainerAvatar,
  HeaderComment,
  TitleComment,
  ContentComment,
  InfoBook
} from "./styles";
import Rating from "../Rating";
import Avatar from '../../images/Avatar.png'

export default function Comment() {
  return (
    <ContainerComment>
      <HeaderComment>
        <TitleComment>
          <ContainerAvatar>
            <Image src={Avatar} alt="Avatar" />
          </ContainerAvatar>
          <div>
            <h2>Gabriel Oliveira</h2>
            <p>Hoje</p>
          </div>
        </TitleComment>
        <Rating />
      </HeaderComment>
      <ContentComment>
        <div>
          Imagem livro
        </div>
        <InfoBook>
          <h2>O Hobbit</h2>
          <h3>J.R.R Tolkien</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quibusdam sunt facere perferendis saepe reprehenderit expedita reiciendis molestiae doloribus rem commodi eos aspernatur, impedit quis illum consequatur vero asperiores iste.</p>
        </InfoBook>
      </ContentComment>
    </ContainerComment>
  )

}