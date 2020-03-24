import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 21vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    & .image {
      transform: scale(1.6);
      transition: transform 8s cubic-bezier(0.25, 0.45, 0.45, 0.95);

      opacity: 0.8;
    }
    .button {
      opacity: 0.7;
      display: flex;
    }
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 90%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  margin-bottom: 5px;
  z-index: -1;
`;

export const AddToCartButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.5;
  position: absolute;
  bottom: 40px;
  display: none;
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 10%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 80%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 20%;
  text-align: right;
`;
