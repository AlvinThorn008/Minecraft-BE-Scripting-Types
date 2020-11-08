import { MCVector, Entity, ItemStack, MCAVector } from './common';

/**
 * EventData Base Interface
 */
export interface EventData {}

/**
 * ServerEventData Base Interface
 * All other server event data interfaces are derived from this Interface
 */
export interface ServerEventData extends EventData {
    data: {};
}

/**
 * ClientEventData Base Interface
 * All other client event data interfaces are derived from this Interface
 */
export interface ClientEventData extends EventData {
    data: {};
}

/**
 * TriggerableClientEventData Base Interface
 * All other triggerable client event data interfaces are derived from this Interface
 */
export interface TriggerableClientEventData extends ClientEventData {
    data: {};
}

/**
 * TriggerableServerEventData Base Interface
 * All other triggerable server event data interfaces are derived from this Interface
 */
export interface TriggerableServerEventData extends ServerEventData {
    data: {};
}

// Server Events

export interface BlockDestructionStartedEventData extends ServerEventData {
    data: {
        block_position: MCVector;
        player: Entity
    }
}

export interface BlockDestructionStoppedEventData extends ServerEventData {
    data: {
        block_position: MCVector;
        destruction_progress: number;
        player: Entity
    }
}

export interface BlockExplodedEventData extends ServerEventData {
    data: {
        block_identifier: string;
        block_position: MCVector;
        cause: string;
        entity: Entity;
    }
}

export interface BlockInteractedWithEventData extends ServerEventData {
    data: {
        block_position: MCVector;
        player: Entity;
    }
}

export interface EntityAcquiredItemEventData extends ServerEventData {
    data: {
        acquired_amount: number;
        acquisition_method: string;
        entity: Entity;
        item_stack: ItemStack;
        secondary_entity: Entity;
    }
}

export interface EntityAttackEventData extends ServerEventData {
    data: {
        entity: Entity;
        target: Entity;
    }
}

export interface EntityCarriedItemEventData extends ServerEventData {
    data: {
        carried_item: ItemStack;
        entity: Entity;
        hand: string;
        previous_carried_item: ItemStack;
    }
}

export interface EntityCreatedEventData extends ServerEventData {
    data: {
        entity: Entity;
    }
}

export interface EntityDeathEventData extends ServerEventData {
    data: {
        block_position: MCVector;
        cause: string;
        entity: Entity;
        killer: Entity;
        projectile_type: string;
    }
}

export interface EntityDefinitionEventData extends ServerEventData {
    data: {
        entity: Entity;
        event: string;
    }
}

export interface EntityDroppedItemEventData extends ServerEventData {
    data: {
        entity: Entity;
        item_stack: ItemStack;
    }
}

export interface EntityEquippedArmorEventData extends ServerEventData {
    data: {
        entity: Entity;
        item_stack: ItemStack;
        slot: string;
    }
}

export interface EntityHurtEventData extends ServerEventData {
    data: {
        absorbed_damage: number;
        attacker: Entity;
        block_position: MCVector;
        cause: string;
        damage: number;
        entity: Entity;
        projectile_type: string;
    }
}

export interface EntitySneakEventData extends ServerEventData {
    data: {
        entity: Entity;
        sneaking: boolean;
    }
}

export interface EntityStartRidingEventData extends ServerEventData {
    data: {
        entity: Entity;
        ride: Entity;
    }
}

export interface EntityStopRidingEventData extends ServerEventData {
    data: {
        entity: Entity;
        entity_is_being_destroyed: boolean;
        exit_from_rider: boolean;
        switching_rides: boolean;
    }
}

export interface EntityTickEventData extends ServerEventData {
    data: {
        entity: Entity;
    }
}

export interface EntityUseItemEventData extends ServerEventData {
    data: {
        entity: Entity;
        item_stack: ItemStack;
        use_method: string;
    }
}

export interface PistonMovedBlockEventData extends ServerEventData {
    data: {
        block_position: MCVector;
        piston_action: string;
        piston_position: MCVector;
    }
}

export interface PlaySoundEventData extends ServerEventData {
    data: {
        pitch: number;
        position: MCAVector;
        sound: string;
        volume: number;
    }
}

export interface PlayerAttackedEntityEventData extends ServerEventData {
    data: {
        attacked_entity: Entity;
        player: Entity;
    }
}

export interface PlayerDestroyedBlockEventData extends ServerEventData {
    data: {
        block_identifier: string;
        block_position: MCVector;
        player: Entity;
    }
}

export interface PlayerPlacedBlockEventData extends ServerEventData {
    data: {
        block_position: MCVector;
        player: Entity;
    }
}

export interface ProjectileHitEventData extends ServerEventData {
    data: {
        entity: Entity;
        owner: Entity;
        position: MCAVector;
        projectile: Entity;
    }
}

export interface WeatherChangedEventData extends ServerEventData {
    data: {
        dimension: string;
        lightning: boolean;
        raining: boolean;
    }
}

/**
 * All server related event identifiers
 */
export type serverEvents = "minecraft:block_destruction_started" |
"minecraft:block_destruction_stopped" |
"minecraft:block_exploded" |
"minecraft:block_interacted_with" |
"minecraft:entity_acquired_item" |
"minecraft:entity_attack" |
"minecraft:entity_carried_item_changed" |
"minecraft:entity_created" |
"minecraft:entity_death" |
"minecraft:entity_definition_event" |
"minecraft:entity_dropped_item" |
"minecraft:entity_equipped_armor" |
"minecraft:entity_hurt" |
"minecraft:entity_sneak" |
"minecraft:entity_start_riding" |
"minecraft:entity_stop_riding" |
"minecraft:entity_tick" |
"minecraft:entity_use_item" |
"minecraft:piston_moved_block" |
"minecraft:play_sound" |
"minecraft:player_attacked_entity" |
"minecraft:player_destroyed_block" |
"minecraft:player_placed_block" |
"minecraft:projectile_hit" |
"minecraft:weather_changed";

export interface ClientEnteredWorldEventData extends ClientEventData {
    data: {
        entity: Entity;
    }
}
export interface HitResultChangedEventData extends ClientEventData {
    data: {
        entity: Entity;
        position: MCAVector;
    }
}

export interface HitResultContinuousEventData extends ClientEventData {
    data: {
        entity: Entity;
        position: MCAVector;
    }
}

export interface PickHitResultChangedEventData extends ClientEventData {
    data: {
        entity: Entity;
        position: MCAVector;
    }
}
export interface PickHitResultContinuousEventData extends ClientEventData {
    data: {
        entity: Entity;
        position: MCAVector;
    }
}

/**
 * All client related event identifiers
 */
export type clientEvents = "minecraft:client_entered_world" |
"minecraft:hit_result_changed" |
"minecraft:hit_result_continuous" |
"minecraft:pick_hit_result_changed" |
"minecraft:pick_hit_result_continuous";

// Trigger-able client events

export interface DisplayChatEventEventData extends TriggerableClientEventData {
    data: {
        message: string;
    }
}

export interface LoadUiEventData extends TriggerableClientEventData {
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
        }
        path: string
    }
}

export interface ScriptLoggerConfigEventData extends TriggerableClientEventData {
    data: {
        log_errors: boolean;
        log_information: boolean;
        log_warnings: boolean;
    }
}

export interface SendUiEventEventData extends TriggerableClientEventData {
    data: {
        data: string;
        eventIdentifer: string;
    }
}

export interface SpawnParticleAttachedEntityEventData extends TriggerableClientEventData {
    data: {
        effect: string;
        entity: Entity;
        offset: MCAVector
    }
}

export interface SpawnParticleInWorldEventData extends TriggerableClientEventData {
    data: {
        effect: string;
        position: MCAVector
    }
}

export interface UnloadUiEventData extends TriggerableClientEventData {
    data: {}
}

/**
 * All Triggerable client related event identifiers
 */
export type triggerableClientEvents = "minecraft:display_chat_event" | "minecraft:load_ui" | "minecraft:script_logger_config" | "minecraft:send_ui_event" | "minecraft:spawn_particle_attached_entity" | "minecraft:spawn_particle_in_world" | "minecraft:unload_ui";    
    
export interface EntityDefinitionEventEventData extends TriggerableServerEventData {
    data: {
        entity: Entity;
        event: string;
    }
}

export interface ExecuteCommandEventData extends TriggerableServerEventData {
    data: {
        command: string;
    }
}

/**
 * All Triggerable server related event identifiers
 */
export type triggerableServerEvents = "minecraft:display_chat_event" | "minecraft:entity_definition_event" | "minecraft:execute_command" | "minecraft:play_sound" | "minecraft:script_logger_config" | "minecraft:spawn_particle_attached_entity" | "minecraft:spawn_particle_in_world";

/**
 * EventMap
 * Base Interface for all Event Identifier to Event Data mappings.
 */
export interface EventMap {}

/**
 * ClientEventMap
 * Sub Interface for all client related Event Identifier to Event Data mappings.
 */
export interface ClientEventMap extends EventMap {
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
export interface ServerEventMap extends EventMap {
    "minecraft:block_destruction_started": BlockDestructionStartedEventData;
    "minecraft:block_destruction_stopped": BlockDestructionStoppedEventData;
    "minecraft:block_exploded": BlockExplodedEventData;
    "minecraft:block_interacted_with": BlockInteractedWithEventData;
    "minecraft:entity_acquired_item": EntityAcquiredItemEventData
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
export interface TriggerableClientEventMap extends EventMap {
    "minecraft:display_chat_event": DisplayChatEventEventData;
    "minecraft:load_ui": LoadUiEventData;
    "minecraft:script_logger_config": ScriptLoggerConfigEventData
    "minecraft:send_ui_event": SendUiEventEventData;
    "minecraft:spawn_particle_attached_entity": SpawnParticleAttachedEntityEventData;
    "minecraft:spawn_particle_in_world": SpawnParticleInWorldEventData;
    "minecraft:unload_ui": UnloadUiEventData;
}

/**
 * TriggerableServerEventMap
 * Sub Interface for all server related Event Identifier to Event Data mappings.
 */
export interface TriggerableServerEventMap extends EventMap {
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
export type BroadcastEventMap = TriggerableServerEventMap & TriggerableClientEventMap;

/**
 * ListenEventMap
 * Contains all mappings for all events that can be listened to.
 * This also serves as a mapping for all defined events.
 */
export type ListenEventMap = ClientEventMap & ServerEventMap & BroadcastEventMap;

/**
 * CustomEventMap
 * Defaults Mappings for custom events.
 */
export interface CustomEventMap extends EventMap {}

