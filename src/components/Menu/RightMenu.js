import React from 'react';
import Advert from '../Advert';
import cover from "../../images/cover.png";
import { StyledRightMenu } from './RightMenu.styled';

const RightMenu = ({ open }) => {
    return (
        <StyledRightMenu open={open}>
            <Advert imgPath={cover} />
        </StyledRightMenu>
    )
}

export default RightMenu;
