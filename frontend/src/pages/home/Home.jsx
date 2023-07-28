import React from 'react'
import { Footer } from '../../components/footer/Footer'
import { MainHeader } from '../../components/mainHeader/MainHeader'
import { ColdDrinksJuices } from '../../components/products/Cold Drinks & Juices/ColdDrinksJuices'
import CardsSlider from '../../components/products/feature&Brands/FeatureBrands'
import { SnacksMunchies } from '../../components/products/Snacks & Munchies/SnacksMunchies'
import { SupersaverUp } from '../../components/products/SupersaverUp/SupersaverUp'
import { TopCatagories } from '../../components/products/top catagories/TopCatagories'
import { VegitableFruites } from '../../components/products/vegitable&fruites/Vegitable&Fruites'

export const Home = () => {
  return (
    <>
      <MainHeader />
      <VegitableFruites />
      <TopCatagories />
      <CardsSlider />
      <SnacksMunchies />
      <ColdDrinksJuices />
      <SupersaverUp />

      <Footer />
    </>
  )
}
