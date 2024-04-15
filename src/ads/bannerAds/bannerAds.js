import { View} from 'react-native'
import React from 'react'
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9042490279958793/6722282790';

export const BannerAds = () => {
  return (
    <View style={{alignItems:"center"}}>
      <BannerAd
        size={BannerAdSize.BANNER}
        unitId={adUnitId}
      />
    </View>
  )
}