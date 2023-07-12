import { Star } from "@phosphor-icons/react";
import { DivRating } from "./styles";

export default function Rating() {
  return (
    <DivRating>
      <Star size={14} weight="fill" />
      <Star size={14} weight="fill" />
      <Star size={14} weight="fill" />
      <Star size={14} />
      <Star size={14} />
    </DivRating>
  )
}