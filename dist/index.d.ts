declare class Server {
    port: number;
    address: string;
    constructor(port: number, address: string);
    startServer(): void;
}
declare const someServer: Server;
