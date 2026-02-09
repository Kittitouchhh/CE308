import { View, Text, FlatList } from "react-native";
import { CustomButton } from "./Button";

type cardProps = {
    itemsCard: { id: string; name: string; price: number ;
        amount: number; btnSize: string; btnColor: string;}[];
};

export const Card = ({ itemsCard }: cardProps) => {
    return (
        <FlatList
            data={itemsCard}
            keyExtractor={(itemC) => itemC.id}
            renderItem={({ item }) => (
                <View className="bg-gray-300 w-[350px] my-5 p-2 rounded-xl">
                    <Text className="text-xl font-bold">ชื่อสินค้า : {item.name}</Text>
                    <Text className="text-sm ">ราคา : {item.price}</Text>
                    <Text className="text-sm ">จำนวน : {item.amount}</Text>
                    <CustomButton
                        title="สั่งซื้อ"
                        variant={item.btnColor as "blue" | "red" | "gray"}
                        size={item.btnSize as "sm"|"md"|"lg"}
                        onPress={() => console.log("โอเคคคคคคคค")}
                    />
                </View>
            )}
        />
    );
}