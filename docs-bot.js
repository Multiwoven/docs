const externalScript = document.createElement("script");
externalScript.src =
  "https://api.squared.ai/enterprise/api/v1/data_apps_runner.js";
document.head.appendChild(externalScript);
externalScript.onload = function () {
  if (window.DataApp) {
    const dataApp = new window.DataApp({
      dataAppId: "230",
      dataAppUseCaseId: "xcj7gh9YXfVzfzsXXqfr",
    });
    dataApp.runDataApp();
  }
};
