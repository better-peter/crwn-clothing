import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 21vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    .image {
      opacity: 0.8;
    }
    .button {
      opacity: 0.7;
      display: flex;
    }
  }
`;

export const AddToCartButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.5;
  position: absolute;
  bottom: 40px;
  display: none;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;

  //   min-width: 30%;
  //   flex: 1 1 auto;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   border: 1px solid black;

  //   overflow: hidden;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  //   &:hover {
  //     transform: scale(1.9);
  //     transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);

  //     & .content {
  //       opacity: 0.9;
  //     }
  //   }

  //   &.large {
  //     height: 380px;
  //   }

  //   &:first-child {
  //     margin-right: 7.5px;
  //   }

  //   &:last-child {
  //     margin-left: 7.5px;
  //   }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;
