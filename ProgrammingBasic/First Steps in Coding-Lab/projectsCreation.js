function projectsCreation(input){
    let Name = input[0]
    let Project = Number (input[1])
    let Hour =  3 * Project
    let str = `The architect ${Name} will need ${Hour} hours to complete ${Project} project/s.`
    console.log(str)
    

}
projectsCreation(['George','4'])
