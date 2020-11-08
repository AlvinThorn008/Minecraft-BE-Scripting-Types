import { Block, Component, Entity, LevelTickingArea, MCVector, entities, Query } from "./common";
import { AllComponentMap, ComponentMap, components, CustomComponentMap } from "./components";
import { BroadcastEventMap, CustomEventMap, EventData, EventMap, ListenEventMap } from './events';
interface IShared {
    registerSystem: (min: number, max: number) => SharedSystem;
    log: (message: string) => void;
}
export declare const shared: IShared;
interface CmdCallback {
    (command: string, data: {}): void;
}
interface SharedSystem<C extends EventMap = CustomEventMap, Com extends ComponentMap = CustomComponentMap> {
    initialize: () => void;
    shutdown: () => void;
    update: () => void;
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
    createComponent<T extends keyof (AllComponentMap & Com)>(EntityObject: Entity, ComponentIdentifier: T): (AllComponentMap & Com)[T];
    destroyComponent<T extends keyof (AllComponentMap & Com)>(EntityObject: Entity, ComponentIdentifier: T): boolean;
    getComponent<T extends keyof (AllComponentMap & Com)>(EntityObject: Entity, ComponentIdentifier: T): (AllComponentMap & Com)[T];
    hasComponent<T extends keyof (AllComponentMap & Com)>(EntityObject: Entity, ComponentIdentifier: T): boolean;
    registerComponent(ComponentIdentifier: string, ComponentData: Component): boolean;
    createEntity(Type: "entity" | "item_entity", TemplateIdentifier: entities): Entity;
    destroyEntity(EntityObject: Entity): boolean;
    isValidEntity(EntityObject: Entity): boolean;
    addFilterToQuery(Query: Query, ComponentIdentifier: components): void;
    getEntitiesFromQuery: {
        (Query: Query): Array<Entity>;
        (Query: Query, ComponentField1_Min: number, ComponentField2_Min: number, ComponentField3_Min: number, ComponentField1_Max: number, ComponentField2_Max: number, ComponentField3_Max: number): Array<Entity>;
    };
    registerQuery: {
        (): Query;
        (Component: components, ComponentField1: string, ComponentField2: string, ComponentField3: string): Query;
    };
    broadcastEvent<K extends keyof (BroadcastEventMap & C)>(EventIdentifier: K, EventData: (BroadcastEventMap & C)[K]): boolean;
    createEventData<K extends keyof (BroadcastEventMap & C)>(EventIdentifier: K): (BroadcastEventMap & C)[K];
    listenForEvent<K extends keyof (ListenEventMap & C)>(EventIdentifier: K, CallbackObject: (eventData: (ListenEventMap & C)[K]) => any): boolean;
    registerEventData(EventIdentifier: string, EventData: EventData): boolean;
}
export {};
