import { View } from "react-native";
import {
  ContainerTitle,
  Container,
  Image,
  ContainerBottom,
  ContainerVisual,
  ContainerDescription,
  ContainerDetails,
} from "./styles";
import { LinearGradient } from "expo-linear-gradient";

export function CharacterContainer() {
  return (
    <View>
      <Container>
        <Image source={require("@assets/charactercontainer1.png")} />
        <ContainerVisual colors={["transparent", "#800000"]}></ContainerVisual>
        <ContainerDescription
          style={{
            marginLeft: 45,
            marginTop: 170,
          }}
        >
          Após ser mordido por uma aranha {"\n"} radioativa, Peter Parker se
          torna {"\n"} o amigo da vizinhança, o Homem-{"\n"}Aranha
        </ContainerDescription>
        <ContainerDetails
          style={{
            marginLeft: 70,
            marginTop: 220,
          }}
        >
          Ver detalhes
        </ContainerDetails>
        <ContainerTitle
          style={{
            marginLeft: 60,
            marginTop: 140,
          }}
        >
          Homem Aranha
        </ContainerTitle>

        <Image source={require("@assets/charactercontainer2.png")} />
        <ContainerVisual
          colors={["transparent", "#800000"]}
          style={{ marginLeft: 220 }}
        ></ContainerVisual>
        <ContainerTitle
          style={{
            marginLeft: 245,
            marginTop: 140,
          }}
        >
          Wanda Waximoff
        </ContainerTitle>
        <ContainerDescription
          style={{
            marginLeft: 240,
            marginTop: 170,
          }}
        >
          Wanda Maximoff foi sequestrada{"\n"} da Sérvia e trazida para a{"\n"}{" "}
          Montanha Wundagore, base do{"\n"} Alto Evolucionário.{" "}
        </ContainerDescription>
        <ContainerDetails
          style={{
            marginLeft: 265,
            marginTop: 220,
          }}
        >
          Ver detalhes
        </ContainerDetails>
      </Container>
      <ContainerBottom>
        <Image source={require("@assets/charactercontainer3.png")} />
        <ContainerVisual
          colors={["transparent", "#800000"]}
          style={{
            marginTop: 114,
          }}
        ></ContainerVisual>
        <ContainerTitle
          style={{
            marginLeft: 90,
            marginTop: 140,
          }}
        >
          Thanos
        </ContainerTitle>
        <ContainerDescription
          style={{
            marginLeft: 50,
            marginTop: 170,
          }}
        >
          A lua Titã era governada por{"\n"} Mentor (A'Lars), quando então{"\n"}{" "}
          reinava paz e tecnologia. Mentor{"\n"} tinha dois filhos: Eros e
          Thanos.{" "}
        </ContainerDescription>
        <ContainerDetails
          style={{
            marginLeft: 72,
            marginTop: 216,
          }}
        >
          Ver detalhes
        </ContainerDetails>
        <Image source={require("@assets/charactercontainer4.png")} />
        <ContainerVisual
          colors={["transparent", "#800000"]}
          style={{ marginLeft: 220 }}
        ></ContainerVisual>

        <ContainerTitle style={{ marginLeft: 286, marginTop: 150 }}>
          Hulk
        </ContainerTitle>
        <ContainerDescription style={{ marginLeft: 236, marginTop: 172 }}>
          Na história original dos{"\n"} quadrinhos, o Hulk é um selvagem{"\n"}{" "}
          e poderoso alter ego do Dr. Robert{"\n"} Bruce Banner.
        </ContainerDescription>
        <ContainerDetails style={{ marginLeft: 260, marginTop: 218 }}>
          Ver detalhes
        </ContainerDetails>
      </ContainerBottom>
    </View>
  );
}
