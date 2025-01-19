interface ImagesSubSectionStory {
  passionForTheVineyard: string;
  theNameRudeles: string;
  theTeam: string;
  theTradition: string;
  theVillage: string;
}

interface ImagesBackgrounds {
  home: string;
  story: string;
  philosophy: string;
  vineyard: string;
  wines: string;
  shop: string;
  vineyardPageVineyard: string;
  vineyardPageParcel: string;
  vineyardPageStrain: string;
  vineyardPageWeather: string;
}

interface ImagesSubSectionPhilosophy {
  detailed: string;
  ourSecret: string;
}

interface ImagesBottles {
  cepasJovenes: string;
  cerroElCuberillo: string;
  fincaLaNacion: string;
  rudeles23: string;
  losArenales: string;
  rudeles23Albillo: string;
  aire: string;
  rudeles23Rosado: string;
}

interface Types {
  logo: string;
  logoAndTextRudeles: string;
  backgrounds: ImagesBackgrounds;
  subSectionStory: ImagesSubSectionStory;
  subSectionPhilosophy: ImagesSubSectionPhilosophy;
  subSectionWines: ImagesBottles;
}

export const Images: Types = {
  logo: new URL('./others/logo.png', import.meta.url).href,
  logoAndTextRudeles: new URL('./others/logoAndTextRudeles.png', import.meta.url).href,
  backgrounds: {
    home: new URL('./backgrounds/home.jpg', import.meta.url).href,
    story: new URL('./backgrounds/story.jpg', import.meta.url).href,
    philosophy: new URL('./backgrounds/philosophy.jpg', import.meta.url).href,
    vineyard: new URL('./backgrounds/vineyard.jpg', import.meta.url).href,
    wines: new URL('./backgrounds/wines.jpg', import.meta.url).href,
    shop: new URL('./backgrounds/shop.jpg', import.meta.url).href,
    vineyardPageVineyard: new URL('./backgrounds/vineyardPageVineyard.jpg', import.meta.url).href,
    vineyardPageParcel: new URL('./backgrounds/vineyardPageParcel.jpg', import.meta.url).href,
    vineyardPageStrain: new URL('./backgrounds/vineyardPageStrain.jpg', import.meta.url).href,
    vineyardPageWeather: new URL('./backgrounds/vineyardPageWeather.jpg', import.meta.url).href
  },
  subSectionStory: {
    passionForTheVineyard: new URL('./others/passionForTheVineyard.png', import.meta.url).href,
    theNameRudeles: new URL('./others/theNameRudeles.png', import.meta.url).href,
    theTeam: new URL('./others/theTeam.png', import.meta.url).href,
    theTradition: new URL('./others/theTradition.png', import.meta.url).href,
    theVillage: new URL('./others/theVillage.png', import.meta.url).href
  },
  subSectionPhilosophy: {
    detailed: new URL('./others/detailed.png', import.meta.url).href,
    ourSecret: new URL('./others/ourSecret.png', import.meta.url).href
  },
  subSectionWines: {
    cepasJovenes: new URL('./bottles/cepasJovenes.png', import.meta.url).href,
    cerroElCuberillo: new URL('./bottles/cerroElCuberillo.png', import.meta.url).href,
    fincaLaNacion: new URL('./bottles/fincaLaNacion.png', import.meta.url).href,
    rudeles23: new URL('./bottles/rudeles23.png', import.meta.url).href,
    losArenales: new URL('./bottles/losArenales.png', import.meta.url).href,
    rudeles23Albillo: new URL('./bottles/rudeles23Albillo.png', import.meta.url).href,
    aire: new URL('./bottles/aire.png', import.meta.url).href,
    rudeles23Rosado: new URL('./bottles/rudeles23Rosado.png', import.meta.url).href
  }
};
