import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import {
  MapView,
  Camera,
  VectorSource,
  FillLayer,
  LineLayer,
} from "@maplibre/maplibre-react-native";

export default function ExampleMap() {
  const tileUrl = "http://192.168.8.123:8080/data/v3/{z}/{x}/{y}.pbf";

  return (
    <View style={{flex: 1}}>
      <MapView style={{flex: 1}}>
        <Camera zoomLevel={6} centerCoordinate={[19.127, 52.221]} />
        
        <VectorSource
          id="osmVectorTiles"
          tileUrlTemplates={[tileUrl]}
          minZoomLevel={0}
          maxZoomLevel={14}
        >
          {/* Land */}
          <FillLayer
            id="land"
            sourceLayerID="land"
            style={{ fillColor: "#d8f5d1", fillOpacity: 1 }}
          />

          {/* Water */}
          <FillLayer
            id="water"
            sourceLayerID="water"
            style={{ fillColor: "#a0c8f0", fillOpacity: 1 }}
          />

          {/* Streets */}
          <LineLayer
            id="streets"
            sourceLayerID="transportation"
            style={{
              lineColor: "#555",
              lineWidth: 2,
            }}
          />

          {/* Buildings */}
          <FillLayer
            id="buildings"
            sourceLayerID="building"
            style={{ fillColor: "#999999", fillOpacity: 0.7 }}
          />
        </VectorSource>
      </MapView>
      <View style = {styles.buttonContainer}>
        <Pressable 
          style = {styles.locationButton}
          onPress={addLocationFunction}>
          <Text> 
            add location 
          </Text>
        </Pressable>
      </View>
      <View style = {styles.centerDot}/>
    </View>
  );
}

const addLocationFunction = () => {
  return
}

const styles = StyleSheet.create({
  centerDot: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 10,
    height: 10,
    backgroundColor: 'red'
  },
  buttonContainer: {
    alignContent: 'flex-start'
  },
  locationButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10
  }
});
