function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      // Как только обработали все данные, успешно разрешаем Promise
      resolve(body);
    });
    req.on("error", (error) => {
      // Если в процессе возникла ошибка, то разрешаем Promise с ошибкой
      reject(error);
    });
  });
}

module.exports = parseBody;
