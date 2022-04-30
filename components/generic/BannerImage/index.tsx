import { ReactNode,FC } from "react";
import  Image  from 'next/image';
import { Position } from "../interfaces";
import BannerTemplate from "../templates/sections/BannerTemplate"
import  Inner  from '@components/generic/layouts/Inner';
interface Element{
    position:Position;
    content:ReactNode;
}
interface Props {
    image:string,
    elements:Element[]
}
const BannerImage:FC<Props> = ({ image, elements }) => {
    return(
    <Inner marginY={'medium'}>
    <BannerTemplate
        image={<Image src={image} alt="banner"layout="fill"/>}
        elements={elements}
    />
    </Inner>
        )
}
export default BannerImage;