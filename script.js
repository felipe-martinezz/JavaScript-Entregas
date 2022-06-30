let pais
let test = ""

do {
    pais = prompt("Ingrese su país Campeón del Mundo").toLowerCase()
}while(pais == test)

switch(pais) {
    case "españa":
        alert("1 Copa del Mundo")
        break
    case "inglaterra":
        alert("1 Copa del Mundo")
        break
    case "argentina":
        alert("2 Copas del Mundo")
        break
    case "uruguay":
        alert("2 Copas del Mundo")
        break
    case "francia":
        alert("2 Copas del Mundo")
        break
    case "italia":
        alert("4 Copas del Mundo")
        break
    case "alemania":
        alert("4 Copas del Mundo")
        break
    case "brasil":
        alert("5 Copas del Mundo")
        break
    default:
        alert("Tu país no ganó nada")
        break                 
}