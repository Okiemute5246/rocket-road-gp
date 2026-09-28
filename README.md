# Rocket Road GP

A 3D kart racer that runs in the browser. Race five computer rivals over three laps, drift for mini-turbos, grab items and unlock all four tracks.

## Tracks

| # | Track | Setting |
|---|-------|---------|
| 1 | Pepper Hill | Rolling green hills |
| 2 | Cloud Nine Skyway | A floating road above the clouds |
| 3 | Coral Causeway | A bridge over the sea |
| 4 | Magma Mountain | A tunnel and an erupting volcano that throws lava bombs |

Finish a track in the top 3 to unlock the next one. Progress is saved in your browser, and **Reset progress** on the title screen locks the tracks again.

Each track has its own music and background sounds, generated live with the Web Audio API.

## Controls

| Key | Action |
|-----|--------|
| W / ↑ | Accelerate |
| S / ↓ | Brake / reverse |
| A D / ← → | Steer |
| Space / Shift | Drift (hold while turning, let go for a mini-turbo) |
| E / X | Use item (hold S to throw a shell backwards) |
| R | Put your kart back on the track |
| Esc / P | Pause |
| N | Music on/off |
| M | Sound effects on/off |

On phones and tablets, on-screen buttons appear and the kart accelerates by itself.

## Run it locally

The game is a single `index.html` file. Three.js and the fonts load from public CDNs, so you need an internet connection.

Opening the file directly works, but serving it is closer to how it runs online:

```
python -m http.server 8000
```

Then open http://localhost:8000.

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then save.
4. After a minute or two the game is live at `https://<your-username>.github.io/<repository-name>/`.

## Built with

- [Three.js](https://threejs.org/) r128 for the 3D graphics
- Web Audio API for the music and sound effects
- Google Fonts: Racing Sans One and Chakra Petch
