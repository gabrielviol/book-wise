import Rating from "../Rating";

import {
  ContainerCard,
  HeaderComment,
  TitleCard,
  ContentCard
} from "./styles";


export default function BookCard() {
  return (
    <ContainerCard>
      <HeaderComment>
        <div>
          <img src="" alt="" />
        </div>
        <TitleCard>
          <div>
            <h2>Gabriel Oliveira</h2>
            <p>Hoje</p>
          </div>
          <Rating />

        </TitleCard>
      </HeaderComment>
      <ContentCard>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quibusdam sunt facere
          perferendis saepe reprehenderit expedita reiciendis molestiae doloribus rem commodi
          eos aspernatur, impedit quis illum consequatur vero asperiores iste.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quibusdam sunt facere
          perferendis saepe reprehenderit expedita reiciendis molestiae doloribus rem commodi
          eos aspernatur, impedit quis illum consequatur vero asperiores iste.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quibusdam sunt facere
          perferendis saepe reprehenderit expedita reiciendis molestiae doloribus rem commodi
          eos aspernatur, impedit quis illum consequatur vero asperiores iste.
        </p>
      </ContentCard>
    </ContainerCard>
  )

}