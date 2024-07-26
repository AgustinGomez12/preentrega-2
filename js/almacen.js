let fichasStorage = localStorage.getItem("fichasAlmacenadas")
fichasStorage = JSON.parse(fichasStorage)

let archivo = document.getElementById("fichas-archivadas")

let botonGenerador = document.getElementById("generador")


function reintegrar (regenerar) {
   regenerar.forEach((ficha) => {
        let recuperador = document.createElement("div")
        let estilosDerecuperador = document.createElement("div")
        estilosDerecuperador.className = "estilizar-nodo"
        recuperador.className = "stilorecuperador"
        recuperador.innerHTML = `<h2>${ficha.nombre}</h2>`+
                                `<h2>${ficha.proteina}</h2>`+
                                `<h2>${ficha.imc}</h2>`+
                                `<h2>${ficha.salud}</h2>`
        archivo.appendChild(recuperador)
        recuperador.appendChild(estilosDerecuperador)
        })

    }


reintegrar(fichasStorage)

