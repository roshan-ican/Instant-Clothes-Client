import React from "react";
import styled, { css } from "styled-components/native";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Button,
} from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: papayawhip;
`;
const Title = styled.Text`
  font-size: 22px;
  color: palevioletred;
  font-weight: 500;
`;
const ButtonContainer = styled.TouchableOpacity`
	width: 100px;
  
	height: 40px
	padding: 12px;
	border-radius: 10px;	
	background-color: ${(props) => props.backgroundColor};
`;

const ButtonText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.textColor};
  text-align: center;
`;

const CustomButton = (props) => (
  <ButtonContainer
    onPress={() => alert("Hi, No Orders now")}
    backgroundColor={props.backgroundColor}
  >
    <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
  </ButtonContainer>
);

const UserScreen = () => {
  return (
    <>
      <Container>
        <Title>User Name</Title>
      </Container>
      <Container>
        <Title>Email</Title>
      </Container>
      <Container>
        <Title>Phone</Title>
      </Container>
      <Container>
        <Title>Address</Title>
        <CustomButton
          text="Orders"
          textColor="#01d1e5"
          backgroundColor="lavenderblush"
        />
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  infoContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
});
export default UserScreen;
