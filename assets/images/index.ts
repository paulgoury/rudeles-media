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
  visits: string;
}

interface ImagesSubSectionPhilosophy {
  detailed: string;
  ourSecret: string;
}

interface ImagesSubSectionVisits {
  rudelesEssence: string[];
  barrelsAndFlavours: string[];
  amongVinesAndClayVats: string[];
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
  logoError: string;
  logoAndTextRudeles: string;
  backgrounds: ImagesBackgrounds;
  subSectionStory: ImagesSubSectionStory;
  subSectionPhilosophy: ImagesSubSectionPhilosophy;
  subSectionWines: ImagesBottles;
  subSectionVisits: ImagesSubSectionVisits;
}

export const Images: Types = {
  logo: new URL('./others/logo.png', import.meta.url).href,
  logoError: new URL('./others/logo-error.png', import.meta.url).href,
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
    vineyardPageWeather: new URL('./backgrounds/vineyardPageWeather.jpg', import.meta.url).href,
    visits: new URL('./backgrounds/visits.jpg', import.meta.url).href
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
  },
  subSectionVisits: {
    rudelesEssence: [
      new URL('./sliders/visits/rudelesEssence/a.jpg', import.meta.url).href,
      new URL('./sliders/visits/rudelesEssence/b.jpg', import.meta.url).href,
      new URL('./sliders/visits/rudelesEssence/c.jpg', import.meta.url).href,
      new URL('./sliders/visits/rudelesEssence/d.jpg', import.meta.url).href,
      new URL('./sliders/visits/rudelesEssence/e.jpg', import.meta.url).href,
      new URL('./sliders/visits/rudelesEssence/f.jpg', import.meta.url).href,
      new URL('./sliders/visits/rudelesEssence/g.jpg', import.meta.url).href
    ],
    barrelsAndFlavours: [
      new URL('./sliders/visits/barrelsAndFlavours/a.jpg', import.meta.url).href,
      new URL('./sliders/visits/barrelsAndFlavours/b.jpg', import.meta.url).href,
      new URL('./sliders/visits/barrelsAndFlavours/c.jpg', import.meta.url).href,
      new URL('./sliders/visits/barrelsAndFlavours/d.jpg', import.meta.url).href,
      new URL('./sliders/visits/barrelsAndFlavours/e.jpg', import.meta.url).href
    ],
    amongVinesAndClayVats: [
      new URL('./sliders/visits/amongVinesAndClayVats/a.jpg', import.meta.url).href,
      new URL('./sliders/visits/amongVinesAndClayVats/b.jpg', import.meta.url).href,
      new URL('./sliders/visits/amongVinesAndClayVats/c.jpg', import.meta.url).href,
      new URL('./sliders/visits/amongVinesAndClayVats/d.jpg', import.meta.url).href,
      new URL('./sliders/visits/amongVinesAndClayVats/e.jpg', import.meta.url).href,
      new URL('./sliders/visits/amongVinesAndClayVats/f.jpg', import.meta.url).href,
      new URL('./sliders/visits/amongVinesAndClayVats/g.jpg', import.meta.url).href,
      new URL('./sliders/visits/amongVinesAndClayVats/h.jpg', import.meta.url).href,
      new URL('./sliders/visits/amongVinesAndClayVats/i.jpg', import.meta.url).href,
      new URL('./sliders/visits/amongVinesAndClayVats/j.jpg', import.meta.url).href,
      new URL('./sliders/visits/amongVinesAndClayVats/k.jpg', import.meta.url).href,
      new URL('./sliders/visits/amongVinesAndClayVats/l.jpg', import.meta.url).href
    ]
  }
};
