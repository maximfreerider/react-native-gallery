import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, FlatList, Image,
        Modal, TouchableOpacity, SafeAreaView
} from 'react-native';
import {connect} from 'react-redux';
import {fetchPhoto} from '../redux/thunkCreators/photo';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhoto: () => dispatch(fetchPhoto())
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos
  }
}


const ListOfPhotos = (props) => {

  const [isShow, setShow] = useState(false)
  const toggle = () => setShow(!isShow)

  useEffect(() => {
    props.fetchPhoto()
  }, [props.photos.photos])

  const renderPhoto = ({item}) => {
    return (
      <>
        <View style={styles.container} >
          <TouchableOpacity onPress={() => toggle()} >
            <Image style={{width: 300, height: 150}}
                   source={{uri: item.urls.small}} />
          </TouchableOpacity>
            <Text style={{fontSize: 19, marginTop: 5}}>{item.id}</Text>
            <Text style={{fontSize: 17, marginBottom: 15, marginTop: 3}}>{item.alt_description}</Text>
        </View>
        <Modal
          transparent={false}
          visible={isShow}
          onDismiss={() => toggle()}
          onRequestClose={() => toggle()}
        >
          <View style={styles.container}>
            <TouchableOpacity onPress={() => toggle()}>
            <Image style={{width: 400, height: 655}}
                   source={{uri: item.urls.full}}
            />
            </TouchableOpacity>
          </View>
        </Modal>
      </>
    )
  }

  return (
    <SafeAreaView style={{marginTop: 10, marginBottom: 10}}>
      <FlatList
        data={props.photos.photos}
        renderItem={renderPhoto}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListOfPhotos)
