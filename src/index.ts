import { Level } from './common';
import { IClient, ClientSystem } from './client';
import { IServer, ServerSystem } from './server';

const client: IClient = {
    registerSystem(min, max) {
        return {} as ClientSystem;
    },
    log(message) {}
}

const server: IServer = {
    registerSystem(min, max) {
        return {} as ServerSystem;
    },
    log(message) {},
    level: {} as Level
}

export { client, server };



