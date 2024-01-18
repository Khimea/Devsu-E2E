var fs = require("fs");

const takeScreenshot = async (scenario) => {
  var date = new Date();
  var scenarioName = scenario.pickle.name;
  var status = scenario.result.status;
  var dia =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  var hora = (
    date.getHours() +
    "h" +
    date.getMinutes() +
    "m" +
    date.getSeconds() +
    "s"
  ).toString();
  await driver.takeScreenshot().then(function (image, err) {
    var nameFile =
      dia + "_" + hora + "_" + status + "_" + scenarioName + ".png";
    fs.writeFile("./screenshots/" + nameFile, image, "base64", function (err) {
      if (err === null) {
        console.log("Se creo la imagen correctamente");
      } else {
        console.log(err);
      }
    });
  });
};

module.exports = {
  takeScreenshot,
};
