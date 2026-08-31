# Portfolio d'Adam Berrada

Portfolio technique consacré aux systèmes embarqués, à l'IoT, à la robotique et à l'IA en périphérie.

Le site présente :

- l'expérience professionnelle chez Locacoeur et le contexte public NYXeos ;
- M2S, un distributeur médical connecté récompensé à I-NOVGAMES ;
- FishDrone, un drone de surface autonome ;
- BoatVision, une étude de détection et d'OCR embarqués.

## Développement local

Prérequis : Node.js 22 ou une version ultérieure.

```bash
npm ci
npm run dev
```

## Vérifications

```bash
npm run lint
npm run build:pages
```

`npm run build:pages` génère une version statique dans `out/`, configurée pour l'adresse `https://pentademic.github.io/portfolio/`.

## Déploiement

Chaque mise à jour de la branche `main` déclenche le workflow GitHub Pages défini dans `.github/workflows/deploy-pages.yml`.

Site : [pentademic.github.io/portfolio](https://pentademic.github.io/portfolio/)
