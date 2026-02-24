import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>  {/* ซ่อน header ของ Stack หลัก */}
      <Stack.Screen name="(tabs)" options={{headerShown: false}} /> {/* รวมหน้าต่างๆ ที่อยู่ใน Tab Layout */}
      <Stack.Screen
        name="detail" options={{
          title: "",
          headerTintColor: "#000000",
        }}
      />
    </Stack>
    
  );
}