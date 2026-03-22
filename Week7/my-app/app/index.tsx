import { ScrollView, View, Text, StyleSheet, SafeAreaView } from "react-native";
import CartForm from "../components/CartForm";
import CartList from "../components/CartList";
import TodoList from "../components/TodoList";

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🛒 Shopping Cart System</Text>
          <Text style={styles.headerSubtitle}>
            React Native + Redux Toolkit + TypeScript
          </Text>
        </View>

        <CartForm />
        <CartList />

        <View style={styles.divider} />

        <TodoList />

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2024 Shopping Cart App | Built with React Native
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#999",
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 24,
  },
  footer: {
    alignItems: "center",
    marginTop: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  footerText: {
    fontSize: 12,
    color: "#999",
  },
});

