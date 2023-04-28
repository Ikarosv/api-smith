class MyError extends Error {
  status: number;

  message: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export default function errorGenerator(status: number, message: string): never {
  throw new MyError(status, message);
}