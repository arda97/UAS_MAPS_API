import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.5469008,
          longitude: 115.307412
        },
        title: 'Stadion Kapten I Wayan Dipta',
        subtitle: 'berlokasi di Buruan, Blahbatuh, Kabupaten Gianyar'
      },
      {
        key:2,
        latlng: {
          latitude:-8.5469008,
          longitude: 115.307412
        },
        title: 'KPP Pratama Gianyar',
        subtitle: 'Jalan By Pass Dharma Giri, Desa Buruan, Kec.Blahbatuh, Kab.Gianyar, Buruan, Kec. Gianyar, Kabupaten Gianyar'
      },
      {
        key:3,
        latlng: {
          latitude:-8.5469008,
          longitude: 115.307412
        },
        title: 'Agung Automal gianyar',
        subtitle: 'Jl. Dharma Giri, Buruan, blah batuh, Buruan, Blahbatuh, Gianyar, Bali 80851'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.5465618,
          longitude: 115.3059686
        },
        title: 'Indomobil Nissan Datsun Bali Gianyar',
        subtitle: 'Jl. By Pass Darmagiri, Blok J No. 6 Blahbatuh, Gianyar, Buruan, Blahbatuh, Gianyar, Bali 80581'
      },
      {
        key: 5,
        latlng: {
          latitude: -8.543689,
          longitude: 115.3107862
        },
        title: 'Rumah Saya : I Putu Arda Paramtapa (1515051025)',
        subtitle: 'Jln By Pass Darma Giri ling.Roban Bitera Gianyar'
      },
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta lingkungan by Pass Darmagiri, Gianyar
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> http://www.rey1024.com </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
