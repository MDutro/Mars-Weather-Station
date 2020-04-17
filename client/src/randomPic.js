function randomPic() {

  const pics = [
    '0670ML0028530050303657E01_DXXX.jpg',
    '0670ML0028530060303658E01_DXXX.jpg',
    '1274ML0059670050504560E01_DXXX.jpg',
    '1274ML0059680020504563E01_DXXX.jpg',
    '1274ML0059680040504565E01_DXXX.jpg',
    '1338MR0064210000700840E01_DXXX.jpg',
    '6097_pia17959-FigB_Sol553-Mcam-raw-full2.jpg',
    '7658_curiosity-mars-rover-self-portrait-martian-sand-dunes-pia20316-full2.jpg',
    '7728_Mars-MRO-orbiter-seasonal-flows-hale-crater-full2.jpg',
    '7834_hubble-mars-opposition-2016-full2.jpg',
    '8020_mars-curiosity-rover-msl-rock-layers-PIA21042-full2.jpg',
    '21444_PIA22232_1280.jpg',
    '21685_PIA22439_hires.jpg',
    '22116_PIA22743-16x9.jpg',
    'insightselfie.png',
    '22310_PIA22957_annotated.jpg',
    '22352_PIA23101.jpg',
    '22353_PIA23100.jpg',
    '22450_PIA23203-16x9.jpg',
    '22574_PIA23304.jpg',
    ]
  
  // Choose random index of pics array
  const rand = Math.floor(Math.random() * pics.length)

  return pics[rand]
}

export default randomPic;