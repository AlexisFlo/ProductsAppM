import { FlashList } from "@shopify/flash-list";
import React, { useRef, useState } from "react";
import { View, Text, Pressable, StyleSheet, Modal } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainerList: {
    paddingTop: 15,
    paddingLeft: 15,
  },
  header: {
    fontSize: 22,
    color: "#000",
    fontWeight: "bold",
  },
  headerContainer: {
    padding: 20,
    textAlign: "center",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B9C8DF",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    backgroundColor: "#4E9F3D", // Cambia el color de fondo del botón
    padding: 10, // Añade un padding al botón
    borderRadius: 5, // Añade bordes redondeados al botón
    marginTop: 10, // Añade un margen en la parte superior del botón
  },
  modalButtonText: {
    color: "#fff", // Cambia el color del texto del botón
    fontSize: 16, // Cambia el tamaño de la fuente del texto del botón
  },
});

const List = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const list = useRef(null);

  /*
  const removeItem = (item) => {
    setData(
      data.filter((dataItem) => {
        return dataItem !== item;
      })
    );
    list.current?.prepareForLayoutAnimationRender();

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };
  */

  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => {
          setSelectedItem(item);
          setModalVisible(true);
        }}>
        <View>
          <Text>Cell Id: {item}</Text>
        </View>
      </Pressable>
    );
  };

  const ListHeaderComponent = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Productos a comprar</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ListHeaderComponent />
      <FlashList
        ref={list}
        keyExtractor={(item) => {
          return item.toString();
        }}
        renderItem={renderItem}
        estimatedItemSize={100}
        data={data}
        contentContainerStyle={styles.contentContainerList}
      />
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modal}>
          <Text>Seleccionaste el elemento: {selectedItem}</Text>
          <Pressable
            style={styles.modalButton}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.modalButtonText}>Guardar</Text>
          </Pressable>
          <Pressable
            style={styles.modalButton}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.modalButtonText}>Cerrar</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default List;
