import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import config from '../config';
import { TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export default function Offers({navigation, route}) {
    const [offers, setOffers] = useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(true)
    const offerPressed = (offerId, offerName,offerDescription, image_url) => {
        navigation.navigate("Offer", {
            id: offerId,
            name: offerName,
            description: offerDescription,
            img: image_url
        })
    }
    const doneSearch = () => {
        
    }
    const searchHandler = () => {

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
    <View className="flex h-full w-full justify-center items-center bg-white flex-wrap mt-7">
        <View className="flex justify-center items-center flex-row w-[95%] h-10 pl-2 mt-2 bg-gray-200 rounded-md">
            <View className="text-red-200">
                <FontAwesomeIcon icon={faSearch} size={20}/>
            </View>
            <TextInput
                className="ml-2 flex justify-center items-center w-[90%] h-[90%]rounded-md"
                placeholder='Search Offers, Restaurants, Tags...'
            />
        </View>
        <View className="flex w-full h-12 bg-white rounded-md mt-1 flex-row justify-around items-center">
            <View className="w-[30%] bg-slate-500 h-5/6 rounded-md flex justify-center items-center"><Text>Offers</Text></View>
            <View className="w-[30%] bg-slate-500 h-5/6 rounded-md flex justify-center items-center"><Text>Restaurants</Text></View>
            <View className="w-[30%] bg-slate-500 h-5/6 rounded-md flex justify-center items-center"><Text></Text></View>
        </View>
        <FlatList
            data={offers}
            renderItem = {(offer) => {
                return (
                    <Pressable className="flex flex-row my-1" onTouchEnd={() => offerPressed(offer.item.id, offer.item.name, offer.item.description, offer.item.image_url)}>
                        <View className="m-1">
                            <Image className="rounded-xl" source={{uri:offer.item.image_url, width:150,height:150 }}/>
                        </View>
                        <View className="p-1 pt-3">
                            <Text className="text-xl w-1/3 font-bold leading-6">{offer.item.name}</Text>  
                            <Text className="text-xs w-1/3  leading-5">{offer.item.description}</Text>   
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