# Minecraft-Scripting-API-Types
Typescript support for the Scripting API and add all script types.

## Minecraft Scripting API Typescript Support

This project contains type definitions for the [Minecraft Scripting API](https://www.minecraft.net/en-us/article/scripting-api-now-public-beta).  This repo covers nearly all aspects of the API.

As of now, this repo targets Minecraft v1.16.20.3[Latest].


## Features

 - All system bindings.
 - All Script API objects.
 - Event identifiers and respective Event Data.
 - Components and respective Component Data.
 - Identifiers for entities, items and blocks.
 - Custom events and components.

**NOTE**: This does not include documentation for the types. Please refer to the [Official Addon Page](https://www.minecraft.net/en-us/addons) to find the files containing the documentation, or alternatively, you can visit [Bedrock.dev](https://www.bedrock.dev), an unofficial host of Minecraft Addon documentation.
 
 ## Docs

### Prerequisites

 1. NPM and [Nodejs](https://nodejs.org)
 2. Visual Studio Code\[RECOMMENDED\] or Visual Studio
 
 ### Setup
 *You can skip this part if you already know how to setup a typescript project, just download the release or use `npm install ts-mcbe-scripting` and reference it in your project and you should be on your way.*

 1. Create a directory for your addon.
 2. Run `npm init && npm install ts-mcbe-scripting typescript -D && npx tsc --init`. It will initialize an npm project, install the required packages and initialize a typescript project in your directory.
 3. Configure your project by add this to your package.json
 ```JSON
{
    "private": true // This means your project is not meant to be published.
}
 ```
 4. For the tsconfig.json,
 ```json
{
    "target": "ES5",
    "module": "ES6",
    "rootDir": "src", // This is where your typescript files go
    "outDir": "out" // Will contain project output
}
 ```
 5. For convenience, your folder structure should look like
```
- package.json
- tsconfig.json
- node_modules\
- src\
    - scripts\
            - client\
                   client.ts
            - server\
                   server.ts
```
 6. Assuming it's client.ts
```typescript
/// <reference path="../../../node_modules/dist/mcbe-types.d.ts" />
const clientSystem = client.registerSystem(0, 0);
clientSystem.initialize = function() {}

clientSystem.update = function() {}
```
Code hints from your IDE or editor should pop up as you type.
After all of that, simply run in the shell, `npx tsc --build` to build/compile your project.

NOTE: `mcbe-types.d.ts` is located in the `dist` folder of the package in the `node_modules` folder.

REF: `node_modules > dist > mcbe-types.d.ts`

### Basic Usage
After installing the package.
```typescript
/// <reference path="path/to/typings/in/packages/dist/folder" />
const serverSystem = server.registerSystem(0, 0);
serverSystem.initialize = function() {
    this.listenForEvent("minecraft:entity_death", this.onEntityDeath();
}

serverSystem.update = function() {};

serverSystem.onEntityDeath = function(e: EntityDeathEventData) {
    if (e.data.entity.__identifier__ == "minecraft:cow") {
        this.executeCommand(`/tellraw @a {"text": "A cow was slaughtered in a cold blood.", "color": "red"}`, (e) => {});
    }
}
```

NOTE: Due to the natural of the standard scripting conventions like the one above, new methods on the `ServerSystem` or `ClientSystem` will not show up in intelli-sense(code hints). Please see aspects for how to tackle this.

### Aspects

#### Mapped values for bindings
When using the system's event and component binding methods, you'll receive a good bit of type information based on the string used in the function
```typescript
serverSystem.listenForEvent("minecraft:entity_death", (e) => {});
// The type of the parameter `e` will be the `EntityDeathEventData` interface.
```

#### Extending the system
If you need that extra level of type safety in your `ClientSystem` or `ServerSystem`. You can extend the them and add on new methods.

```typescript
interface MyClientSystem extends ClientSystem {
    sendMessage(this: this, message: string): void; // this parameter should be defined so you can use this in the sendMessage method.
}

const clientSystem = client.registerSystem<MyClientSystem>(0, 0);

clientSystem.sendMessage = function(message) {
    // Creating event data.
    let messageEventData = this.createEventData("minecraft:display_chat_event");

    messageEventData.data.message = message;

    // Broadcasting the event.
    this.broadcastEvent("minecraft:display_chat_event", messageEventData);
}
```

A more complicated example combining the custom events with interface extension.
```typescript
// An interface map of custom events
interface MyCustomEventMap extends EventMap {
	"myaddon:alien_nuke_activated": AlienNukeActivatedEventData;
}

interface AlienNukeActivatedEventData extends EventData {
	data: {
		nuke_position: MCVector;
		activated_by: string;
	}
}

// An interface map of custom components
interface MyCustomComponentMap extends ComponentMap {
	"myaddon:alien_synergy": AlienNukeActivatedEventData;
        // You can add more components and events using this format.
}

interface AlienSynergyComponentData extends Component {
	data: {
		synergy_radius: number;
		synergy_filter: MCFilter; // This belongs to the type library.
	}
}

interface MyClientSystem<C extends EventMap = EventMap, Com extends ComponentMap = ComponentMap> extends ClientSystem {
    sendMessage(this: this, message: string): void; // this parameter should be defined so you can use this in the sendMessage method.
}

const clientSystem = client.registerSystem<MyClientSystem<MyCustomEventMap, MyCustomComponentMap>>(0, 0);
// or const clientSystem: MyClientSystem<MyCustomEventMap, MyCustomComponentMap>  = client.registerSystem(0, 0);

clientSystem.sendMessage = function(message) {
    // Creating event data.
    let messageEventData = this.createEventData("minecraft:display_chat_event");

    messageEventData.data.message = message;

    // Broadcasting the event.
    this.broadcastEvent("minecraft:display_chat_event", messageEventData);
}
```

#### Assertions
Due to the structure of the library, some features will unfortunately only be accessible through 'hacky' measures.
Most system methods require and or return Script API objects. In the event that custom entities, blocks, particles etc are used, typescript will not recognize them. To make them work, you can assert your custom entities, blocks, and items etc as part of the vanilla values

##### Example
```typescript
// Bad example but still a case assertions can solved.
serverSystem.checkCustomEntity = function() {
    let g = this.createEntity('entity', "tsapidoc:lorem_entity" as entities);
    if (g.__identifier__ == "tsapidoc:lorem_entity" as entities) { // `tsapidoc:lorem_entity` will not show up in intellisense/code hints for g.__identifier.
        this.broadcastEvent("minecraft:display_chat_event", {
            data: {
                message: "This part works"
            }
        })
    }
}
```
This can be done for `<blocks>`, `<entities>`, and `<items>`. 
NOTE: These assertions don't allow for extra type safety, they are simply a way to move away from the limitations are the library.****
#### Custom Components and Events
Rather than passing a type parameter into component and event binding methods, The types are written in a way that a map of component identifiers or event identifiers to Component data or Event data is passed into the `ClientSystem` or `ServerSystem` Object.

```TypeScript

// An interface map of custom events
interface MyCustomEventMap extends EventMap {
	"myaddon:alien_nuke_activated": AlienNukeActivatedEventData;
}

interface AlienNukeActivatedEventData extends EventData {
	data: {
		nuke_position: MCVector;
		activated_by: string;
	}
}

// An interface map of custom components
interface MyCustomComponentMap extends ComponentMap {
	"myaddon:alien_synergy": AlienNukeActivatedEventData;
        // You can add more components and events using this format.
}

interface AlienSynergyComponentData extends Component {
	data: {
		synergy_radius: number;
		synergy_filter: MCFilter; // This belongs to the type library.
	}
}

// Both of the type parameters are optional, they can be excluded when ever.
const serverSystem: ServerSystem<MyCustomEventMap, MyCustomComponentMap> = server.registerSystem(0, 0); // Yes, It looks hacky but this is how it was intended to be used.
// Of course, you still need to register your custom events and components.
// Now your custom components and events will show up in the intellisense for all related methods.
```
I understand that this is extremely verbose but within the limits of my knowledge, this was a good way to improve the allowance of type safety. 


If you need any further help and or experiencing issues, feel free to make a issue.
**Pull requests are most welcome**
