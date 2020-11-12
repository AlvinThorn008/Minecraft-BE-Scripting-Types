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

### Aspects

#### Mapped values for bindings
When using the system's event and component binding methods, you'll receive a good bit of type information based on the string used in the function
```typescript
serverSystem.listenForEvent("minecraft:entity_death", (e) => {});
// The type of the parameter `e` will be the `EntityDeathEventData` interface.
```

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

If you need any further help, feel free to make a issue or on the (Bedrock OSS discord server)[https://discord.gg/XjV87YN]
