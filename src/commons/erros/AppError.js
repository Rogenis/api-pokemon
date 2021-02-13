// Classe para verificar status de código de erro

class AppError {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = AppError;
