
//Variable de nombre ⬇⬇
let nombreCompleto = document.getElementById("nombre-completo")
//Variable de nombre ⬆⬆

//Variable de calcular ⬇⬇
let calcular = document.getElementById("boton")
//Variable de calcular ⬆⬆

//Variable de peso ⬇⬇
let peso = document.getElementById("peso")
//Variable de peso ⬆⬆

//Array donde se almacenan las fichas⬇⬇
const almacenDefichas = []
//Array donde se almacenan las fichas⬆⬆

//Array de nombres ⬇⬇
const nombres = []
//Array de nombres ⬆⬆

//INCIO DE CALCULADORA COMPLETA
calcular.onclick = (altura, peso) => {
    //CALCULAR IMC
    altura = document.getElementById("altura").value;
    peso = document.getElementById("peso").value;
    let alturaXAltura = parseFloat(altura) * parseFloat(altura)
    let calcularImc = Math.round(parseInt(peso) / alturaXAltura)
    let mostrar = document.getElementById("resultado")
    mostrar.value = `Tu IMC es de` + ` ` + calcularImc + `%`
    //CACULAR IMC FINAL

    //CALCULAR ESTADO DE SALUD 
    let mostrarEstadoDeSalud = document.getElementById("resultado-estadodesalud")


    switch (calcularImc) {
        case 15:
        case 16:
        case 17:
        case 18:
            mostrarEstadoDeSalud.value = `Peso muy bajo`
            break;
        case 19:
        case 20:
        case 21:
        case 22:
            mostrarEstadoDeSalud.value = `Peso saludable`
            break;
        case 23:
        case 24:
        case 25:
        case 26:
            mostrarEstadoDeSalud.value = `Sobrepeso`
            break;
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
            mostrarEstadoDeSalud.value = `Obesidad`
            break;
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
            mostrarEstadoDeSalud.value = `obesidad morvida`
            break;



        default:
            mostrarEstadoDeSalud.value = `Error digito no valido`
            break;
    }

    //CALCULAR ESTADO DE SALUD FINAL

    let actividadXDia = document.getElementById("actividad").value
    let resultadoBasal = document.getElementById("resultado-tasa")
    let pesoXParametroBenedic = peso * 22
    const numeroDeActividadXDia = [1.2, 1.375, 1.55, 1.725, 1.9]

    switch (actividadXDia) {
        case "1":
            resultadoBasal.value = Math.round(numeroDeActividadXDia[0]) * pesoXParametroBenedic + " KALORIAS X DIA"
            break;
        case "2":
            resultadoBasal.value = Math.round(numeroDeActividadXDia[1]) * pesoXParametroBenedic + " KALORIAS X DIA"
            break;
        case "3":
            resultadoBasal.value = Math.round(numeroDeActividadXDia[2]) * pesoXParametroBenedic + " KALORIAS X DIA"
            break;
        case "4":
            resultadoBasal.value = Math.round(numeroDeActividadXDia[3]) * pesoXParametroBenedic + " KALORIAS X DIA"
            break;
        case "5":
            resultadoBasal.value = Math.round(numeroDeActividadXDia[4]) * pesoXParametroBenedic + " KALORIAS X DIA"
            break;
        default:
            resultadoBasal.value = "Especifique seleccion"
            break;
    }


    let seleccionarSexo = document.getElementById("seleccionar-sexo").value
    let resultadoProteina = document.getElementById("resultado-proteinas")
    switch (seleccionarSexo) {
        case "mujer":
            resultadoProteina.value = peso * 0.85 + " DE PROTEINA X DIA"
            break;
        case "hombre":
            resultadoProteina.value = peso * 1.25
            break;
        default:
            resultadoProteina.value = "Especifique seleccion"
            break;
    }

    //CALCULAR ESTADO DE SALUD FINAL

    //CREAR OBJETO
    class Personas {
        static numero = 0
        constructor(nombre, imc, salud, basal, proteina) {
            this.nombre = nombre
            this.imc = imc
            this.salud = salud
            this.basal = basal
            this.proteina = proteina
        }
    }

    const almacenar = new Personas(nombreCompleto.value, mostrar.value, mostrarEstadoDeSalud.value, resultadoBasal.value, resultadoProteina.value)
    almacenDefichas.push(almacenar)
    //CREAR OBJETO FINAL



    //GUARDAR FICHAS
    let guardarFicha = document.getElementById("boton-guardar")
    let fichasCarrusel = document.getElementById("contenedor-generador")

    guardarFicha.onclick = () => {
        almacenDefichas.forEach((ficha) => {
            let containerFichas = document.createElement("div")
            let containerScroll = document.createElement("div")
            containerScroll.className = "tarjetas"
            containerFichas.className = "contenedor-de-fichas"
            containerScroll.innerHTML = `<h2>Nombre:${ficha.nombre}</h2>` +
                `<h2>Su IMC:${ficha.imc}</h2>` +
                `<h2>El estado de su peso es:${ficha.salud}</h2>` +
                `<h2>Sus kalorias diarias son:${ficha.basal}</h2>` +
                `<h2>Sus proteinas diarias son:${ficha.proteina}</h2>`
            fichasCarrusel.appendChild(containerFichas)
            containerFichas.appendChild(containerScroll)
            localStorage.setItem("fichasAlmacenadas", JSON.stringify(almacenDefichas))
        })




    }
    //GUARDAR FICHAS FINAL

    //FLECHAS PARA MOVER CARRUSEL
    let flechaIzquierda = document.getElementById("ir-izquierda")
    let flechaDerecha = document.getElementById("ir-derecha")

    flechaIzquierda.onclick = () => {
        fichasCarrusel.scrollLeft -= 200
    }

    flechaDerecha.onclick = () => {
        fichasCarrusel.scrollLeft += 200
    }
    //FLECHAS PARA MOVER CARRUSEL FINAL




}
//FINAL DE CALCULADORA COMPLETA