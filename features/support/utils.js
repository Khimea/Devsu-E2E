var fs = require("fs");

const createDirectory = async (scenario) => {
  var date = new Date();
  var Feature = scenario.gherkinDocument.feature.name;
  var scenarioId = scenario.pickle.id;
  var fecha = (
    ("00" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("00" + date.getDate()).slice(-2) +
    "-" +
    date.getFullYear()
  ).toString();
  return new Promise((resolve) => {
    var dir = "./screenshots/" + Feature + "_" + fecha + "_" + scenarioId + "/";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    return resolve(dir);
  });
};

const takeScreenshot = async (scenario) => {
  var date = new Date();
  var scenarioName = scenario.pickle.name;
  var status = scenario.result.status;
  var hora = (
    ("00" + date.getHours()).slice(-2) +
    "h" +
    ("00" + date.getMinutes()).slice(-2) +
    "m" +
    ("00" + date.getSeconds()).slice(-2) +
    "s"
  ).toString();
  var dir = await createDirectory(scenario);
  await driver.takeScreenshot().then(function (image, err) {
    var nameFile = hora + "_" + scenarioName + "_" + status + ".png";
    fs.writeFile(dir + nameFile, image, "base64", function (err) {
      if (err === null) {
        console.log("Se creo la imagen correctamente");
      } else {
        console.log(err);
      }
    });
  });
};

const arregloDataNumeros = async (str) => {
  return new Promise((resolve) => {
    str = str.replace(/[' '°$.Nn]/g, "");
    return resolve(str);
  });
};
const arregloFecha = async (str) => {
  return new Promise((resolve) => {
    str = str.replaceAll('de', "")
    str = str.replaceAll('  ', '-')
    str2 = str.split('-')
    str = str2[2]+'-'+str2[1]+'-'+str2[0]
    str = ruturnMes(str)
    return resolve(str);
  });
};

const ruturnMes = async (str) => {
  return new Promise((resolve) => {
    let str2 = str.replaceAll(/[0-9 -]/g,'')
    switch (str2) {
      case "Enero":
        return resolve(str.replace('Enero',"01"));
      case "Febrero":
        return resolve(str.replace('Febrero',"02"));
      case "Marzo":
        return resolve(str.replace('Marzo',"03"));
      case "Abril":
        return resolve(str.replace('Abril',"04"));
      case "Mayo":
        return resolve(str.replace('Mayo',"05"));
      case "Junio":
        return resolve(str.replace('Junio',"06"));
      case "Julio":
        return resolve(str.replace('Julio',"07"));
      case "Agosto":
        return resolve(str.replace('Agosto',"08"));
      case "Septiembre":
        return resolve(str.replace('Septiembre',"09"));
      case "octubre":
        return resolve(str.replace('Octubre',"10"));
      case "Noviembre":
        return resolve(str.replace('Noviembre',"11"));
      case "Diciembre":
        return resolve(str.replace('Diciembre',"12"));
    }
  });
};
module.exports = {
  createDirectory,
  takeScreenshot,
  arregloDataNumeros,
  arregloFecha,
};
