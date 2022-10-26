const patterns = [
  {
    "name": "Creacionales",
    "list": [
      {
        "title": "Factory Method",
        "summary": "",
        "applications": [""],
        "image": "./images/patterns/creation/factory.png"
      },
      {
        "title": "Abstract Factory",
        "summary": "",
        "applications": [""],
        "image": "./images/patterns/creation/abstract_factory.png"
      },
      {
        "title": "Prototype",
        "summary": "Generar clon y modificar de ese clon.",
        "applications": [""],
        "image": "./images/patterns/creation/prototype.png"
      },
      {
        "title": "Builder",
        "summary": "Crea objetos paso a paso y un método para acceder a este.",
        "applications": [""],
        "image": "./images/patterns/creation/builder.png"
      },
      {
        "title": "Singleton",
        "summary": "Restringe que solo existe 1 vez y se ejecuta 1 vez",
        "applications": ["camara"],
        "image": "./images/patterns/creation/singleton.png"
      }
    ]
  },
  {
    "name": "Estructurales",
    "list": [
      {
        "title": "Adapter",
        "summary": "Medio de comunicación entre 2 objetos que en ningún lado pueden comunicarse. El obj a llega a B y puede ser interpretado por la interfaz.",
        "applications": [""],
        "image": "./images/patterns/structural/adapter.png"
      },
      {
        "title": "Composite",
        "summary": "Agarrar un grupo de objetos y convertirlo en 1 objeto. Maneja la agrupación.",
        "applications": [""],
        "image": "./images/patterns/structural/composite.png"
      },
      {
        "title": "Decorator",
        "summary": "Modificar una función en tiempo de ejecución. Se cambia el método.",
        "applications": [""],
        "image": "./images/patterns/structural/decorator.png"
      },
      {
        "title": "Facade",
        "summary": "Modificar una función en tiempo de ejecución. Se cambia el método.",
        "applications": [""],
        "image": "./images/patterns/structural/facade.png"
      },
      {
        "title": "Flyweight",
        "summary": "Guardar caché para reutilizar. Normalmente en formato de diccionario.",
        "applications": [""],
        "image": "./images/patterns/structural/flyweight.png"
      },
      {
        "title": "Proxy",
        "summary": "Acceso más fácil para reducir su complejidad. LLamada a algo pre-hecho.",
        "applications": ["API"],
        "image": "./images/patterns/structural/proxy.png"
      },
      {
        "title": "Bridge",
        "summary": "Refactorizar los objetos para redurcir su complejidad y transformarse de manera independiente.",
        "applications": [""],
        "image": "./images/patterns/structural/bridge.png"
      }
    ]
  },
  {
    "name": "De Comportamiento",
    "list": [
      {
        "title": "Sobrecarga de metodo",
        "summary": "Mismo método pero con diferente cantidad de parámetros",
        "applications": [""],
        "image": ""
      },
      {
        "title": "Cadena de responsabilidad",
        "summary": "",
        "applications": [""],
        "image": "./images/patterns/behavior/chain-of-resp.png"
      },
      {
        "title": "Command",
        "summary": "",
        "applications": [""],
        "image": "./images/patterns/behavior/command.png"
      },
      {
        "title": "Iterpreter",
        "summary": "Regla al colocar los nombres de las funciones y objetos.",
        "applications": [""],
        "image": ""
      },
      {
        "title": "Iterador",
        "summary": "Como array, lista, vector, pero sin exponer datos privados.",
        "applications": [""],
        "image": "./images/patterns/behavior/iterator.png"
      },
      {
        "title": "Mediador",
        "summary": "No utilizar pero sí usar métodos de una clase amiga.",
        "applications": [""],
        "image": "./images/patterns/behavior/mediator.png"
      },
      {
        "title": "Memento",
        "summary": "Los estados de los objetos cambian. Entonces es como historial de objetos para poder regresar al estado anterior (usualmente en arrays).",
        "applications": [""],
        "image": "./images/patterns/behavior/memento.png"
      },
      {
        "title": "Observer",
        "summary": "Permite lanzar eventos y alguien los va a escuchar a través de una suscripción.",
        "applications": [""],
        "image": "./images/patterns/behavior/observer.png"
      },
      {
        "title": "State",
        "summary": "Se complementa con memento => Cómo evoluciona un objeto en el tiempo.",
        "applications": ["enums"],
        "image": "./images/patterns/behavior/state.png"
      },
      {
        "title": "Strategy",
        "summary": "Hay opciones de métodos y dependiendo de lo que elija el ente decide por alguno.",
        "applications": [""],
        "image": "./images/patterns/behavior/strategy.png"
      },
      {
        "title": "Template method",
        "summary": "Como herencia, define cómo se verán los hijos a través de un molde.",
        "applications": ["herencia", "clase abstracta"],
        "image": "./images/patterns/behavior/template.png"
      },
      {
        "title": "Visitor",
        "summary": "Trata de separar la lógica del algoritmo. Para que puedan usarse en otras clases.",
        "applications": ["helpers"],
        "image": "./images/patterns/behavior/visitor.png"
      }
    ]
  },
  {
    "name": "Otros",
    "list": [
      {
        "title": "Repository",
        "summary": "Separar lógica de los controladores.",
        "applications": [""],
        "image": ""
      }
    ]
  }
];

const antipatterns = [
  {
    "name": "De Codificacion",
    "list": [
      {
        "title": "Lava Flow",
        "summary": "Sin documentación, no hay estándares, afecta a diferentes partes del código.",
        "applications": [""],
        "image": ""
      },
      {
        "title": "The God",
        "summary": "1 solo archivo con miles de líneas de código.",
        "applications": [""],
        "image": ""
      },
      {
        "title": "Golden Hammer",
        "summary": "Aferrarse solo a 1 patrón así no sea necesario.",
        "applications": [""],
        "image": ""
      },
      {
        "title": "Fantasma",
        "summary": "Tablas, códigos, archivos que nunca se usan.",
        "applications": [""],
        "image": ""
      },
      {
        "title": "Spaghetti",
        "summary": "Código sin documentación, un archivo afecta a otro, combinación de varios lenguajes, sin indentación.",
        "applications": [""],
        "image": ""
      }
    ]
  },
  {
    "name": "De Arquitectura",
    "list": [
      {
        "title": "Reinventar la rueda",
        "summary": "Al momento de trabajar algo, se hace desde 0.",
        "applications": [""],
        "image": ""
      },
      {
        "title": "Casarse con el diablo",
        "summary": "Volverse dependiente de un proveedor.",
        "applications": [""],
        "image": ""
      },
      {
        "title": "Stove pipe",
        "summary": "Cada quien hace su trabajo y no se comunican.",
        "applications": [""],
        "image": ""
      }
    ]
  },
  {
    "name": "De Proyectos",
    "list": [
      {
        "title": "The Mythical Month Man",
        "summary": "Cree que por contratar a más personas, el proyecto saldrá más rápido. La regla de 3 siempre falla.",
        "applications": [""],
        "image": ""
      },
      {
        "title": "Project Mis-management",
        "summary": "Procrastinar projectos",
        "applications": [""],
        "image": ""
      },
      {
        "title": "Corncob",
        "summary": "Personas conflictivas que no se dejan llevar, no se llevan bien entre sí.",
        "applications": [""],
        "image": ""
      }
    ]
  }
];

