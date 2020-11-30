import { Block, Component, Entity, LevelTickingArea, MCVector, entities, Query, ThreeDimensionalBlockArray } from "./common";
import { ComponentMap, components, CustomComponentMap, ClientComponentMap, clientComponents } from "./components";
import { CustomEventMap, EventData, EventMap, ClientEventMap, TriggerableClientEventMap } from  './events';

export interface IClient {
    registerSystem: <U extends ClientSystem>(min: number, max: number) => U;
    log: (message: string) => void;
}

export interface ClientSystem<C extends EventMap = CustomEventMap, Com extends ComponentMap = CustomComponentMap> {
    [key: string]: any;
    initialize: (this: this) => void;
    shutdown: (this: this) => void;
    update: (this: this) => void;
    getBlock: {
        (tickingArea: LevelTickingArea, positionObject: MCVector): Block;
        (tickingArea: LevelTickingArea, x: number, y: number, z: number): Block;
    }

    getBlocks: {
        (tickingArea: LevelTickingArea, xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): ThreeDimensionalBlockArray;
        (tickingArea: LevelTickingArea, minPositionObject: MCVector, maxPositionObject: MCVector): ThreeDimensionalBlockArray;
    }
    // Component Bindings
    applyComponentChanges(EntityObject: Entity, ComponentObject: Component): boolean;
    createComponent<T extends keyof (ClientComponentMap & Com)>(EntityObject: Entity, ComponentIdentifier: T): (ClientComponentMap & Com)[T]
    destroyComponent<T extends keyof (ClientComponentMap & Com)>(EntityObject: Entity, ComponentIdentifier: T): boolean;
    getComponent<T extends keyof (ClientComponentMap & Com)>(EntityObject: Entity, ComponentIdentifier: T): (ClientComponentMap & Com)[T];
    hasComponent<T extends keyof (ClientComponentMap & Com)>(EntityObject: Entity, ComponentIdentifier: T): boolean; // make component literal types
    registerComponent(ComponentIdentifier: string, ComponentData: Component): boolean; // ADD ComponentData interface

    // Entity Bindings
    createEntity(Type: "entity" | "item_entity", TemplateIdentifier: entities): Entity;
    destroyEntity(EntityObject: Entity): boolean;
    isValidEntity(EntityObject: Entity): boolean;

    // Entity Queries Bindings
    addFilterToQuery(Query: Query, ComponentIdentifier: clientComponents): void;
    getEntitiesFromQuery: {
        (Query: Query): Array<Entity>;
        (Query: Query, ComponentField1_Min: number, ComponentField2_Min: number, ComponentField3_Min: number, ComponentField1_Max: number, ComponentField2_Max: number, ComponentField3_Max: number): Array<Entity>
    }
    registerQuery: {
        (): Query;
        (Component: components, ComponentField1: string, ComponentField2: string, ComponentField3: string): Query;
    }

    // Event Bindings
    broadcastEvent<K extends keyof (TriggerableClientEventMap & C)>(EventIdentifier: K, EventData: (TriggerableClientEventMap & C)[K] ): boolean;
    createEventData<K extends keyof (TriggerableClientEventMap & C)>(EventIdentifier: K): (TriggerableClientEventMap & C)[K];
    listenForEvent<K extends keyof (ClientEventMap & C)>(EventIdentifier: K, CallbackObject: (eventData: (ClientEventMap & C)[K]) => any): boolean;
    registerEventData(EventIdentifier: string, EventData: EventData): boolean;
}













