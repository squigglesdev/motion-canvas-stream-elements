<br/>
<p align="center">
  <a href="https://motion-canvas.github.io">
    <img width="180" src="https://motion-canvas.github.io/img/logo_dark.svg" alt="Motion Canvas logo">
  </a>
</p>
<p align="center">
  <a href="https://lerna.js.org"><img src="https://img.shields.io/badge/published%20with-lerna-c084fc?style=flat" alt="published with lerna"></a>
  <a href="https://vitejs.dev"><img src="https://img.shields.io/badge/powered%20by-vite-646cff?style=flat" alt="powered by vite"></a>
</p>
<br/>

# Motion Canvas Stream Elements

Motion Canvas Stream Elements is built off [Motion Canvas][mc], for use in [OBS][obs].

## Using MC Stream Elements

Requires base knowledge of Motion Canvas. If you don't know how to use it, check out the [Motion Canvas docs][docs] to learn how to use it.
To use, clone the repo and run
```
npm i
```
Then feel free to modify the `src/scenes/streamelements.tsx` file to your liking, making sure to have at least one presentation slide. Then run
```
npm run serve
```
to start hosting the project on your local machine. You can then add a browser source in OBS, pointing to `http://localhost:9000?present` (or whatever port vite has given you in the terminal output). Then in OBS press the interact button when the browser source is selected, then press the full screen icon to remove the Motion Canvas UI. Future versions will remove the need for this step.


[authenticate]:
  https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token
[template]: https://github.com/motion-canvas/project-template#using-the-template
[discord]: https://chat.motioncanvas.io
[docs]: https://motioncanvas.io/docs/
[mc]: https://motioncanvas.io
[obs]: https://obsproject.com