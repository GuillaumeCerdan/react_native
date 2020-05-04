import React from 'react';
import Storage from 'react-native-storage';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

/*const storage = new Storage({
    size: 10000,
    storageBackend: AsyncStorage, 
    defaultExpires: null, // Veut dire que ça n'expire jamais
    enableCache: true
});*/

export const getStorage = (key) => {
    return storage.load({
        key: 'onBoardingPassed',
        autoSync: false,
        syncInBackground: false
    });
    /*.then(data => {
        alert("data", data);
        //return data;
    })
    .catch(err => {
        console.warn(err.message);
        switch (err.name) {
        case 'NotFoundError':
            alert("La clé n'est pas attribuée, aucune donnée trouvée");
            break;
        case 'ExpiredError':
            alert("Devrait appeler la bonne méthode sync");
            break;
        }
    });*/
}

export const saveToStorage = (key, value, expires = null) => {
    storage.save({
        key: key,
        data: value,
        expires: expires
    });
}

export const destroyStorage = (key) => {
    storage.remove({
        key: key
    });
}


export const _storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      alert(error);
    }
};

export const _retrieveData = async (key) => {
    var result = null;
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return await JSON.parse(value);
      }
    } catch (error) {
        alert(JSON.stringify(error));
        return error;
    }
    return result;
};