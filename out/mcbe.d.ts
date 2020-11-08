interface IClient {
    registerSystem: (min: number, max: number) => ClientSystem;
    log: (message: string) => void;
}
declare const client: IClient;
interface ClientSystem<C extends EventMap = CustomEventMap, Com extends ComponentMap = CustomComponentMap> {
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

interface IServer {
    registerSystem: (min: number, max: number) => ServerSystem;
    log: (message: string) => void;
}

declare const server: IServer;
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

interface IShared {
    registerSystem: (min: number, max: number) => SharedSystem;
    log: (message: string) => void;
}
declare const shared: IShared;
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

/**
 * EventData Base Interface
 */
interface EventData {
}
/**
 * ServerEventData Base Interface
 * All other server event data interfaces are derived from this Interface
 */
interface ServerEventData extends EventData {
    data: {};
}
/**
 * ClientEventData Base Interface
 * All other client event data interfaces are derived from this Interface
 */
interface ClientEventData extends EventData {
    data: {};
}
/**
 * TriggerableClientEventData Base Interface
 * All other triggerable client event data interfaces are derived from this Interface
 */
interface TriggerableClientEventData extends ClientEventData {
    data: {};
}
/**
 * TriggerableServerEventData Base Interface
 * All other triggerable server event data interfaces are derived from this Interface
 */
interface TriggerableServerEventData extends ServerEventData {
    data: {};
}
interface BlockDestructionStartedEventData extends ServerEventData {
    data: {
        block_position: MCVector;
        player: Entity;
    };
}
interface BlockDestructionStoppedEventData extends ServerEventData {
    data: {
        block_position: MCVector;
        destruction_progress: number;
        player: Entity;
    };
}
interface BlockExplodedEventData extends ServerEventData {
    data: {
        block_identifier: string;
        block_position: MCVector;
        cause: string;
        entity: Entity;
    };
}
interface BlockInteractedWithEventData extends ServerEventData {
    data: {
        block_position: MCVector;
        player: Entity;
    };
}
interface EntityAcquiredItemEventData extends ServerEventData {
    data: {
        acquired_amount: number;
        acquisition_method: string;
        entity: Entity;
        item_stack: ItemStack;
        secondary_entity: Entity;
    };
}
interface EntityAttackEventData extends ServerEventData {
    data: {
        entity: Entity;
        target: Entity;
    };
}
interface EntityCarriedItemEventData extends ServerEventData {
    data: {
        carried_item: ItemStack;
        entity: Entity;
        hand: string;
        previous_carried_item: ItemStack;
    };
}
interface EntityCreatedEventData extends ServerEventData {
    data: {
        entity: Entity;
    };
}
interface EntityDeathEventData extends ServerEventData {
    data: {
        block_position: MCVector;
        cause: string;
        entity: Entity;
        killer: Entity;
        projectile_type: string;
    };
}
interface EntityDefinitionEventData extends ServerEventData {
    data: {
        entity: Entity;
        event: string;
    };
}
interface EntityDroppedItemEventData extends ServerEventData {
    data: {
        entity: Entity;
        item_stack: ItemStack;
    };
}
interface EntityEquippedArmorEventData extends ServerEventData {
    data: {
        entity: Entity;
        item_stack: ItemStack;
        slot: string;
    };
}
interface EntityHurtEventData extends ServerEventData {
    data: {
        absorbed_damage: number;
        attacker: Entity;
        block_position: MCVector;
        cause: string;
        damage: number;
        entity: Entity;
        projectile_type: string;
    };
}
interface EntitySneakEventData extends ServerEventData {
    data: {
        entity: Entity;
        sneaking: boolean;
    };
}
interface EntityStartRidingEventData extends ServerEventData {
    data: {
        entity: Entity;
        ride: Entity;
    };
}
interface EntityStopRidingEventData extends ServerEventData {
    data: {
        entity: Entity;
        entity_is_being_destroyed: boolean;
        exit_from_rider: boolean;
        switching_rides: boolean;
    };
}
interface EntityTickEventData extends ServerEventData {
    data: {
        entity: Entity;
    };
}
interface EntityUseItemEventData extends ServerEventData {
    data: {
        entity: Entity;
        item_stack: ItemStack;
        use_method: string;
    };
}
interface PistonMovedBlockEventData extends ServerEventData {
    data: {
        block_position: MCVector;
        piston_action: string;
        piston_position: MCVector;
    };
}
interface PlaySoundEventData extends ServerEventData {
    data: {
        pitch: number;
        position: MCAVector;
        sound: string;
        volume: number;
    };
}
interface PlayerAttackedEntityEventData extends ServerEventData {
    data: {
        attacked_entity: Entity;
        player: Entity;
    };
}
interface PlayerDestroyedBlockEventData extends ServerEventData {
    data: {
        block_identifier: string;
        block_position: MCVector;
        player: Entity;
    };
}
interface PlayerPlacedBlockEventData extends ServerEventData {
    data: {
        block_position: MCVector;
        player: Entity;
    };
}
interface ProjectileHitEventData extends ServerEventData {
    data: {
        entity: Entity;
        owner: Entity;
        position: MCAVector;
        projectile: Entity;
    };
}
interface WeatherChangedEventData extends ServerEventData {
    data: {
        dimension: string;
        lightning: boolean;
        raining: boolean;
    };
}
/**
 * All server related event identifiers
 */
declare type serverEvents = "minecraft:block_destruction_started" | "minecraft:block_destruction_stopped" | "minecraft:block_exploded" | "minecraft:block_interacted_with" | "minecraft:entity_acquired_item" | "minecraft:entity_attack" | "minecraft:entity_carried_item_changed" | "minecraft:entity_created" | "minecraft:entity_death" | "minecraft:entity_definition_event" | "minecraft:entity_dropped_item" | "minecraft:entity_equipped_armor" | "minecraft:entity_hurt" | "minecraft:entity_sneak" | "minecraft:entity_start_riding" | "minecraft:entity_stop_riding" | "minecraft:entity_tick" | "minecraft:entity_use_item" | "minecraft:piston_moved_block" | "minecraft:play_sound" | "minecraft:player_attacked_entity" | "minecraft:player_destroyed_block" | "minecraft:player_placed_block" | "minecraft:projectile_hit" | "minecraft:weather_changed";
interface ClientEnteredWorldEventData extends ClientEventData {
    data: {
        entity: Entity;
    };
}
interface HitResultChangedEventData extends ClientEventData {
    data: {
        entity: Entity;
        position: MCAVector;
    };
}
interface HitResultContinuousEventData extends ClientEventData {
    data: {
        entity: Entity;
        position: MCAVector;
    };
}
interface PickHitResultChangedEventData extends ClientEventData {
    data: {
        entity: Entity;
        position: MCAVector;
    };
}
interface PickHitResultContinuousEventData extends ClientEventData {
    data: {
        entity: Entity;
        position: MCAVector;
    };
}
/**
 * All client related event identifiers
 */
declare type clientEvents = "minecraft:client_entered_world" | "minecraft:hit_result_changed" | "minecraft:hit_result_continuous" | "minecraft:pick_hit_result_changed" | "minecraft:pick_hit_result_continuous";
interface DisplayChatEventEventData extends TriggerableClientEventData {
    data: {
        message: string;
    };
}
interface LoadUiEventData extends TriggerableClientEventData {
    data: {
        /**
         * This is meant to be a JSON object.
         * Use `JSON.stringify()`
         */
        options: string | {
            absorbs_input: boolean;
            always_accepts_input: boolean;
            force_render_below: boolean;
            is_showing_menu: boolean;
            render_game_behind: boolean;
            render_only_when_topmost: boolean;
            should_steal_mouse: boolean;
        };
        path: string;
    };
}
interface ScriptLoggerConfigEventData extends TriggerableClientEventData {
    data: {
        log_errors: boolean;
        log_information: boolean;
        log_warnings: boolean;
    };
}
interface SendUiEventEventData extends TriggerableClientEventData {
    data: {
        data: string;
        eventIdentifer: string;
    };
}
interface SpawnParticleAttachedEntityEventData extends TriggerableClientEventData {
    data: {
        effect: string;
        entity: Entity;
        offset: MCAVector;
    };
}
interface SpawnParticleInWorldEventData extends TriggerableClientEventData {
    data: {
        effect: string;
        position: MCAVector;
    };
}
interface UnloadUiEventData extends TriggerableClientEventData {
    data: {};
}
/**
 * All Triggerable client related event identifiers
 */
declare type triggerableClientEvents = "minecraft:display_chat_event" | "minecraft:load_ui" | "minecraft:script_logger_config" | "minecraft:send_ui_event" | "minecraft:spawn_particle_attached_entity" | "minecraft:spawn_particle_in_world" | "minecraft:unload_ui";
interface EntityDefinitionEventEventData extends TriggerableServerEventData {
    data: {
        entity: Entity;
        event: string;
    };
}
interface ExecuteCommandEventData extends TriggerableServerEventData {
    data: {
        command: string;
    };
}
/**
 * All Triggerable server related event identifiers
 */
declare type triggerableServerEvents = "minecraft:display_chat_event" | "minecraft:entity_definition_event" | "minecraft:execute_command" | "minecraft:play_sound" | "minecraft:script_logger_config" | "minecraft:spawn_particle_attached_entity" | "minecraft:spawn_particle_in_world";
/**
 * EventMap
 * Base Interface for all Event Identifier to Event Data mappings.
 */
interface EventMap {
}
/**
 * ClientEventMap
 * Sub Interface for all client related Event Identifier to Event Data mappings.
 */
interface ClientEventMap extends EventMap {
    "minecraft:client_entered_world": ClientEnteredWorldEventData;
    "minecraft:hit_result_changed": HitResultChangedEventData;
    "minecraft:hit_result_continuous": HitResultContinuousEventData;
    "minecraft:pick_hit_result_changed": PickHitResultChangedEventData;
    "minecraft:pick_hit_result_continuous": PickHitResultContinuousEventData;
}
/**
 * ServerEventMap
 * Sub Interface for all server related Event Identifier to Event Data mappings.
 */
interface ServerEventMap extends EventMap {
    "minecraft:block_destruction_started": BlockDestructionStartedEventData;
    "minecraft:block_destruction_stopped": BlockDestructionStoppedEventData;
    "minecraft:block_exploded": BlockExplodedEventData;
    "minecraft:block_interacted_with": BlockInteractedWithEventData;
    "minecraft:entity_acquired_item": EntityAcquiredItemEventData;
    "minecraft:entity_attack": EntityAttackEventData;
    "minecraft:entity_carried_item_changed": EntityCarriedItemEventData;
    "minecraft:entity_created": EntityCreatedEventData;
    "minecraft:entity_death": EntityDeathEventData;
    "minecraft:entity_definition_event": EntityDefinitionEventEventData;
    "minecraft:entity_dropped_item": EntityDroppedItemEventData;
    "minecraft:entity_equipped_armor": EntityEquippedArmorEventData;
    "minecraft:entity_hurt": EntityHurtEventData;
    "minecraft:entity_sneak": EntitySneakEventData;
    "minecraft:entity_start_riding": EntityStartRidingEventData;
    "minecraft:entity_stop_riding": EntityStopRidingEventData;
    "minecraft:entity_tick": EntityTickEventData;
    "minecraft:entity_use_item": EntityUseItemEventData;
    "minecraft:piston_moved_block": PistonMovedBlockEventData;
    "minecraft:play_sound": PlaySoundEventData;
    "minecraft:player_attacked_entity": PlayerAttackedEntityEventData;
    "minecraft:player_destroyed_block": PlayerDestroyedBlockEventData;
    "minecraft:player_placed_block": PlayerPlacedBlockEventData;
    "minecraft:projectile_hit": ProjectileHitEventData;
    "minecraft:weather_changed": WeatherChangedEventData;
}
/**
 * TriggerableClientEventMap
 * Sub Interface for all triggerable client related Event Identifier to Event Data mappings.
 */
interface TriggerableClientEventMap extends EventMap {
    "minecraft:display_chat_event": DisplayChatEventEventData;
    "minecraft:load_ui": LoadUiEventData;
    "minecraft:script_logger_config": ScriptLoggerConfigEventData;
    "minecraft:send_ui_event": SendUiEventEventData;
    "minecraft:spawn_particle_attached_entity": SpawnParticleAttachedEntityEventData;
    "minecraft:spawn_particle_in_world": SpawnParticleInWorldEventData;
    "minecraft:unload_ui": UnloadUiEventData;
}
/**
 * TriggerableServerEventMap
 * Sub Interface for all server related Event Identifier to Event Data mappings.
 */
interface TriggerableServerEventMap extends EventMap {
    "minecraft:display_chat_event": DisplayChatEventEventData;
    "minecraft:entity_definition_event": EntityDefinitionEventEventData;
    "minecraft:execute_command": ExecuteCommandEventData;
    "minecraft:play_sound": PlaySoundEventData;
    "minecraft:script_logger_config": ScriptLoggerConfigEventData;
    "minecraft:spawn_particle_attached_entity": SpawnParticleAttachedEntityEventData;
    "minecraft:spawn_particle_in_world": SpawnParticleInWorldEventData;
}
/**
 * BroadcastEventMap
 * Contains all mappings for triggerable events.
 */
declare type BroadcastEventMap = TriggerableServerEventMap & TriggerableClientEventMap;
/**
 * ListenEventMap
 * Contains all mappings for all events that can be listened to.
 * This also serves as a mapping for all defined events.
 */
declare type ListenEventMap = ClientEventMap & ServerEventMap & BroadcastEventMap;
/**
 * CustomEventMap
 * Defaults Mappings for custom events.
 */
interface CustomEventMap extends EventMap {
}

declare type components = blockComponents | clientComponents | levelComponents | serverComponents;
declare type blockComponents = "minecraft:blockstate";
declare type clientComponents = "minecraft:molang";
declare type levelComponents = "minecraft:ticking_areas" | "minecraft:weather";
declare type serverComponents = "minecraft:armor_container" | "minecraft:attack" | "minecraft:collision_box" | "minecraft:container" | "minecraft:damage_sensor" | "minecraft:equipment" | "minecraft:equippable" | "minecraft:explode" | "minecraft:hand_container" | "minecraft:healable" | "minecraft:health" | "minecraft:hotbar_container" | "minecraft:interact" | "minecraft:inventory" | "minecraft:inventory_container" | "minecraft:lookat" | "minecraft:nameable" | "minecraft:position" | "minecraft:rotation" | "minecraft:shooter" | "minecraft:spawn_entity" | "minecraft:tag" | "minecraft:teleport" | "minecraft:tick_world" | "minecraft:ticking_area_description";
interface ClientComponent extends Component {
    data: {};
}
interface ServerComponent extends Component {
    data: {};
}
interface BlockStateComponent extends Component {
    data: {
        [key: string]: any;
    };
}
interface MolangComponent extends ClientComponent {
    [key: string]: any;
}
interface TickingAreasComponent extends ServerComponent {
    data: {
        ticking_areas: Array<LevelTickingArea>;
    };
}
interface WeatherComponent extends ServerComponent {
    data: {
        do_weather_cycle: boolean;
        lightning_level: number;
        lightning_time: number;
        rain_level: number;
    };
}
interface ArmorContainerComponent extends ServerComponent {
    data: Array<ItemStack>;
}
interface AttackComponent extends ServerComponent {
    data: {
        damage: MCRange;
    };
}
interface CollisionBoxComponent extends ServerComponent {
    data: {
        height: number;
        width: number;
    };
}
interface ContainerComponent extends ServerComponent {
    data: Array<ItemStack>;
}
interface DamageSensorComponent extends ServerComponent {
    data: Array<{
        cause: string;
        damage_multiplier: number;
        deals_damage: boolean;
        on_damage: string;
        on_damage_sound_event: string;
    }>;
}
interface EquipmentComponent extends ServerComponent {
    data: {
        slot_drop_chance: Array<any>;
        table: string;
    };
}
interface EquippableComponent extends ServerComponent {
    data: {
        accepted_items: Array<string>;
        interact_text: string;
        item: string;
        on_equip: string;
        on_unequip: string;
        slot: number;
    };
}
interface ExplodeComponent extends ServerComponent {
    data: {
        breaks_blocks: boolean;
        causes_fire: boolean;
        destroy_affected_by_griefing: boolean;
        fire_affected_by_griefing: boolean;
        fuse_length: MCRange;
        fuse_lit: boolean;
        max_resistance: number;
        power: number;
    };
}
interface HandContainerComponent extends ServerComponent {
    data: Array<ItemStack>;
}
interface HealableComponent extends ServerComponent {
    data: {
        filters: Array<MCFilter> | MCFilter;
        force_use: boolean;
        items: Array<{
            heal_amount: number;
            item: string;
        }>;
    };
}
interface HealthComponent extends ServerComponent {
    data: {
        max: number;
        value: number;
    };
}
interface HotbarContainerComponent extends ServerComponent {
    data: Array<ItemStack>;
}
interface InteractComponent extends ServerComponent {
    data: {
        /**NOTE: This property takes a string and the typed object is only to be used as a guide. Use `JSON.stringify`.*/
        add_items: string | {
            table: string;
        };
        cooldown: number;
        hurt_item: number;
        interact_text: string;
        on_interact: string;
        /**NOTE: This property takes a string and the typed object is only to be used as a guide. Use `JSON.stringify`.*/
        particle_on_start: string | {
            particle_offset_towards_interactor: boolean;
            particle_type: string;
            particle_y_offset: number;
        };
        play_sounds: Array<string>;
        spawn_entities: Array<string>;
        /**NOTE: This property takes a string and the typed object is only to be used as a guide. Use `JSON.stringify`.*/
        spawn_items: string | {
            table: string;
        };
        swing: boolean;
        transform_to_item: string;
        use_item: boolean;
    };
}
interface InventoryComponent extends ServerComponent {
    data: {
        additional_slots_per_strength: number;
        can_be_siphoned: boolean;
        container_type: string;
        inventory_size: number;
        private: boolean;
        restrict_to_owner: boolean;
    };
}
interface InventoryContainerComponent extends ServerComponent {
    data: Array<ItemStack>;
}
interface LookatComponent extends ServerComponent {
    data: {
        allow_invulnerable: boolean;
        filters: MCFilter | Array<MCFilter>;
        look_cooldown: MCRange;
        look_event: string;
        search_radius: number;
        set_target: boolean;
    };
}
interface NameableComponent extends ServerComponent {
    data: {
        allow_name_tag_renaming: boolean;
        always_show: boolean;
        default_trigger: string;
        name: string;
        name_actions: string | {
            name_filter: Array<string>;
            on_named: string;
        };
    };
}
interface PositionComponent extends ServerComponent {
    data: MCVector;
}
interface RotationComponent extends ServerComponent {
    data: {
        x: number;
        y: number;
    };
}
interface ShooterComponent extends ServerComponent {
    data: {
        auxVal: number;
        def: string;
    };
}
interface SpawnEntityComponent extends ServerComponent {
    data: {
        filters: MCFilter | Array<MCFilter>;
        max_wait_time: number;
        min_wait_time: number;
        num_to_spawn: number;
        should_leash: boolean;
        single_use: boolean;
        spawn_entity: string;
        spawn_event: string;
        spwan_item: items;
        spawn_method: string;
        spawn_sound: string;
    };
}
interface TagComponent extends ServerComponent {
    data: Array<string>;
}
interface TeleportComponent extends ServerComponent {
    data: {
        dark_teleport_chance: number;
        light_teleport_chance: number;
        max_random_teleport_time: number;
        min_random_teleport_time: number;
        random_teleport_cube: MCAVector;
        random_teleports: boolean;
        target_distance: number;
        target_teleport_chance: number;
    };
}
interface TickWorldComponent extends ServerComponent {
    data: {
        distance_To_players: number;
        never_despawn: boolean;
        radius: number;
        ticking_area: EntityTickingArea;
    };
}
interface TickingAreaDescriptionComponent extends ServerComponent {
    data: {
        is_circle: boolean;
        max: MCAVector;
        name: string;
        origin: MCAVector;
        radius: MCAVector;
    };
}
interface CustomComponentMap extends ComponentMap {
}
interface ClientComponentMap extends ComponentMap {
    "minecraft:molang": MolangComponent;
    "minecraft:blockstate": BlockStateComponent;
}
interface ServerComponentMap extends ComponentMap {
    "minecraft:blockstate": BlockStateComponent;
    "minecraft:ticking_areas": TickingAreasComponent;
    "minecraft:weather": WeatherComponent;
    "minecraft:armor_container": ArmorContainerComponent;
    "minecraft:attack": AttackComponent;
    "minecraft:collision_box": CollisionBoxComponent;
    "minecraft:container": ContainerComponent;
    "minecraft:damage_sensor": DamageSensorComponent;
    "minecraft:equipment": EquipmentComponent;
    "minecraft:equippable": EquippableComponent;
    "minecraft:explode": ExplodeComponent;
    "minecraft:hand_container": HandContainerComponent;
    "minecraft:healable": HealableComponent;
    "minecraft:health": HealthComponent;
    "minecraft:hotbar_container": HotbarContainerComponent;
    "minecraft:interact": InteractComponent;
    "minecraft:inventory": InventoryComponent;
    "minecraft:inventory_container": InventoryContainerComponent;
    "minecraft:lookat": LookatComponent;
    "minecraft:nameable": NameableComponent;
    "minecraft:position": PositionComponent;
    "minecraft:rotation": RotationComponent;
    "minecraft:shooter": ShooterComponent;
    "minecraft:spawn_entity": SpawnEntityComponent;
    "minecraft:tag": TagComponent;
    "minecraft:teleport": TeleportComponent;
    "minecraft:tick_world": TickWorldComponent;
    "minecraft:ticking_area_description": TickingAreaDescriptionComponent;
}
interface ComponentMap {
}
interface AllComponentMap extends ComponentMap {
    "minecraft:blockstate": BlockStateComponent;
    "minecraft:molang": MolangComponent;
    "minecraft:ticking_areas": TickingAreasComponent;
    "minecraft:weather": WeatherComponent;
    "minecraft:armor_container": ArmorContainerComponent;
    "minecraft:attack": AttackComponent;
    "minecraft:collision_box": CollisionBoxComponent;
    "minecraft:container": ContainerComponent;
    "minecraft:damage_sensor": DamageSensorComponent;
    "minecraft:equipment": EquipmentComponent;
    "minecraft:equippable": EquippableComponent;
    "minecraft:explode": ExplodeComponent;
    "minecraft:hand_container": HandContainerComponent;
    "minecraft:healable": HealableComponent;
    "minecraft:health": HealthComponent;
    "minecraft:hotbar_container": HotbarContainerComponent;
    "minecraft:interact": InteractComponent;
    "minecraft:inventory": InventoryComponent;
    "minecraft:inventory_container": InventoryContainerComponent;
    "minecraft:lookat": LookatComponent;
    "minecraft:nameable": NameableComponent;
    "minecraft:position": PositionComponent;
    "minecraft:rotation": RotationComponent;
    "minecraft:shooter": ShooterComponent;
    "minecraft:spawn_entity": SpawnEntityComponent;
    "minecraft:tag": TagComponent;
    "minecraft:teleport": TeleportComponent;
    "minecraft:tick_world": TickWorldComponent;
    "minecraft:ticking_area_description": TickingAreaDescriptionComponent;
}

interface MCVector {
    x: number;
    y: number;
    z: number;
}
interface MCAVector {
    0: number;
    1: number;
    2: number;
}
interface Block {
    __identifier__: string;
    __type__: string;
    block_position: MCVector;
    ticking_area: LevelTickingArea;
}
interface Component {
    __type__: string;
    data: {};
}
interface Entity {
    /**READ ONLY.This is the identifier for the object in the format namespace:name. For example, if the type is entity and the object is representing a vanilla cow, the identifier would be minecraft:cow */
    readonly __identifier__: string;
    /**READ ONLY. This defines the type of object. Can be: "entity" or "item_entity". */
    readonly __type__: string;
    /**READ ONLY. This is the unique identifier of the entity. */
    readonly id: number;
}
interface EntityTickingArea extends TickingArea {
    readonly __type__: string;
    readonly entity_ticking_area_id: number;
}
interface ItemStack {
    /**READ ONLY.This is the identifier for the object in the format namespace:name. For example, if the type is entity and the object is representing a vanilla cow, the identifier would be minecraft:cow */
    readonly __identifier__: string;
    /**READ ONLY. This defines the type of object. Will be: "item_stack". */
    readonly __type__: string;
    readonly count: string;
    readonly item: string;
}
interface Level {
    __type__: string;
    level_id: number;
}
interface LevelTickingArea extends TickingArea {
    __type__: string;
    level_ticking_area_id: string;
}
interface Query {
    __type__: string;
    query_id: number;
}
interface TickingArea {
    __type__: string;
}
declare type entities = "minecraft:agent" | "minecraft:area_effect_cloud" | "minecraft:armor_stand" | "minecraft:arrow" | "minecraft:balloon" | "minecraft:bat" | "minecraft:bee" | "minecraft:blaze" | "minecraft:boat" | "minecraft:cat" | "minecraft:cave_spider" | "minecraft:chalkboard" | "minecraft:chest_minecart" | "minecraft:chicken" | "minecraft:cod" | "minecraft:command_block_minecart" | "minecraft:cow" | "minecraft:creeper" | "minecraft:dolphin" | "minecraft:donkey" | "minecraft:dragon_fireball" | "minecraft:drowned" | "minecraft:egg" | "minecraft:elder_guardian" | "minecraft:elder_guardian_ghost" | "minecraft:ender_crystal" | "minecraft:ender_dragon" | "minecraft:ender_pearl" | "minecraft:enderman" | "minecraft:endermite" | "minecraft:evocation_fang" | "minecraft:evocation_illager" | "minecraft:eye_of_ender_signal" | "minecraft:falling_block" | "minecraft:fireball" | "minecraft:fireworks_rocket" | "minecraft:fishing_hook" | "minecraft:fox" | "minecraft:ghast" | "minecraft:guardian" | "minecraft:hoglin" | "minecraft:hopper_minecart" | "minecraft:horse" | "minecraft:husk" | "minecraft:ice_bomb" | "minecraft:iron_golem" | "minecraft:item" | "minecraft:leash_knot" | "minecraft:lightning_bolt" | "minecraft:lingering_potion" | "minecraft:llama" | "minecraft:llama_spit" | "minecraft:magma_cube" | "minecraft:minecart" | "minecraft:mooshroom" | "minecraft:moving_block" | "minecraft:mule" | "minecraft:npc" | "minecraft:ocelot" | "minecraft:painting" | "minecraft:panda" | "minecraft:parrot" | "minecraft:phantom" | "minecraft:pig" | "minecraft:piglin" | "minecraft:piglin_brute" | "minecraft:pillager" | "minecraft:player" | "minecraft:polar_bear" | "minecraft:pufferfish" | "minecraft:rabbit" | "minecraft:ravager" | "minecraft:salmon" | "minecraft:sheep" | "minecraft:shield" | "minecraft:shulker" | "minecraft:shulker_bullet" | "minecraft:silverfish" | "minecraft:skeleton" | "minecraft:skeleton_horse" | "minecraft:slime" | "minecraft:small_fireball" | "minecraft:snow_golem" | "minecraft:snowball" | "minecraft:spider" | "minecraft:splash_potion" | "minecraft:squid" | "minecraft:stray" | "minecraft:strider" | "minecraft:thrown_trident" | "minecraft:tnt" | "minecraft:tnt_minecart" | "minecraft:tripod_camera" | "minecraft:tropicalfish" | "minecraft:turtle" | "minecraft:vex" | "minecraft:villager" | "minecraft:villager_v2" | "minecraft:vindicator" | "minecraft:wandering_trader" | "minecraft:witch" | "minecraft:wither" | "minecraft:wither_skeleton" | "minecraft:wither_skull" | "minecraft:wither_skull_dangerous" | "minecraft:wolf" | "minecraft:xp_bottle" | "minecraft:xp_orb" | "minecraft:zoglin" | "minecraft:zombie" | "minecraft:zombie_horse" | "minecraft:zombie_pigman" | "minecraft:zombie_villager" | "minecraft:zombie_villager_v2";
declare type MCRange = [number, number];
interface MCFilter {
    "test": string;
    "subject"?: string;
    "value": string;
    "operator"?: string;
}
declare type blocks = "minecraft:acacia_button" | "minecraft:acacia_door" | "minecraft:acacia_fence_gate" | "minecraft:acacia_pressure_plate" | "minecraft:acacia_stairs" | "minecraft:acacia_standing_sign" | "minecraft:acacia_trapdoor" | "minecraft:acacia_wall_sign" | "minecraft:activator_rail" | "minecraft:air" | "minecraft:allow" | "minecraft:ancient_debris" | "minecraft:andesite_stairs" | "minecraft:anvil" | "minecraft:bamboo" | "minecraft:bamboo_sapling" | "minecraft:barrel" | "minecraft:barrier" | "minecraft:basalt" | "minecraft:beacon" | "minecraft:bed" | "minecraft:bedrock" | "minecraft:bee_nest" | "minecraft:beehive" | "minecraft:beetroot" | "minecraft:bell" | "minecraft:birch_button" | "minecraft:birch_door" | "minecraft:birch_fence_gate" | "minecraft:birch_pressure_plate" | "minecraft:birch_stairs" | "minecraft:birch_standing_sign" | "minecraft:birch_trapdoor" | "minecraft:birch_wall_sign" | "minecraft:black_glazed_terracotta" | "minecraft:blackstone" | "minecraft:blackstone_double_slab" | "minecraft:blackstone_slab" | "minecraft:blackstone_stairs" | "minecraft:blackstone_wall" | "minecraft:blast_furnace" | "minecraft:blue_glazed_terracotta" | "minecraft:blue_ice" | "minecraft:bone_block" | "minecraft:bookshelf" | "minecraft:border_block" | "minecraft:brewing_stand" | "minecraft:brick_block" | "minecraft:brick_stairs" | "minecraft:brown_glazed_terracotta" | "minecraft:brown_mushroom" | "minecraft:brown_mushroom_block" | "minecraft:bubble_column" | "minecraft:cactus" | "minecraft:cake" | "minecraft:camera" | "minecraft:campfire" | "minecraft:carpet" | "minecraft:carrots" | "minecraft:cartography_table" | "minecraft:carved_pumpkin" | "minecraft:cauldron" | "minecraft:chain" | "minecraft:chain_command_block" | "minecraft:chemical_heat" | "minecraft:chemistry_table" | "minecraft:chest" | "minecraft:chiseled_nether_bricks" | "minecraft:chiseled_polished_blackstone" | "minecraft:chorus_flower" | "minecraft:chorus_plant" | "minecraft:clay" | "minecraft:coal_block" | "minecraft:coal_ore" | "minecraft:cobblestone" | "minecraft:cobblestone_wall" | "minecraft:cocoa" | "minecraft:colored_torch_bp" | "minecraft:colored_torch_rg" | "minecraft:command_block" | "minecraft:composter" | "minecraft:concrete" | "minecraft:concretePowder" | "minecraft:conduit" | "minecraft:coral" | "minecraft:coral_block" | "minecraft:coral_fan" | "minecraft:coral_fan_dead" | "minecraft:coral_fan_hang" | "minecraft:coral_fan_hang2" | "minecraft:coral_fan_hang3" | "minecraft:cracked_nether_bricks" | "minecraft:cracked_polished_blackstone_bricks" | "minecraft:crafting_table" | "minecraft:crimson_button" | "minecraft:crimson_door" | "minecraft:crimson_double_slab" | "minecraft:crimson_fence" | "minecraft:crimson_fence_gate" | "minecraft:crimson_fungus" | "minecraft:crimson_hyphae" | "minecraft:crimson_nylium" | "minecraft:crimson_planks" | "minecraft:crimson_pressure_plate" | "minecraft:crimson_roots" | "minecraft:crimson_slab" | "minecraft:crimson_stairs" | "minecraft:crimson_standing_sign" | "minecraft:crimson_stem" | "minecraft:crimson_trapdoor" | "minecraft:crimson_wall_sign" | "minecraft:crying_obsidian" | "minecraft:cyan_glazed_terracotta" | "minecraft:dark_oak_button" | "minecraft:dark_oak_door" | "minecraft:dark_oak_fence_gate" | "minecraft:dark_oak_pressure_plate" | "minecraft:dark_oak_stairs" | "minecraft:dark_oak_trapdoor" | "minecraft:dark_prismarine_stairs" | "minecraft:darkoak_standing_sign" | "minecraft:darkoak_wall_sign" | "minecraft:daylight_detector" | "minecraft:daylight_detector_inverted" | "minecraft:deadbush" | "minecraft:deny" | "minecraft:detector_rail" | "minecraft:diamond_block" | "minecraft:diamond_ore" | "minecraft:diorite_stairs" | "minecraft:dirt" | "minecraft:dispenser" | "minecraft:double_plant" | "minecraft:double_stone_slab" | "minecraft:double_stone_slab2" | "minecraft:double_stone_slab3" | "minecraft:double_stone_slab4" | "minecraft:double_wooden_slab" | "minecraft:dragon_egg" | "minecraft:dried_kelp_block" | "minecraft:dropper" | "minecraft:element_0" | "minecraft:element_1" | "minecraft:element_10" | "minecraft:element_100" | "minecraft:element_101" | "minecraft:element_102" | "minecraft:element_103" | "minecraft:element_104" | "minecraft:element_105" | "minecraft:element_106" | "minecraft:element_107" | "minecraft:element_108" | "minecraft:element_109" | "minecraft:element_11" | "minecraft:element_110" | "minecraft:element_111" | "minecraft:element_112" | "minecraft:element_113" | "minecraft:element_114" | "minecraft:element_115" | "minecraft:element_116" | "minecraft:element_117" | "minecraft:element_118" | "minecraft:element_12" | "minecraft:element_13" | "minecraft:element_14" | "minecraft:element_15" | "minecraft:element_16" | "minecraft:element_17" | "minecraft:element_18" | "minecraft:element_19" | "minecraft:element_2" | "minecraft:element_20" | "minecraft:element_21" | "minecraft:element_22" | "minecraft:element_23" | "minecraft:element_24" | "minecraft:element_25" | "minecraft:element_26" | "minecraft:element_27" | "minecraft:element_28" | "minecraft:element_29" | "minecraft:element_3" | "minecraft:element_30" | "minecraft:element_31" | "minecraft:element_32" | "minecraft:element_33" | "minecraft:element_34" | "minecraft:element_35" | "minecraft:element_36" | "minecraft:element_37" | "minecraft:element_38" | "minecraft:element_39" | "minecraft:element_4" | "minecraft:element_40" | "minecraft:element_41" | "minecraft:element_42" | "minecraft:element_43" | "minecraft:element_44" | "minecraft:element_45" | "minecraft:element_46" | "minecraft:element_47" | "minecraft:element_48" | "minecraft:element_49" | "minecraft:element_5" | "minecraft:element_50" | "minecraft:element_51" | "minecraft:element_52" | "minecraft:element_53" | "minecraft:element_54" | "minecraft:element_55" | "minecraft:element_56" | "minecraft:element_57" | "minecraft:element_58" | "minecraft:element_59" | "minecraft:element_6" | "minecraft:element_60" | "minecraft:element_61" | "minecraft:element_62" | "minecraft:element_63" | "minecraft:element_64" | "minecraft:element_65" | "minecraft:element_66" | "minecraft:element_67" | "minecraft:element_68" | "minecraft:element_69" | "minecraft:element_7" | "minecraft:element_70" | "minecraft:element_71" | "minecraft:element_72" | "minecraft:element_73" | "minecraft:element_74" | "minecraft:element_75" | "minecraft:element_76" | "minecraft:element_77" | "minecraft:element_78" | "minecraft:element_79" | "minecraft:element_8" | "minecraft:element_80" | "minecraft:element_81" | "minecraft:element_82" | "minecraft:element_83" | "minecraft:element_84" | "minecraft:element_85" | "minecraft:element_86" | "minecraft:element_87" | "minecraft:element_88" | "minecraft:element_89" | "minecraft:element_9" | "minecraft:element_90" | "minecraft:element_91" | "minecraft:element_92" | "minecraft:element_93" | "minecraft:element_94" | "minecraft:element_95" | "minecraft:element_96" | "minecraft:element_97" | "minecraft:element_98" | "minecraft:element_99" | "minecraft:emerald_block" | "minecraft:emerald_ore" | "minecraft:enchanting_table" | "minecraft:end_brick_stairs" | "minecraft:end_bricks" | "minecraft:end_gateway" | "minecraft:end_portal" | "minecraft:end_portal_frame" | "minecraft:end_rod" | "minecraft:end_stone" | "minecraft:ender_chest" | "minecraft:farmland" | "minecraft:fence" | "minecraft:fence_gate" | "minecraft:fire" | "minecraft:fletching_table" | "minecraft:flower_pot" | "minecraft:flowing_lava" | "minecraft:flowing_water" | "minecraft:frame" | "minecraft:frosted_ice" | "minecraft:furnace" | "minecraft:gilded_blackstone" | "minecraft:glass" | "minecraft:glass_pane" | "minecraft:glowingobsidian" | "minecraft:glowstone" | "minecraft:gold_block" | "minecraft:gold_ore" | "minecraft:golden_rail" | "minecraft:granite_stairs" | "minecraft:grass" | "minecraft:grass_path" | "minecraft:gravel" | "minecraft:gray_glazed_terracotta" | "minecraft:green_glazed_terracotta" | "minecraft:grindstone" | "minecraft:hard_glass" | "minecraft:hard_glass_pane" | "minecraft:hard_stained_glass" | "minecraft:hard_stained_glass_pane" | "minecraft:hardened_clay" | "minecraft:hay_block" | "minecraft:heavy_weighted_pressure_plate" | "minecraft:honey_block" | "minecraft:honeycomb_block" | "minecraft:hopper" | "minecraft:ice" | "minecraft:info_update" | "minecraft:info_update2" | "minecraft:invisibleBedrock" | "minecraft:iron_bars" | "minecraft:iron_block" | "minecraft:iron_door" | "minecraft:iron_ore" | "minecraft:iron_trapdoor" | "minecraft:jigsaw" | "minecraft:jukebox" | "minecraft:jungle_button" | "minecraft:jungle_door" | "minecraft:jungle_fence_gate" | "minecraft:jungle_pressure_plate" | "minecraft:jungle_stairs" | "minecraft:jungle_standing_sign" | "minecraft:jungle_trapdoor" | "minecraft:jungle_wall_sign" | "minecraft:kelp" | "minecraft:ladder" | "minecraft:lantern" | "minecraft:lapis_block" | "minecraft:lapis_ore" | "minecraft:lava" | "minecraft:lava_cauldron" | "minecraft:leaves" | "minecraft:leaves2" | "minecraft:lectern" | "minecraft:lever" | "minecraft:light_block" | "minecraft:light_blue_glazed_terracotta" | "minecraft:light_weighted_pressure_plate" | "minecraft:lime_glazed_terracotta" | "minecraft:lit_blast_furnace" | "minecraft:lit_furnace" | "minecraft:lit_pumpkin" | "minecraft:lit_redstone_lamp" | "minecraft:lit_redstone_ore" | "minecraft:lit_smoker" | "minecraft:lodestone" | "minecraft:log" | "minecraft:log2" | "minecraft:loom" | "minecraft:magenta_glazed_terracotta" | "minecraft:magma" | "minecraft:melon_block" | "minecraft:melon_stem" | "minecraft:mob_spawner" | "minecraft:monster_egg" | "minecraft:mossy_cobblestone" | "minecraft:mossy_cobblestone_stairs" | "minecraft:mossy_stone_brick_stairs" | "minecraft:movingBlock" | "minecraft:mycelium" | "minecraft:nether_brick" | "minecraft:nether_brick_fence" | "minecraft:nether_brick_stairs" | "minecraft:nether_gold_ore" | "minecraft:nether_sprouts" | "minecraft:nether_wart" | "minecraft:nether_wart_block" | "minecraft:netherite_block" | "minecraft:netherrack" | "minecraft:netherreactor" | "minecraft:normal_stone_stairs" | "minecraft:noteblock" | "minecraft:oak_stairs" | "minecraft:observer" | "minecraft:obsidian" | "minecraft:orange_glazed_terracotta" | "minecraft:packed_ice" | "minecraft:pink_glazed_terracotta" | "minecraft:piston" | "minecraft:pistonArmCollision" | "minecraft:planks" | "minecraft:podzol" | "minecraft:polished_andesite_stairs" | "minecraft:polished_basalt" | "minecraft:polished_blackstone" | "minecraft:polished_blackstone_brick_double_slab" | "minecraft:polished_blackstone_brick_slab" | "minecraft:polished_blackstone_brick_stairs" | "minecraft:polished_blackstone_brick_wall" | "minecraft:polished_blackstone_bricks" | "minecraft:polished_blackstone_button" | "minecraft:polished_blackstone_double_slab" | "minecraft:polished_blackstone_pressure_plate" | "minecraft:polished_blackstone_slab" | "minecraft:polished_blackstone_stairs" | "minecraft:polished_blackstone_wall" | "minecraft:polished_diorite_stairs" | "minecraft:polished_granite_stairs" | "minecraft:portal" | "minecraft:potatoes" | "minecraft:powered_comparator" | "minecraft:powered_repeater" | "minecraft:prismarine" | "minecraft:prismarine_bricks_stairs" | "minecraft:prismarine_stairs" | "minecraft:pumpkin" | "minecraft:pumpkin_stem" | "minecraft:purple_glazed_terracotta" | "minecraft:purpur_block" | "minecraft:purpur_stairs" | "minecraft:quartz_block" | "minecraft:quartz_bricks" | "minecraft:quartz_ore" | "minecraft:quartz_stairs" | "minecraft:rail" | "minecraft:red_flower" | "minecraft:red_glazed_terracotta" | "minecraft:red_mushroom" | "minecraft:red_mushroom_block" | "minecraft:red_nether_brick" | "minecraft:red_nether_brick_stairs" | "minecraft:red_sandstone" | "minecraft:red_sandstone_stairs" | "minecraft:redstone_block" | "minecraft:redstone_lamp" | "minecraft:redstone_ore" | "minecraft:redstone_torch" | "minecraft:redstone_wire" | "minecraft:reeds" | "minecraft:repeating_command_block" | "minecraft:reserved6" | "minecraft:respawn_anchor" | "minecraft:sand" | "minecraft:sandstone" | "minecraft:sandstone_stairs" | "minecraft:sapling" | "minecraft:scaffolding" | "minecraft:seaLantern" | "minecraft:sea_pickle" | "minecraft:seagrass" | "minecraft:shroomlight" | "minecraft:shulker_box" | "minecraft:silver_glazed_terracotta" | "minecraft:skull" | "minecraft:slime" | "minecraft:smithing_table" | "minecraft:smoker" | "minecraft:smooth_quartz_stairs" | "minecraft:smooth_red_sandstone_stairs" | "minecraft:smooth_sandstone_stairs" | "minecraft:smooth_stone" | "minecraft:snow" | "minecraft:snow_layer" | "minecraft:soul_campfire" | "minecraft:soul_fire" | "minecraft:soul_lantern" | "minecraft:soul_sand" | "minecraft:soul_soil" | "minecraft:soul_torch" | "minecraft:sponge" | "minecraft:spruce_button" | "minecraft:spruce_door" | "minecraft:spruce_fence_gate" | "minecraft:spruce_pressure_plate" | "minecraft:spruce_stairs" | "minecraft:spruce_standing_sign" | "minecraft:spruce_trapdoor" | "minecraft:spruce_wall_sign" | "minecraft:stained_glass" | "minecraft:stained_glass_pane" | "minecraft:stained_hardened_clay" | "minecraft:standing_banner" | "minecraft:standing_sign" | "minecraft:stickyPistonArmCollision" | "minecraft:sticky_piston" | "minecraft:stone" | "minecraft:stone_brick_stairs" | "minecraft:stone_button" | "minecraft:stone_pressure_plate" | "minecraft:stone_slab" | "minecraft:stone_slab2" | "minecraft:stone_slab3" | "minecraft:stone_slab4" | "minecraft:stone_stairs" | "minecraft:stonebrick" | "minecraft:stonecutter" | "minecraft:stonecutter_block" | "minecraft:stripped_acacia_log" | "minecraft:stripped_birch_log" | "minecraft:stripped_crimson_hyphae" | "minecraft:stripped_crimson_stem" | "minecraft:stripped_dark_oak_log" | "minecraft:stripped_jungle_log" | "minecraft:stripped_oak_log" | "minecraft:stripped_spruce_log" | "minecraft:stripped_warped_hyphae" | "minecraft:stripped_warped_stem" | "minecraft:structure_block" | "minecraft:structure_void" | "minecraft:sweet_berry_bush" | "minecraft:tallgrass" | "minecraft:target" | "minecraft:tnt" | "minecraft:torch" | "minecraft:trapdoor" | "minecraft:trapped_chest" | "minecraft:tripWire" | "minecraft:tripwire_hook" | "minecraft:turtle_egg" | "minecraft:twisting_vines" | "minecraft:underwater_torch" | "minecraft:undyed_shulker_box" | "minecraft:unlit_redstone_torch" | "minecraft:unpowered_comparator" | "minecraft:unpowered_repeater" | "minecraft:vine" | "minecraft:wall_banner" | "minecraft:wall_sign" | "minecraft:warped_button" | "minecraft:warped_door" | "minecraft:warped_double_slab" | "minecraft:warped_fence" | "minecraft:warped_fence_gate" | "minecraft:warped_fungus" | "minecraft:warped_hyphae" | "minecraft:warped_nylium" | "minecraft:warped_planks" | "minecraft:warped_pressure_plate" | "minecraft:warped_roots" | "minecraft:warped_slab" | "minecraft:warped_stairs" | "minecraft:warped_standing_sign" | "minecraft:warped_stem" | "minecraft:warped_trapdoor" | "minecraft:warped_wall_sign" | "minecraft:warped_wart_block" | "minecraft:water" | "minecraft:waterlily" | "minecraft:web" | "minecraft:weeping_vines" | "minecraft:wheat" | "minecraft:white_glazed_terracotta" | "minecraft:wither_rose" | "minecraft:wood" | "minecraft:wooden_button" | "minecraft:wooden_door" | "minecraft:wooden_pressure_plate" | "minecraft:wooden_slab" | "minecraft:wool" | "minecraft:yellow_flower" | "minecraft:yellow_glazed_terracotta";
declare type items = "minecraft:acacia_button" | "minecraft:acacia_door" | "minecraft:acacia_fence_gate" | "minecraft:acacia_pressure_plate" | "minecraft:acacia_sign" | "minecraft:acacia_stairs" | "minecraft:acacia_standing_sign" | "minecraft:acacia_trapdoor" | "minecraft:acacia_wall_sign" | "minecraft:activator_rail" | "minecraft:air" | "minecraft:allow" | "minecraft:ancient_debris" | "minecraft:andesite_stairs" | "minecraft:anvil" | "minecraft:apple" | "minecraft:appleenchanted" | "minecraft:armor_stand" | "minecraft:arrow" | "minecraft:baked_potato" | "minecraft:balloon" | "minecraft:bamboo" | "minecraft:bamboo_sapling" | "minecraft:banner" | "minecraft:banner_pattern" | "minecraft:barrel" | "minecraft:barrier" | "minecraft:basalt" | "minecraft:beacon" | "minecraft:bed" | "minecraft:bedrock" | "minecraft:bee_nest" | "minecraft:beef" | "minecraft:beehive" | "minecraft:beetroot" | "minecraft:beetroot_seeds" | "minecraft:beetroot_soup" | "minecraft:bell" | "minecraft:birch_button" | "minecraft:birch_door" | "minecraft:birch_fence_gate" | "minecraft:birch_pressure_plate" | "minecraft:birch_sign" | "minecraft:birch_stairs" | "minecraft:birch_standing_sign" | "minecraft:birch_trapdoor" | "minecraft:birch_wall_sign" | "minecraft:black_glazed_terracotta" | "minecraft:blackstone" | "minecraft:blackstone_double_slab" | "minecraft:blackstone_slab" | "minecraft:blackstone_stairs" | "minecraft:blackstone_wall" | "minecraft:blast_furnace" | "minecraft:blaze_powder" | "minecraft:blaze_rod" | "minecraft:bleach" | "minecraft:blue_glazed_terracotta" | "minecraft:blue_ice" | "minecraft:boat" | "minecraft:bone" | "minecraft:bone_block" | "minecraft:book" | "minecraft:bookshelf" | "minecraft:border_block" | "minecraft:bow" | "minecraft:bowl" | "minecraft:bread" | "minecraft:brewing_stand" | "minecraft:brewingstandblock" | "minecraft:brick" | "minecraft:brick_block" | "minecraft:brick_stairs" | "minecraft:brown_glazed_terracotta" | "minecraft:brown_mushroom" | "minecraft:brown_mushroom_block" | "minecraft:bubble_column" | "minecraft:bucket" | "minecraft:cactus" | "minecraft:cake" | "minecraft:camera" | "minecraft:campfire" | "minecraft:carpet" | "minecraft:carrot" | "minecraft:carrotonastick" | "minecraft:carrots" | "minecraft:cartography_table" | "minecraft:carved_pumpkin" | "minecraft:cauldron" | "minecraft:chain" | "minecraft:chain_command_block" | "minecraft:chainmail_boots" | "minecraft:chainmail_chestplate" | "minecraft:chainmail_helmet" | "minecraft:chainmail_leggings" | "minecraft:chemical_heat" | "minecraft:chemistry_table" | "minecraft:chest" | "minecraft:chest_minecart" | "minecraft:chicken" | "minecraft:chiseled_nether_bricks" | "minecraft:chiseled_polished_blackstone" | "minecraft:chorus_flower" | "minecraft:chorus_fruit" | "minecraft:chorus_fruit_popped" | "minecraft:chorus_plant" | "minecraft:clay" | "minecraft:clay_ball" | "minecraft:clock" | "minecraft:clownfish" | "minecraft:coal" | "minecraft:coal_block" | "minecraft:coal_ore" | "minecraft:cobblestone" | "minecraft:cobblestone_wall" | "minecraft:cocoa" | "minecraft:colored_torch_bp" | "minecraft:colored_torch_rg" | "minecraft:command_block" | "minecraft:command_block_minecart" | "minecraft:comparator" | "minecraft:compass" | "minecraft:composter" | "minecraft:compound" | "minecraft:concrete" | "minecraft:concrete_powder" | "minecraft:conduit" | "minecraft:cooked_beef" | "minecraft:cooked_chicken" | "minecraft:cooked_fish" | "minecraft:cooked_porkchop" | "minecraft:cooked_rabbit" | "minecraft:cooked_salmon" | "minecraft:cookie" | "minecraft:coral" | "minecraft:coral_block" | "minecraft:coral_fan" | "minecraft:coral_fan_dead" | "minecraft:coral_fan_hang" | "minecraft:coral_fan_hang2" | "minecraft:coral_fan_hang3" | "minecraft:cracked_nether_bricks" | "minecraft:cracked_polished_blackstone_bricks" | "minecraft:crafting_table" | "minecraft:crimson_button" | "minecraft:crimson_door" | "minecraft:crimson_double_slab" | "minecraft:crimson_fence" | "minecraft:crimson_fence_gate" | "minecraft:crimson_fungus" | "minecraft:crimson_hyphae" | "minecraft:crimson_nylium" | "minecraft:crimson_planks" | "minecraft:crimson_pressure_plate" | "minecraft:crimson_roots" | "minecraft:crimson_sign" | "minecraft:crimson_slab" | "minecraft:crimson_stairs" | "minecraft:crimson_standing_sign" | "minecraft:crimson_stem" | "minecraft:crimson_trapdoor" | "minecraft:crimson_wall_sign" | "minecraft:crossbow" | "minecraft:crying_obsidian" | "minecraft:cyan_glazed_terracotta" | "minecraft:dark_oak_button" | "minecraft:dark_oak_door" | "minecraft:dark_oak_fence_gate" | "minecraft:dark_oak_pressure_plate" | "minecraft:dark_oak_stairs" | "minecraft:dark_oak_trapdoor" | "minecraft:dark_prismarine_stairs" | "minecraft:darkoak_sign" | "minecraft:darkoak_standing_sign" | "minecraft:darkoak_wall_sign" | "minecraft:daylight_detector" | "minecraft:daylight_detector_inverted" | "minecraft:deadbush" | "minecraft:debug_stick" | "minecraft:deny" | "minecraft:detector_rail" | "minecraft:diamond" | "minecraft:diamond_axe" | "minecraft:diamond_block" | "minecraft:diamond_boots" | "minecraft:diamond_chestplate" | "minecraft:diamond_helmet" | "minecraft:diamond_hoe" | "minecraft:diamond_leggings" | "minecraft:diamond_ore" | "minecraft:diamond_pickaxe" | "minecraft:diamond_shovel" | "minecraft:diamond_sword" | "minecraft:diorite_stairs" | "minecraft:dirt" | "minecraft:dispenser" | "minecraft:double_plant" | "minecraft:double_stone_slab" | "minecraft:double_stone_slab2" | "minecraft:double_stone_slab3" | "minecraft:double_stone_slab4" | "minecraft:double_wooden_slab" | "minecraft:dragon_breath" | "minecraft:dragon_egg" | "minecraft:dried_kelp" | "minecraft:dried_kelp_block" | "minecraft:dropper" | "minecraft:dye" | "minecraft:egg" | "minecraft:element_0" | "minecraft:element_1" | "minecraft:element_10" | "minecraft:element_100" | "minecraft:element_101" | "minecraft:element_102" | "minecraft:element_103" | "minecraft:element_104" | "minecraft:element_105" | "minecraft:element_106" | "minecraft:element_107" | "minecraft:element_108" | "minecraft:element_109" | "minecraft:element_11" | "minecraft:element_110" | "minecraft:element_111" | "minecraft:element_112" | "minecraft:element_113" | "minecraft:element_114" | "minecraft:element_115" | "minecraft:element_116" | "minecraft:element_117" | "minecraft:element_118" | "minecraft:element_12" | "minecraft:element_13" | "minecraft:element_14" | "minecraft:element_15" | "minecraft:element_16" | "minecraft:element_17" | "minecraft:element_18" | "minecraft:element_19" | "minecraft:element_2" | "minecraft:element_20" | "minecraft:element_21" | "minecraft:element_22" | "minecraft:element_23" | "minecraft:element_24" | "minecraft:element_25" | "minecraft:element_26" | "minecraft:element_27" | "minecraft:element_28" | "minecraft:element_29" | "minecraft:element_3" | "minecraft:element_30" | "minecraft:element_31" | "minecraft:element_32" | "minecraft:element_33" | "minecraft:element_34" | "minecraft:element_35" | "minecraft:element_36" | "minecraft:element_37" | "minecraft:element_38" | "minecraft:element_39" | "minecraft:element_4" | "minecraft:element_40" | "minecraft:element_41" | "minecraft:element_42" | "minecraft:element_43" | "minecraft:element_44" | "minecraft:element_45" | "minecraft:element_46" | "minecraft:element_47" | "minecraft:element_48" | "minecraft:element_49" | "minecraft:element_5" | "minecraft:element_50" | "minecraft:element_51" | "minecraft:element_52" | "minecraft:element_53" | "minecraft:element_54" | "minecraft:element_55" | "minecraft:element_56" | "minecraft:element_57" | "minecraft:element_58" | "minecraft:element_59" | "minecraft:element_6" | "minecraft:element_60" | "minecraft:element_61" | "minecraft:element_62" | "minecraft:element_63" | "minecraft:element_64" | "minecraft:element_65" | "minecraft:element_66" | "minecraft:element_67" | "minecraft:element_68" | "minecraft:element_69" | "minecraft:element_7" | "minecraft:element_70" | "minecraft:element_71" | "minecraft:element_72" | "minecraft:element_73" | "minecraft:element_74" | "minecraft:element_75" | "minecraft:element_76" | "minecraft:element_77" | "minecraft:element_78" | "minecraft:element_79" | "minecraft:element_8" | "minecraft:element_80" | "minecraft:element_81" | "minecraft:element_82" | "minecraft:element_83" | "minecraft:element_84" | "minecraft:element_85" | "minecraft:element_86" | "minecraft:element_87" | "minecraft:element_88" | "minecraft:element_89" | "minecraft:element_9" | "minecraft:element_90" | "minecraft:element_91" | "minecraft:element_92" | "minecraft:element_93" | "minecraft:element_94" | "minecraft:element_95" | "minecraft:element_96" | "minecraft:element_97" | "minecraft:element_98" | "minecraft:element_99" | "minecraft:elytra" | "minecraft:emerald" | "minecraft:emerald_block" | "minecraft:emerald_ore" | "minecraft:emptymap" | "minecraft:enchanted_book" | "minecraft:enchanting_table" | "minecraft:end_brick_stairs" | "minecraft:end_bricks" | "minecraft:end_crystal" | "minecraft:end_gateway" | "minecraft:end_portal" | "minecraft:end_portal_frame" | "minecraft:end_rod" | "minecraft:end_stone" | "minecraft:ender_chest" | "minecraft:ender_eye" | "minecraft:ender_pearl" | "minecraft:experience_bottle" | "minecraft:farmland" | "minecraft:feather" | "minecraft:fence" | "minecraft:fence_gate" | "minecraft:fermented_spider_eye" | "minecraft:fire" | "minecraft:fireball" | "minecraft:fireworks" | "minecraft:fireworkscharge" | "minecraft:fish" | "minecraft:fishing_rod" | "minecraft:fletching_table" | "minecraft:flint" | "minecraft:flint_and_steel" | "minecraft:flower_pot" | "minecraft:flowing_lava" | "minecraft:flowing_water" | "minecraft:frame" | "minecraft:frosted_ice" | "minecraft:furnace" | "minecraft:ghast_tear" | "minecraft:gilded_blackstone" | "minecraft:glass" | "minecraft:glass_bottle" | "minecraft:glass_pane" | "minecraft:glow_stick" | "minecraft:glowingobsidian" | "minecraft:glowstone" | "minecraft:glowstone_dust" | "minecraft:gold_block" | "minecraft:gold_ingot" | "minecraft:gold_nugget" | "minecraft:gold_ore" | "minecraft:golden_apple" | "minecraft:golden_axe" | "minecraft:golden_boots" | "minecraft:golden_carrot" | "minecraft:golden_chestplate" | "minecraft:golden_helmet" | "minecraft:golden_hoe" | "minecraft:golden_leggings" | "minecraft:golden_pickaxe" | "minecraft:golden_rail" | "minecraft:golden_shovel" | "minecraft:golden_sword" | "minecraft:granite_stairs" | "minecraft:grass" | "minecraft:grass_path" | "minecraft:gravel" | "minecraft:gray_glazed_terracotta" | "minecraft:green_glazed_terracotta" | "minecraft:grindstone" | "minecraft:gunpowder" | "minecraft:hard_glass" | "minecraft:hard_glass_pane" | "minecraft:hard_stained_glass" | "minecraft:hard_stained_glass_pane" | "minecraft:hardened_clay" | "minecraft:hay_block" | "minecraft:heart_of_the_sea" | "minecraft:heavy_weighted_pressure_plate" | "minecraft:honey_block" | "minecraft:honey_bottle" | "minecraft:honeycomb" | "minecraft:honeycomb_block" | "minecraft:hopper" | "minecraft:hopper_minecart" | "minecraft:horsearmordiamond" | "minecraft:horsearmorgold" | "minecraft:horsearmoriron" | "minecraft:horsearmorleather" | "minecraft:ice" | "minecraft:ice_bomb" | "minecraft:info_update" | "minecraft:info_update2" | "minecraft:invisiblebedrock" | "minecraft:iron_axe" | "minecraft:iron_bars" | "minecraft:iron_block" | "minecraft:iron_boots" | "minecraft:iron_chestplate" | "minecraft:iron_door" | "minecraft:iron_helmet" | "minecraft:iron_hoe" | "minecraft:iron_ingot" | "minecraft:iron_leggings" | "minecraft:iron_nugget" | "minecraft:iron_ore" | "minecraft:iron_pickaxe" | "minecraft:iron_shovel" | "minecraft:iron_sword" | "minecraft:iron_trapdoor" | "minecraft:item.acacia_door" | "minecraft:item.bed" | "minecraft:item.beetroot" | "minecraft:item.birch_door" | "minecraft:item.cake" | "minecraft:item.camera" | "minecraft:item.campfire" | "minecraft:item.cauldron" | "minecraft:item.chain" | "minecraft:item.crimson_door" | "minecraft:item.dark_oak_door" | "minecraft:item.flower_pot" | "minecraft:item.frame" | "minecraft:item.hopper" | "minecraft:item.iron_door" | "minecraft:item.jungle_door" | "minecraft:item.kelp" | "minecraft:item.nether_sprouts" | "minecraft:item.nether_wart" | "minecraft:item.reeds" | "minecraft:item.skull" | "minecraft:item.soul_campfire" | "minecraft:item.spruce_door" | "minecraft:item.warped_door" | "minecraft:item.wheat" | "minecraft:item.wooden_door" | "minecraft:jigsaw" | "minecraft:jukebox" | "minecraft:jungle_button" | "minecraft:jungle_door" | "minecraft:jungle_fence_gate" | "minecraft:jungle_pressure_plate" | "minecraft:jungle_sign" | "minecraft:jungle_stairs" | "minecraft:jungle_standing_sign" | "minecraft:jungle_trapdoor" | "minecraft:jungle_wall_sign" | "minecraft:kelp" | "minecraft:ladder" | "minecraft:lantern" | "minecraft:lapis_block" | "minecraft:lapis_ore" | "minecraft:lava" | "minecraft:lava_cauldron" | "minecraft:lead" | "minecraft:leather" | "minecraft:leather_boots" | "minecraft:leather_chestplate" | "minecraft:leather_helmet" | "minecraft:leather_leggings" | "minecraft:leaves" | "minecraft:leaves2" | "minecraft:lectern" | "minecraft:lever" | "minecraft:light_block" | "minecraft:light_blue_glazed_terracotta" | "minecraft:light_weighted_pressure_plate" | "minecraft:lime_glazed_terracotta" | "minecraft:lingering_potion" | "minecraft:lit_blast_furnace" | "minecraft:lit_furnace" | "minecraft:lit_pumpkin" | "minecraft:lit_redstone_lamp" | "minecraft:lit_redstone_ore" | "minecraft:lit_smoker" | "minecraft:lodestone" | "minecraft:lodestonecompass" | "minecraft:log" | "minecraft:log2" | "minecraft:loom" | "minecraft:magenta_glazed_terracotta" | "minecraft:magma" | "minecraft:magma_cream" | "minecraft:map" | "minecraft:medicine" | "minecraft:melon" | "minecraft:melon_block" | "minecraft:melon_seeds" | "minecraft:melon_stem" | "minecraft:minecart" | "minecraft:mob_spawner" | "minecraft:monster_egg" | "minecraft:mossy_cobblestone" | "minecraft:mossy_cobblestone_stairs" | "minecraft:mossy_stone_brick_stairs" | "minecraft:movingblock" | "minecraft:mushroom_stew" | "minecraft:muttoncooked" | "minecraft:muttonraw" | "minecraft:mycelium" | "minecraft:name_tag" | "minecraft:nautilus_shell" | "minecraft:nether_brick" | "minecraft:nether_brick_fence" | "minecraft:nether_brick_stairs" | "minecraft:nether_gold_ore" | "minecraft:nether_sprouts" | "minecraft:nether_wart" | "minecraft:nether_wart_block" | "minecraft:netherbrick" | "minecraft:netherite_axe" | "minecraft:netherite_block" | "minecraft:netherite_boots" | "minecraft:netherite_chestplate" | "minecraft:netherite_helmet" | "minecraft:netherite_hoe" | "minecraft:netherite_ingot" | "minecraft:netherite_leggings" | "minecraft:netherite_pickaxe" | "minecraft:netherite_scrap" | "minecraft:netherite_shovel" | "minecraft:netherite_sword" | "minecraft:netherrack" | "minecraft:netherreactor" | "minecraft:netherstar" | "minecraft:normal_stone_stairs" | "minecraft:noteblock" | "minecraft:oak_stairs" | "minecraft:observer" | "minecraft:obsidian" | "minecraft:orange_glazed_terracotta" | "minecraft:packed_ice" | "minecraft:painting" | "minecraft:paper" | "minecraft:phantom_membrane" | "minecraft:pink_glazed_terracotta" | "minecraft:piston" | "minecraft:pistonarmcollision" | "minecraft:planks" | "minecraft:podzol" | "minecraft:poisonous_potato" | "minecraft:polished_andesite_stairs" | "minecraft:polished_basalt" | "minecraft:polished_blackstone" | "minecraft:polished_blackstone_brick_double_slab" | "minecraft:polished_blackstone_brick_slab" | "minecraft:polished_blackstone_brick_stairs" | "minecraft:polished_blackstone_brick_wall" | "minecraft:polished_blackstone_bricks" | "minecraft:polished_blackstone_button" | "minecraft:polished_blackstone_double_slab" | "minecraft:polished_blackstone_pressure_plate" | "minecraft:polished_blackstone_slab" | "minecraft:polished_blackstone_stairs" | "minecraft:polished_blackstone_wall" | "minecraft:polished_diorite_stairs" | "minecraft:polished_granite_stairs" | "minecraft:porkchop" | "minecraft:portal" | "minecraft:potato" | "minecraft:potatoes" | "minecraft:potion" | "minecraft:powered_comparator" | "minecraft:powered_repeater" | "minecraft:prismarine" | "minecraft:prismarine_bricks_stairs" | "minecraft:prismarine_crystals" | "minecraft:prismarine_shard" | "minecraft:prismarine_stairs" | "minecraft:pufferfish" | "minecraft:pumpkin" | "minecraft:pumpkin_pie" | "minecraft:pumpkin_seeds" | "minecraft:pumpkin_stem" | "minecraft:purple_glazed_terracotta" | "minecraft:purpur_block" | "minecraft:purpur_stairs" | "minecraft:quartz" | "minecraft:quartz_block" | "minecraft:quartz_bricks" | "minecraft:quartz_ore" | "minecraft:quartz_stairs" | "minecraft:rabbit" | "minecraft:rabbit_foot" | "minecraft:rabbit_hide" | "minecraft:rabbit_stew" | "minecraft:rail" | "minecraft:rapid_fertilizer" | "minecraft:real_double_stone_slab" | "minecraft:real_double_stone_slab2" | "minecraft:real_double_stone_slab3" | "minecraft:real_double_stone_slab4" | "minecraft:record_11" | "minecraft:record_13" | "minecraft:record_blocks" | "minecraft:record_cat" | "minecraft:record_chirp" | "minecraft:record_far" | "minecraft:record_mall" | "minecraft:record_mellohi" | "minecraft:record_pigstep" | "minecraft:record_stal" | "minecraft:record_strad" | "minecraft:record_wait" | "minecraft:record_ward" | "minecraft:red_flower" | "minecraft:red_glazed_terracotta" | "minecraft:red_mushroom" | "minecraft:red_mushroom_block" | "minecraft:red_nether_brick" | "minecraft:red_nether_brick_stairs" | "minecraft:red_sandstone" | "minecraft:red_sandstone_stairs" | "minecraft:redstone" | "minecraft:redstone_block" | "minecraft:redstone_lamp" | "minecraft:redstone_ore" | "minecraft:redstone_torch" | "minecraft:redstone_wire" | "minecraft:reeds" | "minecraft:repeater" | "minecraft:repeating_command_block" | "minecraft:reserved6" | "minecraft:respawn_anchor" | "minecraft:rotten_flesh" | "minecraft:saddle" | "minecraft:salmon" | "minecraft:sand" | "minecraft:sandstone" | "minecraft:sandstone_stairs" | "minecraft:sapling" | "minecraft:scaffolding" | "minecraft:sea_pickle" | "minecraft:seagrass" | "minecraft:sealantern" | "minecraft:shears" | "minecraft:shield" | "minecraft:shroomlight" | "minecraft:shulker_box" | "minecraft:shulker_shell" | "minecraft:sign" | "minecraft:silver_glazed_terracotta" | "minecraft:skull" | "minecraft:slime" | "minecraft:slime_ball" | "minecraft:smithing_table" | "minecraft:smoker" | "minecraft:smooth_quartz_stairs" | "minecraft:smooth_red_sandstone_stairs" | "minecraft:smooth_sandstone_stairs" | "minecraft:smooth_stone" | "minecraft:snow" | "minecraft:snow_layer" | "minecraft:snowball" | "minecraft:soul_campfire" | "minecraft:soul_fire" | "minecraft:soul_lantern" | "minecraft:soul_sand" | "minecraft:soul_soil" | "minecraft:soul_torch" | "minecraft:sparkler" | "minecraft:spawn_egg" | "minecraft:speckled_melon" | "minecraft:spider_eye" | "minecraft:splash_potion" | "minecraft:sponge" | "minecraft:spruce_button" | "minecraft:spruce_door" | "minecraft:spruce_fence_gate" | "minecraft:spruce_pressure_plate" | "minecraft:spruce_sign" | "minecraft:spruce_stairs" | "minecraft:spruce_standing_sign" | "minecraft:spruce_trapdoor" | "minecraft:spruce_wall_sign" | "minecraft:stained_glass" | "minecraft:stained_glass_pane" | "minecraft:stained_hardened_clay" | "minecraft:standing_banner" | "minecraft:standing_sign" | "minecraft:stick" | "minecraft:sticky_piston" | "minecraft:stickypistonarmcollision" | "minecraft:stone" | "minecraft:stone_axe" | "minecraft:stone_brick_stairs" | "minecraft:stone_button" | "minecraft:stone_hoe" | "minecraft:stone_pickaxe" | "minecraft:stone_pressure_plate" | "minecraft:stone_shovel" | "minecraft:stone_stairs" | "minecraft:stone_sword" | "minecraft:stonebrick" | "minecraft:stonecutter" | "minecraft:stonecutter_block" | "minecraft:string" | "minecraft:stripped_acacia_log" | "minecraft:stripped_birch_log" | "minecraft:stripped_crimson_hyphae" | "minecraft:stripped_crimson_stem" | "minecraft:stripped_dark_oak_log" | "minecraft:stripped_jungle_log" | "minecraft:stripped_oak_log" | "minecraft:stripped_spruce_log" | "minecraft:stripped_warped_hyphae" | "minecraft:stripped_warped_stem" | "minecraft:structure_block" | "minecraft:structure_void" | "minecraft:sugar" | "minecraft:suspicious_stew" | "minecraft:sweet_berries" | "minecraft:sweet_berry_bush" | "minecraft:tallgrass" | "minecraft:target" | "minecraft:tnt" | "minecraft:tnt_minecart" | "minecraft:torch" | "minecraft:totem" | "minecraft:trapdoor" | "minecraft:trapped_chest" | "minecraft:trident" | "minecraft:tripwire" | "minecraft:tripwire_hook" | "minecraft:turtle_egg" | "minecraft:turtle_helmet" | "minecraft:turtle_shell_piece" | "minecraft:twisting_vines" | "minecraft:underwater_torch" | "minecraft:undyed_shulker_box" | "minecraft:unlit_redstone_torch" | "minecraft:unpowered_comparator" | "minecraft:unpowered_repeater" | "minecraft:vine" | "minecraft:wall_banner" | "minecraft:wall_sign" | "minecraft:warped_button" | "minecraft:warped_door" | "minecraft:warped_double_slab" | "minecraft:warped_fence" | "minecraft:warped_fence_gate" | "minecraft:warped_fungus" | "minecraft:warped_fungus_on_a_stick" | "minecraft:warped_hyphae" | "minecraft:warped_nylium" | "minecraft:warped_planks" | "minecraft:warped_pressure_plate" | "minecraft:warped_roots" | "minecraft:warped_sign" | "minecraft:warped_slab" | "minecraft:warped_stairs" | "minecraft:warped_standing_sign" | "minecraft:warped_stem" | "minecraft:warped_trapdoor" | "minecraft:warped_wall_sign" | "minecraft:warped_wart_block" | "minecraft:water" | "minecraft:waterlily" | "minecraft:web" | "minecraft:weeping_vines" | "minecraft:wheat" | "minecraft:wheat_seeds" | "minecraft:white_glazed_terracotta" | "minecraft:wither_rose" | "minecraft:wood" | "minecraft:wooden_axe" | "minecraft:wooden_button" | "minecraft:wooden_door" | "minecraft:wooden_hoe" | "minecraft:wooden_pickaxe" | "minecraft:wooden_pressure_plate" | "minecraft:wooden_shovel" | "minecraft:wooden_slab" | "minecraft:wooden_sword" | "minecraft:wool" | "minecraft:writable_book" | "minecraft:written_book" | "minecraft:yellow_flower" | "minecraft:yellow_glazed_terracotta";
