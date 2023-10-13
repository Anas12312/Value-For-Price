import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import config from '../config';

export default function offers({navigation, route}) {
    const [offers, setOffers] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const offerPressed = (offerId, offerName,offerDescription, image_url) => {
        navigation.navigate("Offer", {
            id: offerId,
            name: offerName,
            description: offerDescription,
            img: image_url
        })
    }
    useEffect(()=>{
        setIsLoading(true)
        fetch(config.BASE_URL + "/offers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                search: "",
                count: 5,
                start: 1
            })
        }) 
        .then((res) => res.json())
        .then((response) => {
            setOffers(response)
            setIsLoading(false)
        })
    },[])
  return (
    <View className="flex h-full w-full justify-center items-center bg-slate-500 flex-wrap p-1">
        <FlatList
            data={offers}
            renderItem = {(offer) => {
                return (
                    <Pressable className="flex flex-row my-1" onTouchEnd={() => offerPressed(offer.item.id, offer.item.name, offer.item.description, offer.item.image_url)}>
                        <View className="m-1">
                            <Image className="rounded-xl" source={{uri:offer.item.image_url, width:150,height:150 }}/>
                        </View>
                        <View className="p-1 pt-3">
                            <Text className="text-white text-xl w-1/3 font-bold leading-6">{offer.item.name}</Text>  
                            <Text className="text-white text-xs w-1/3  leading-5">{offer.item.description}</Text>   
                        </View>
                    </Pressable>
                );
            }}
            keyExtractor={(item, index) => {
                return index;
            }}
        />
    </View>
  )
}