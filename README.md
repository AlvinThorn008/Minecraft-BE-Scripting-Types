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
 - Identifiers for entities, items and blocks.(Item and block identifiers have to be imported)
 - Custom events and components.

**NOTE**: This does not include documentation for the types. Please refer to the [Official Addon Page](https://www.minecraft.net/en-us/addons) to find the files containing the documentation, or alternatively, you can visit [Bedrock.dev](https://www.bedrock.dev), an unofficial host of Minecraft Addon documentation.
 
 ## Docs

### Prerequisites

 1. NPM and [Nodejs](https://nodejs.org)
 
 ### Setup
 *You can skip this part if you already know how to setup a typescript project, just download the  release and you should be on your way.*
 1. Download the `mcbe.d.ts` file.
 2. Initialize the project with `npm init`.
 3. Install `typescript` with `npm install typescript -D`
 4. Create a folder, initialize a `tsconfig.json`in it and make a directory within it called `src` and `types`. 
 ```
C:\Users\MackWatt>md myAddon
C:\Users\MackWatt>cd myAddon
C:\Users\MackWatt>tsc --init
C:\Users\MackWatt>md src
C:\Users\MackWatt>md types
 ```
 5. Move the `mcbe.d.ts` file into `types` folder. 
 6. Add in the other files in this folder structure below
 ```
 /> myAddon
    |> tsconfig.json
    /> src
       /> client
		  |> client.ts
       /> server
          |> server.ts
    /> types
       |> mcbe.d.ts
 ```
 7. Change the `tsconfig` settings and add the type definition to your project and  in your `tsconfig.json`.
 ```JSON
 {
	 ...
	 "target": "ES2016",
	 "outDir": "./build",
	 "rootDir": "./src",
	 "typeRoots": ["./types"]
 }
 ```
 8. You can now start working with the files
 9. Run `tsc --build` when you are done.

### Aspects

#### Custom Components and Events
Rather than passing a type parameter into component and event binding methods, I have made it so that a map of component identifiers or event identifiers to Component data or Event data is passed into the `ClientSystem` or `ServerSystem` Object.

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
}

interface AlienSynergyComponentData extends Component {
	data: {
		synergy_radius: number;
		synergy_filter: MCFilter;
	}
}

const serverSystem: ServerSystem<MyCustomEventMap, MyCustomComponentMap> = server.registerSystem(0, 0);
// Now your custom components and events will show up in the intellisense for all related methods.
```

