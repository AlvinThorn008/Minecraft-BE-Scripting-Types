import { Block, Component, Entity, LevelTickingArea, MCVector, entities, Query } from "./common";
import { ComponentMap, components, CustomComponentMap, ClientComponentMap, clientComponents } from "./components";
import { CustomEventMap, EventData, EventMap, ClientEventMap, TriggerableClientEventMap } from './events';
interface IClient {
    registerSystem: (min: number, max: number) => ClientSystem;
    log: (message: string) => void;
}
export declare const client: IClient;
interface ClientSystem<C extends EventMap = CustomEventMap, Com extends ComponentMap = CustomComponentMap> {
    [key: string]: any;
    initialize: () => void;
    shutdown: () => void;
    update: () => void;
    getBlock: {
        (tickingArea: LevelTickingArea, positionObject: MCVector): Block;
        (tickingArea: LevelTickingArea, x: number, y: number, z: number): Block;
    };
    getBlocks: {
        (tickingArea: LevelTickingArea, xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): Array<Block>;
        (tickingArea: LevelTickingArea, minPositionObject: MCVector, maxPositionObject: MCVector): Array<Block>;
    };
    applyComponentChanges(EntityObject: Entity, ComponentObject: Component): boolean;
    createComponent<T extends keyof (ClientComponentMap & Com)>(EntityObject: Entity, ComponentIdentifier: T): (ClientComponentMap & Com)[T];
    destroyComponent<T extends keyof (ClientComponentMap & Com)>(EntityObject: Entity, ComponentIdentifier: T): boolean;
    getComponent<T extends keyof (ClientComponentMap & Com)>(EntityObject: Entity, ComponentIdentifier: T): (ClientComponentMap & Com)[T];
    hasComponent<T extends keyof (ClientComponentMap & Com)>(EntityObject: Entity, ComponentIdentifier: T): boolean;
    registerComponent(ComponentIdentifier: string, ComponentData: Component): boolean;
    createEntity(Type: "entity" | "item_entity", TemplateIdentifier: entities): Entity;
    destroyEntity(EntityObject: Entity): boolean;
    isValidEntity(EntityObject: Entity): boolean;
    addFilterToQuery(Query: Query, ComponentIdentifier: clientComponents): void;
    getEntitiesFromQuery: {
        (Query: Query): Array<Entity>;
        (Query: Query, ComponentField1_Min: number, ComponentField2_Min: number, ComponentField3_Min: number, ComponentField1_Max: number, ComponentField2_Max: number, ComponentField3_Max: number): Array<Entity>;
    };
    registerQuery: {
        (): Query;
        (Component: components, ComponentField1: string, ComponentField2: string, ComponentField3: string): Query;
    };
    broadcastEvent<K extends keyof (TriggerableClientEventMap & C)>(EventIdentifier: K, EventData: (TriggerableClientEventMap & C)[K]): boolean;
    createEventData<K extends keyof (TriggerableClientEventMap & C)>(EventIdentifier: K): (TriggerableClientEventMap & C)[K];
    listenForEvent<K extends keyof (ClientEventMap & C)>(EventIdentifier: K, CallbackObject: (eventData: (ClientEventMap & C)[K]) => any): boolean;
    registerEventData(EventIdentifier: string, EventData: EventData): boolean;
}
export {};
