import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import config from '../config';

export default function offer({ navigation, route }) {

  const [id, setId] = useState(route.params.id);
  const [name, setName] = useState(route.params.name);
  const [description, setDescription] = useState(route.params.description);

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
      <View className="flex w-full justify-center items-center">
        <Text className="text-white text-3xl font-bold">{name}</Text>
        <Text className="text-white text-lg ">{description}</Text>
      </View>
      <FlatList
        data={steps}
        renderItem={(step) => {
          return (
            <View className='flex justify-center items-start bg-slate-400 w-screen my-3 py-3'>
              <Text className='font-bold text-white text-lg'>Step: {step.item.no}</Text>
              <Text className='text-white text-lg'>{step.item.text}</Text>
              {step.item.image_url && (
                <Image className="rounded-xl" source={{uri:step.item.image_url, width:150,height:150 }} />
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