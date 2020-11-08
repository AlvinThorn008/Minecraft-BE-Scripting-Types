import { Block, Component, Entity, LevelTickingArea, MCVector, entities, Query, Level } from "./common";
import { ComponentMap, components, CustomComponentMap, ServerComponentMap, serverComponents } from "./components";
import { CustomEventMap, EventData, EventMap, ServerEventMap, TriggerableServerEventMap } from './events';
interface IServer {
    registerSystem: (min: number, max: number) => ServerSystem;
    log: (message: string) => void;
}
export declare const server: IServer;
interface CmdCallback {
    (command: string, data: {}): void;
}
interface ServerSystem<C extends EventMap = CustomEventMap, Com extends ComponentMap = CustomComponentMap> {
    initialize: () => void;
    shutdown: () => void;
    update: () => void;
    level: Level;
    executeCommand(Command: string, Callback: CmdCallback): void;
    getBlock: {
        (tickingArea: LevelTickingArea, positionObject: MCVector): Block;
        (tickingArea: LevelTickingArea, x: number, y: number, z: number): Block;
    };
    getBlocks: {
        (tickingArea: LevelTickingArea, xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): Array<Block>;
        (tickingArea: LevelTickingArea, minPositionObject: MCVector, maxPositionObject: MCVector): Array<Block>;
    };
    applyComponentChanges(EntityObject: Entity, ComponentObject: Component): boolean;
    createComponent<T extends keyof (ServerComponentMap & Com)>(EntityObject: Entity, ComponentIdentifier: T): (ServerComponentMap & Com)[T];
    destroyComponent<T extends keyof (ServerComponentMap & Com)>(EntityObject: Entity, ComponentIdentifier: T): boolean;
    getComponent<T extends keyof (ServerComponentMap & Com)>(EntityObject: Entity, ComponentIdentifier: T): (ServerComponentMap & Com)[T];
    hasComponent<T extends keyof (ServerComponentMap & Com)>(EntityObject: Entity, ComponentIdentifier: T): boolean;
    registerComponent(ComponentIdentifier: string, ComponentData: Component): boolean;
    createEntity(Type: "entity" | "item_entity", TemplateIdentifier: entities): Entity;
    destroyEntity(EntityObject: Entity): boolean;
    isValidEntity(EntityObject: Entity): boolean;
    addFilterToQuery(Query: Query, ComponentIdentifier: serverComponents): void;
    getEntitiesFromQuery: {
        (Query: Query): Array<Entity>;
        (Query: Query, ComponentField1_Min: number, ComponentField2_Min: number, ComponentField3_Min: number, ComponentField1_Max: number, ComponentField2_Max: number, ComponentField3_Max: number): Array<Entity>;
    };
    registerQuery: {
        (): Query;
        (Component: components, ComponentField1: string, ComponentField2: string, ComponentField3: string): Query;
    };
    broadcastEvent<K extends keyof (TriggerableServerEventMap & C)>(EventIdentifier: K, EventData: (TriggerableServerEventMap & C)[K]): boolean;
    createEventData<K extends keyof (TriggerableServerEventMap & C)>(EventIdentifier: K): (TriggerableServerEventMap & C)[K];
    listenForEvent<K extends keyof (ServerEventMap & C)>(EventIdentifier: K, CallbackObject: (eventData: (ServerEventMap & C)[K]) => any): boolean;
    registerEventData(EventIdentifier: string, EventData: EventData): boolean;
}
export {};
