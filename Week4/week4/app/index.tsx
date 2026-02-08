import { View, FlatList } from "react-native";
import ItemCard from "../app/component/Card";

const products = [
  { id: "1", name: "iPhone 15", price: 35900, pcs: 10 },
  { id: "2", name: "MacBook Air", price: 42900, pcs: 5 },
  { id: "3", name: "AirPods Pro", price: 8900, pcs: 20 },
];

export default function ProductScreen() {
  return (
    <View className="flex-1 bg-white p-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemCard product={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
