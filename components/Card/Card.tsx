import { Product } from "@chec/commerce.js/types/product";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "styled-components";
import { NanoTheme } from "../../styles/theme";
import { Button } from "../Button/Button.styled";
import { CardContent, CardImgContainer, CardItem, CardTitle } from "./Card.styled";

interface CardProps {
  product: Product;
  btnText: string;
  btnLink?: string;
}

const Card = ({product, btnText, btnLink}: CardProps) => {
  const theme = useTheme() as NanoTheme;
  const {image, name, price, description, id} = product;

  return (
    <CardItem key={id}>
    <CardImgContainer>
      <Image 
        src={image?.url || '/taronja.gif'} 
        alt={image?.description || ''}
        width='100%' height='100%' layout='responsive' objectFit='cover' 
        style={{borderRadius: '10px'}} 
      />
    </CardImgContainer>
    <CardContent>
      <CardTitle>
        <h3>{name}</h3>
        <h3>{price.formatted_with_symbol}</h3>
      </CardTitle>
      <div dangerouslySetInnerHTML={{__html: description}} style={{ fontFamily: theme.fonts[2]}}/>
    </CardContent>
    <div className='cardButtonDiv'>
      <Link passHref href={btnLink || ''} >
        <Button>{btnText}</Button>
      </Link>
      
    </div>
  </CardItem> 
  )
}

export default Card