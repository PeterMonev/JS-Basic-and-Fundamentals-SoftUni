function fishTank(input){
    const length = Number(input[0])
    const width= Number(input[1])
    const height = Number(input[2])
    const percent = Number(input[3]) / 100
    
    const volumeAquarium = length * width * height
    const Litre = volumeAquarium / 1000
    
    const neededLitre = Litre * (1 - percent)


    


 
       console.log(neededLitre)

}

fishTank(["85 ","75 ","47 ","17 "])