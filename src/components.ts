import { Component, EntityTickingArea, ItemStack, LevelTickingArea, MCFilter, MCRange, MCVector, MCAVector, items } from './common';

export type components = blockComponents | clientComponents | levelComponents | serverComponents;

export type blockComponents = "minecraft:blockstate";

export type clientComponents = "minecraft:molang";

export type levelComponents = "minecraft:ticking_areas" | "minecraft:weather";

export type serverComponents = "minecraft:armor_container" | "minecraft:attack" | "minecraft:collision_box" | "minecraft:container" | "minecraft:damage_sensor" | "minecraft:equipment" | "minecraft:equippable" | "minecraft:explode" | "minecraft:hand_container" | "minecraft:healable" | "minecraft:health" | "minecraft:hotbar_container" | "minecraft:interact" | "minecraft:inventory" | "minecraft:inventory_container" | "minecraft:lookat" | "minecraft:nameable" | "minecraft:position" | "minecraft:rotation" | "minecraft:shooter" | "minecraft:spawn_entity" | "minecraft:tag" | "minecraft:teleport" | "minecraft:tick_world" | "minecraft:ticking_area_description" | "minecraft:transformation";

export interface ClientComponent extends Component {
    data: {}
}

export interface ServerComponent extends Component {
    data: {}
}

// Block Components

export interface BlockStateComponent extends Component {
    data: {
        [key: string]: any;
    }
}

// Client Components

export interface MolangComponent extends ClientComponent {
    data: {
        [key: string]: any;
    }
}

// Level Components

export interface TickingAreasComponent extends ServerComponent {
    data: {
        ticking_areas: Array<LevelTickingArea>;
    }
}

export interface WeatherComponent extends ServerComponent {
    data: {
        do_weather_cycle: boolean;
        lightning_level: number;
        lightning_time: number;
        rain_level: number;
    }
}

// Server Components

export interface ArmorContainerComponent extends ServerComponent {
    data: Array<ItemStack>;
}

export interface AttackComponent extends ServerComponent {
    data: {
        damage: MCRange;
    }
}

export interface CollisionBoxComponent extends ServerComponent {
    data: {
        height: number;
        width: number;
    }
}

export interface ContainerComponent extends ServerComponent {
    data: Array<ItemStack>
}

export interface DamageSensorComponent extends ServerComponent {
    data: Array<{
        cause: string;
        damage_multiplier: number;
        deals_damage: boolean;
        on_damage: string;
        on_damage_sound_event: string;
    }>
}

export interface EquipmentComponent extends ServerComponent {
    data: {
        slot_drop_chance: Array<any>;
        table: string;
    }
}

export interface EquippableComponent extends ServerComponent {
    data: {
        accepted_items: Array<string> // Make item literal type
        interact_text: string;
        item: string;
        on_equip: string;
        on_unequip: string;
        slot: number;
    }
}


export interface ExplodeComponent extends ServerComponent {
    data: {
        breaks_blocks: boolean;
        causes_fire: boolean;
        destroy_affected_by_griefing: boolean;
        fire_affected_by_griefing: boolean;
        fuse_length: MCRange;
        fuse_lit: boolean;
        max_resistance: number;
        power: number;
    }
}


export interface HandContainerComponent extends ServerComponent {
    data: Array<ItemStack>;
}


export interface HealableComponent extends ServerComponent {
    data: {
        filters: Array<MCFilter> | MCFilter;
        force_use: boolean;
        items: Array<{heal_amount: number, item: string}>
    }
}


export interface HealthComponent extends ServerComponent {
    data: {
        max: number;
        value: number;
    }
}


export interface HotbarContainerComponent extends ServerComponent {
    data: Array<ItemStack>;
}


export interface InteractComponent extends ServerComponent {
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
    }
}

export interface InventoryComponent extends ServerComponent {
    data: {
        additional_slots_per_strength: number;
        can_be_siphoned: boolean;
        container_type: string;
        inventory_size: number;
        private: boolean;
        restrict_to_owner: boolean;
    }
}


export interface InventoryContainerComponent extends ServerComponent {
    data: Array<ItemStack>;
}


export interface LookatComponent extends ServerComponent {
    data: {
        allow_invulnerable: boolean;
        filters: MCFilter | Array<MCFilter>;
        look_cooldown: MCRange;
        look_event: string;
        search_radius: number;
        set_target: boolean;
    }
}


export interface NameableComponent extends ServerComponent {
    data: {
        allow_name_tag_renaming: boolean;
        always_show: boolean;
        default_trigger: string;
        name: string;
        name_actions: string | {
            name_filter: Array<string>;
            on_named: string;
        }
    }
}


export interface PositionComponent extends ServerComponent {
    data: MCVector;
}


export interface RotationComponent extends ServerComponent {
    data: {
        x: number;
        y: number;
    }
}


export interface ShooterComponent extends ServerComponent {
    data: {
        auxVal: number;
        def: string;
    }
}

export interface SpawnEntityComponent extends ServerComponent {
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
    }
}

export interface TagComponent extends ServerComponent {
    data: Array<string>
}

export interface TeleportComponent extends ServerComponent {
    data: {
        dark_teleport_chance: number;
        light_teleport_chance: number;
        max_random_teleport_time: number;
        min_random_teleport_time: number;
        random_teleport_cube: MCAVector;
        random_teleports: boolean;
        target_distance: number;
        target_teleport_chance: number;
    }
}

export interface TickWorldComponent extends ServerComponent {
    data: {
        distance_To_players: number;
        never_despawn: boolean;
        radius: number;
        ticking_area: EntityTickingArea;
    }
}


export interface TickingAreaDescriptionComponent extends ServerComponent {
    data: {
        is_circle: boolean;
        max: MCAVector;
        name: string;
        origin: MCAVector;
        radius: MCAVector
    }
}

export interface TransformationComponent extends ServerComponent {
    data: {
        add: {
            "component_groups": []
        };
        begin_transform_sound: string;
        delay: {
            "block_assist_chance": number;
            "block_chance": number,
            "block_max": number,
            "block_radius": number,
            "block_types": []
            "keep_owner": boolean,
            "value": number
        };
        drop_equipment: boolean;
        into: string;
        transformation_sound: string;
    }
}

export interface CustomComponentMap extends ComponentMap{}

export interface ClientComponentMap extends ComponentMap {
    "minecraft:molang": MolangComponent;
    "minecraft:blockstate": BlockStateComponent;
} 

export interface ServerComponentMap extends ComponentMap {
    "minecraft:blockstate": BlockStateComponent;
    "minecraft:ticking_areas": TickingAreasComponent;
    "minecraft:weather": WeatherComponent;
    "minecraft:armor_container": ArmorContainerComponent;
    "minecraft:attack": AttackComponent;
    "minecraft:collision_box": CollisionBoxComponent;
    "minecraft:container": ContainerComponent;
    "minecraft:damage_sensor": DamageSensorComponent;
    "minecraft:equipment": EquipmentComponent;
    "minecraft:equippable": EquippableComponent
    "minecraft:explode": ExplodeComponent;
    "minecraft:hand_container": HandContainerComponent
    "minecraft:healable": HealableComponent;
    "minecraft:health": HealthComponent;
    "minecraft:hotbar_container": HotbarContainerComponent;
    "minecraft:interact": InteractComponent;
    "minecraft:inventory": InventoryComponent
    "minecraft:inventory_container": InventoryContainerComponent
    "minecraft:lookat": LookatComponent;
    "minecraft:nameable": NameableComponent
    "minecraft:position": PositionComponent;
    "minecraft:rotation": RotationComponent
    "minecraft:shooter": ShooterComponent;
    "minecraft:spawn_entity": SpawnEntityComponent
    "minecraft:tag": TagComponent;
    "minecraft:teleport": TeleportComponent
    "minecraft:tick_world": TickWorldComponent;
    "minecraft:ticking_area_description": TickingAreaDescriptionComponent
    "minecraft:transformation": TransformationComponent
}

export interface ScriptComponentMap extends ComponentMap {
    "minecraft:ticking_areas": TickingAreasComponent;
    "minecraft:weather": WeatherComponent
}

export interface ComponentMap {}

export type AllComponentMap = ServerComponentMap & ClientComponentMap & ScriptComponentMap
