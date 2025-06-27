# vilinh27-rooms

I wanted a website entirely for me. I can show all things from code to crafts. Something self indulgent really that i can play with more than a portfolio. Something i dont have to overthink. The theme is based on an artist group I like called Envy Green Manor. Each collection (of clothes) they release is themed into a room added to the manor. They are unfortunately closing, so I thought this would be a fun chance to comemorate them in my own way. You as the user get to choose which door to enter, which represents which discipline to explore, from code, to art, to ux or even crafts.

# Process

## User flow

Link to draw.io flow chart: https://app.diagrams.net/#Dme-site_2025.drawio#%7B%22pageId%22%3A%22lhPDe5OhCmLXhX0DRedJ%22%7D
![User flow chart]()

## Figma low fidelity prototype.

Link to figma lofi prototype:
![lowfi prototype chart]()

## Assets for Final site.

### Sound on icon

![Sound On Icon](./linh-rooms/public/assets/icons/soundonicon.png)

### Sound off icon

![Sound Off Icon](./linh-rooms/public/assets/icons/soundofficon.png)

### Light Mode Icon

![Light Mode Icon](./linh-rooms/public/assets/icons/lightmodeicon.png)

### Dark Mode Icon

![Dark Mode Icon](./linh-rooms/public/assets/icons/darkmodeicon.png)

### Fun Font Icon

![Fun Font Icon](./linh-rooms/public/assets/icons/dysFontOff01.webp)

### Dyslexia Friendly Font Icon

![Dyslexia friendly font icon](./linh-rooms/public/assets/icons/dysFontOn.webp)

### Window for Nav bar

![Window for Nav bar](./linh-rooms/public/assets/images/room-windows.png)

![Window with Curtains](./linh-rooms/public/assets/images/window-curtains.webp)

### Door closed

![Door Closed](./linh-rooms/public/assets/images/room-doors.png)

### Door Open

![Door Open](./linh-rooms/public/assets/images/opendoorway.webp)

### Tibia stationary

![Tibia stationary]()

### Tibia waving

![Tibia waving]()

## Fonts

Fun Font: https://fonts.google.com/specimen/Courier+Prime?query=courier

Dyslexia friendly font: https://fonts.google.com/specimen/Lexend

## Audio Credits

Rainy days _Final Version_ (Acoustic/Piano) by M-Murray -- https://freesound.org/s/695951/ -- License: Attribution 4.0

Pop 9 by D.S.G. -- https://freesound.org/s/328119/ -- License: Creative Commons 0

unlock_door.wav by fuzzpapi -- https://freesound.org/s/147347/ -- License: Creative Commons 0

open close old window with birds outside sound effect by Garuda1982 -- https://freesound.org/s/553474/ -- License: Attribution 4.0

-Edited using : https://audiomass.co

## Placeholder image credits

https://www.vecteezy.com/png/48096241-ornate-vintage-brass-keyhole-plate-on-transparent-background

https://pikwizard.com/png/elegant-brass-key-in-keyhole-on-transparent-background/b80f9838a4c625a97e7e5e4d4fa1520e/

## Notes

### The Sound Toggle and decoupling it from the MusicDog component

Both these components help in creating a state control that's reachable from everything in the app (also why we wrap the App in index with SoundProvider ).

Once SoundCOntext and SoundProivder elements like toggleSound and isSoundOn is reachable thorughout the app, we don't have to pass around a bunch props, which is more scalable (we don't have to constantly remember passing a bunch of props when adding more compoennts).

#### Sound Context

The new sound context component will manage the main sound mode stuff so Sounttoggle doesn't do too many things at once.

#### Sound Provider

Provider component inside sound context works for sound context in managing sound mode from the looks of it.

#### Music Dog Audio decoupling

SoundToggle componenet doesn't need to directly interact with music dog's audio now that it can globally handle isSoundOn and toggleSound so the components aren't as brittle if something changes.

#### App.js being the center of command of sound stuff

The main thing this file does for sound is manage directly the background music for the dog. The useEffect used for playing/pausing the audio is gonna depend on two things now: isPlaying (local state for whether dog button pressed or not), and isSoundOn from the context thing.

So if the music dog button is pressed, the music plays only if th global sound on setting is active.

If the user toggles sound off via sound toggle (the component), music mutes, even if music dog is dancing.

If the user toggles sound on again, the music starts again if music dog was set to playing.

### Getting specific components to play specific sounds based on what is being clicked.

Would it be better to make a separate file to control what sound is played based on what is clicked? Or go directly into the individual component to play the specific sound from there?

#### Directly in the component

Can be good and scalable for hyper specific components and sounds

##### Pros

- encapsulation : Since the audio is directly tied to the component, it doesn't mess with any other ones. Plus the component pretty much does one thing anyway.

- Simplicity: Don't have to pass props or context for passing aduio files around which is a pain

- Performance: Audio object created anad managed by the one component

##### Cons

- Repeating: if a lot of components need similar sounds (like all buttons needing a click) then it's gonna get reptitive

- global control: it's gonna be harder to mute everything with sound off sound on if the sound is inside the component.
  -- Probably why I'm not gonna stick with this one and go for centralized approach

#### Separate more central control

Helps when the way components play sounds is similar ,even if the sounds are different.

##### Pros

- Reusability: just need to write the sound effect logic once, to use it across many things.

- Clean Components: each component only does one thing and sound playing won't muddy that up

- Centralized sound management: when building the hook, we can make it so it respects the SoundCOntext and isSoundOn to make sure sound on and sound off works fine.

##### Cons

- more of a pain to code

### ABout the useHoverImg hook

#### accpeting an image refernce, the default image and the hover image

Put these in for the hook to accept since the image reference is mutable and depends on the default image and hover image arguments. Helps to make this hook usuable for anything that i want to hover and change image of.

Note the useState defaults to the default image.

The useEffect with the image reference, default iamge, and hover image in the dependency arrah now have something that references the actual DOM now.

The handlemouseenter and handlemouseleave functions updating the current image isn't too different from vanilla js now.

The cleanup functino helps prevnet memory leaks or anything horrible happening.

Returning the current image source attribute now can be used in the image tag (being changed)

## Issues

### Making a hook for image hovering changes

I had a let image = "filepath" at first inside the hook. That accesses the dom directly, which should be avoided when working hook stuff in react. Since react updates the dom and may mess with the image stuff.

When initializing something when its mounting, using useeffect, that thing doesn't know what is being initialized.

So when i'm making a custom hook, gotta remember it's only working on logic and state. The component the hook is being used in is where youprovide things like the images that are gonna change and stuff.

useRef is gonna reference the DOM and pass that to the custom hook.
