import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 653px;
  /* left: 23.04px; */
  top: 32.04px;

  background: #ffffff;
`;

export const Title = styled.Text`
  position: absolute;
  height: 68px;
  left: 15px;
  top: 121.15px;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #1a1a1a;
`;

export const SubTitle = styled.Text`
  position: absolute;
  height: 30px;
  top: 193.58px;
  font-family: 'SFPRODISPLAYBOLD';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #44566c;
`;
export const TxtButton = styled.Text`
  width: 34px;
  height: 20px;
  font-family: 'SFPRODISPLAYBOLD';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 50px;
  gap: 10px;
  position: absolute;
  width: 265.33px;
  height: 36px;
  left: 15px;
  top: 445.15px;
  background: #513ccc;
  border-radius: 6px;
`;
