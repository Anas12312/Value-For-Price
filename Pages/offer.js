import { View, Text, FlatList, Image, ScrollView, Modal, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import config from '../config';
import EnhancedImageViewing from 'react-native-image-viewing/dist/ImageViewing';

export default function offer({ navigation, route }) {

  const [id, setId] = useState(route.params.id);
  const [name, setName] = useState(route.params.name);
  const [description, setDescription] = useState(route.params.description);
  const [img, setImage] = useState(route.params.img);

  const [imgModals, setImgModals] = useState('');
  const [imgModalsVisible, setImgModalsVisible] = useState(false);

  const [steps, setSteps] = useState();


  useEffect(() => {
    fetch(config.BASE_URL + '/steps/' + id)
      .then(res => res.json())
      .then(result => {
        setSteps(result)
      })
  })

  return (
    <View className="flex h-full w-full justify-center items-center bg-slate-500">
      <EnhancedImageViewing
        images={[{uri:imgModals}]}
        imageIndex={0}
        visible={imgModalsVisible}
        onRequestClose={() => setImgModalsVisible(false)}
      />

      <FlatList
        ListHeaderComponent={(
          <View className="flex w-full justify-center items-center">
            <Image className="rounded-xl m-2" source={{ uri: img, width: 150, height: 150 }} />
            <Text className="text-white text-3xl font-bold">{name}</Text>
            <Text className="text-white text-lg ">{description}</Text>
          </View>
        )}
        data={steps}
        renderItem={(step) => {
          return (
            <View className='flex justify-center items-start bg-slate-400 w-screen my-3 py-3 px-2'>
              <Text className='font-bold text-white text-lg'>Step: {step.item.no}</Text>
              <Text className='text-white text-lg'>{step.item.text}</Text>
              {step.item.image_url && (
                <Pressable onTouchEnd={() => {
                  setImgModalsVisible(true);
                  setImgModals(step.item.image_url);
                }}>
                  <Image className="rounded-xl" source={{ uri: step.item.image_url, width: 200, height: 300 }} />
                </Pressable>
              )}
            </View>
          )
        }}
        keyExtractor={(item, index) => {
          return index;
        }}
      />
    </View>
  )
}