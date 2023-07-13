import Rating from "../Rating";

import {
  ContainerCard,
  HeaderComment,
  TitleCard
} from "./styles";


export default function Book() {
  return (
    <ContainerCard>
      <HeaderComment>
        <div>
          <img src="" alt="" />
        </div>
        <TitleCard>
          <div>
            <h2>A revolução dos bichos</h2>
            <p>George Orwell</p>
          </div>
          <Rating />
        </TitleCard>
      </HeaderComment>
    </ContainerCard>
  )

}