import {
  Button,
  FlatList,
  Modal,
  Pressable,
  RenderItem,
  StyleSheet,
  Text,
  TextInput,
  View,
  decelerationRate,
  showsHorizontalScrollIndicator,
  width,
} from "react-native";
import React, { useEffect, useState } from "react";

import { Colors } from "./colors";

export default function App() {

  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItemToState = () => {
    setItems((oldArry) => [...oldArry, { id: Date.now(), value: itemText }]);
    setItemText("");
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  const onDeleteModal = (id) => {
    setModalVisible(!modalVisible);
    setItems((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem(null);
  };
  const onCancelModa2 = (id)
 

  return (
    <View style={styles.screen}>
         <Text style={styles.compras}>LISTA DE COMPRAS

</Text>
      <View style={styles.addItemInputContainer}>
     
        <TextInput
          placeholder="Agregar a la lista"
          style={styles.input}
          onChangeText={onChangeText}
          value={itemText}
        />
        <Button title="Agregar" onPress={addItemToState}/>
      </View>
      <FlatList
        
        data={items}
      
        renderItem={(itemData) => (
          <Pressable
            style={styles.itemContainer}
            onPress={() => {
              openModal(itemData.item);
            }}
          >
            <Text style={styles.item}>{itemData.item.value}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalMainView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Eliminar Item</Text>
            <Text style={styles.modalText}>
              ¿Ya compraste{" "}
              <Text style={styles.modalBoldText}>{selectedItem?.value}</Text>?
            </Text>
            <View style={styles.modalActions}>
              <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={onCancelModal}
              >
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonDelete]}
                onPress={() => {
                  onDeleteModal(selectedItem.id);
                }}
              >
                <Text style={styles.textStyle}>Si</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fbfaf8',
  },
  addItemInputContainer: {
  
    marginTop: 30,
    marginHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  itemContainer: {
    marginTop: 25,
    margin: 1,
    padding: 5,
    borderRadius: 25,
    backgroundColor: "#e7decd",
  },
  item: {
    padding: '4%',
    textAlign: "center",
    
  },
  modalMainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 27,
    backgroundColor: "#0f7173",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  modalTitle: {
    padding: 40,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: 'white'
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: 'white'
  },
  modalBoldText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 40,
    padding: 10,
    marginHorizontal: 10,
  },
  buttonCancel: {
    backgroundColor: "#e7ecef",
  
  
    
  },
  buttonDelete: {
    backgroundColor: "#c1292e",
  },
  compras: {
    fontSize: 40,
    height: 100,
    marginTop: 50,
    textAlign: 'center',
    backgroundColor: '#9908',
    borderRadius: 29,
    padding: 25,
  },

});