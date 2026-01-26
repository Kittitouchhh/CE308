import React from "react";
import {
  StyleSheet, Text, View, ScrollView, FlatList
} from 'react-native'

const DATALike = [
  { id: '1', title: 'ผู้หญิง' },
  { id: '2', title: 'สาวๆ' },
  { id: '3', title: 'คนสวยๆ' },
  { id: '4', title: 'โนมหย่ายหย่าย' },
  { id: '5', title: 'เขียนเว็บ' },
  { id: '6', title: 'เล่นเกม' },
];

const DATAnotLike = [
  { id: '1', title: 'เติ้ล บอส' },
  { id: '2', title: 'ไอฟอร์ด' },
  { id: '3', title: 'ไอห. ต้า' },
  { id: '4', title: 'ไม่ใช่สาวๆ' },
  { id: '5', title: 'ไม่ใช่คนสวยๆ' },
  { id: '6', title: 'ไม่ใช่ โนมหย่ายหย่าย' },
  { id: '7', title: 'ตับ' },
];

export default function App() {

  const renderItem = ({ item }: { item: { id: string; title: string } }) => (
    <View style={styles.itemContainer}>
      <View style={styles.dot} />
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>

      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: '#c94ada' }]}>
          <Text style={styles.boxText}>
            รหัส
          </Text>
          <Text style={styles.boxText}>
            66111596
          </Text>
        </View>

        <View style={[styles.box, { backgroundColor: '#f7741e' }]}>
          <Text style={styles.boxText}>
            คณะ
          </Text>
          <Text style={styles.boxText}>
            วิศวกรรมศาสตร์
          </Text>
        </View>

        <View style={[styles.box, { backgroundColor: '#37817c' }]}>
          <Text style={styles.boxText}>
            สาขา
          </Text>
          <Text style={styles.boxText}>
            วิศวคอมพิวเตอร์
          </Text>
        </View>
      </View>

      <View style={styles.contentSection}>
        <Text style={styles.title}>ข้อมูลส่วนตัว:</Text>
        <View style={styles.listItem}>
          <Text>ชื่อ: กิตติธัช สกุลศักดิ์พินิจ</Text>
        </View>
        <View style={styles.listItem}>
          <Text>ชื่อเล่น: กัส</Text>
        </View>
        <View style={styles.listItem}>
          <Text>อีเมล: kittitouch.dev@gmail.com</Text>
        </View>
      </View>

      <View style={styles.contentSection}>
        <Text style={styles.title}>การศึกษา:</Text>
        <View style={styles.listItem}>
          <Text>การศึกษา: มหาวิทยาลัยธุรกิจบัณฑิตย์</Text>
        </View>
        <View style={styles.listItem}>
          <Text>สาขา: วิศวกรรมคอมพิวเตอร์ (ปีที่3)</Text>
        </View>
      </View>

      <View style={styles.contentSection}>
        <Text style={styles.title}>ที่อยู่:</Text>
        <View style={styles.listItem}>
          <Text>123/456 ซอยดวงจันทร์ หมู่บ้านพี่เต้</Text>
        </View>
      </View>


      <View>
        <FlatList
          data={DATALike}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={<Text style={styles.headerFlatList}>สิ่งที่สนใจ</Text>}
        />
      </View>

      <View>
        <FlatList
          data={DATAnotLike}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={<Text style={styles.headerFlatList}>สิ่งที่ไม่สนใจไม่ชอบ เกลียด</Text>}
        />
      </View>


    </ScrollView>
  );
};


const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
  },
  header: {
    height: 100,
    backgroundColor: '#1A535C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  box: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 8
  },
  boxText: {
    color: 'white',
    fontWeight: '600'
  },
  contentSection: {
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  listItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#d31111',
  },
  contentSectionFlatList: {
    marginTop: 20,
  },

  headerFlatList: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: '#f7971a',
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#5e0a59',
    marginRight: 10,
  },

  itemText: {
    fontSize: 18,
  },

});



// {
//   Array.from({ length: 10 }).map((_, index) => (
//     <View key={index} style={styles.listItem}>
//       <Text>รายการที่ {index + 1}: เรียนรู้เรื่อง React Native Layout</Text>
//     </View>
//   ))
// }