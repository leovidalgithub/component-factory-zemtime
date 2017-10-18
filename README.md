# Component Factory

## Motivation

Created for develop and testing components before make them npm packages

## How to use

At the begining in the project exists 2 components: **ia-comp-header** and **ia-comp-sidebar** and both are correct.
For new components must use a hard link *(for windows users view [mklink command](https://technet.microsoft.com/es-es/library/cc753194(v=ws.10).aspx))* to "copy" the component's sources, and then must add the component to the declarations' area in the **app.mpodule.ts** file.

When the component has been injected, then we need to run `npm start` for view the component run correctly.