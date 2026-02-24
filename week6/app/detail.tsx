import { View, Text, StyleSheet, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Details() {
    const { name, price } = useLocalSearchParams();

    const imageMap: any = {
        Mouse: "https://cdn.rentokil.com/content/global/images/desktop/main_house-mouse-mus-musculus.jpg",
        Keyboard: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_214,q_auto,w_380/c_pad,h_214,w_380/F7950930-01?pgw=1",
        Screen: "https://home.washerhouse.com/uploads/posts/2019-04/1556533940_1.jpg",
    };

    const imageUrl = imageMap[name as string];

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imageUrl }}
                style={styles.image}
                resizeMode="cover"
            />
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.price}>฿{price}</Text>
            <Text style={styles.desc}>นี่คือรายละเอียดสินค้า</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    title: { fontSize: 22, fontWeight: "bold" },
    price: { fontSize: 18, color: "red", marginVertical: 8 },
    desc: { color: "#666" },
    image: {width: "100%",height:500 ,borderRadius: 16,marginBottom: 20,
    }

});