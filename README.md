# Blue Agency Website

Website-ul oficial al Blue Agency, o companie specializata in automatizari si optimizari de procese de afaceri.

## Caracteristici

- Design modern si responsive
- Animatii CSS pentru o experienta utilizator imbunatatita
- Sectiune de portofoliu cu filtrare dinamica
- Formular de contact functional
- Interfata in limba romana
- Compatibilitate cu toate dispozitivele

## Structura Proiectului

```
blue-agency/
├── index.html          # Pagina principala
├── portfolio.html      # Pagina de portofoliu
├── styles.css          # Stiluri CSS
├── script.js           # Scripturi JavaScript
└── README.md           # Documentatie
```

## Tehnologii Utilizate

- HTML5
- CSS3 (cu animatii si variabile CSS)
- JavaScript (ES6+)
- Font Awesome pentru iconite
- Google Fonts (Poppins)

## Instalare si Rulare

1. Cloneaza repository-ul:
```bash
git clone https://github.com/yourusername/blue-agency.git
```

2. Deschide `index.html` in browser-ul preferat

## Personalizare

### Culori
Culorile principale pot fi modificate in fisierul `styles.css` prin variabilele CSS:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    --text-color: #1f2937;
    --light-text: #6b7280;
    --background: #ffffff;
    --section-bg: #f3f4f6;
}
```

### Portofoliu
Pentru a adauga proiecte noi in portofoliu, adauga un nou element in sectiunea `portfolio-grid` din `portfolio.html`:
```html
<div class="portfolio-item" data-category="category-name">
    <div class="portfolio-image" style="background-image: url('image-url')"></div>
    <div class="portfolio-content">
        <h3>Nume Proiect</h3>
        <p>Descriere proiect</p>
        <div class="portfolio-links">
            <a href="#" target="_blank">Live Demo</a>
            <a href="#" target="_blank">GitHub</a>
        </div>
    </div>
</div>
```

## Contributii

Contributiile sunt binevenite! Pentru a contribui:

1. Fork repository-ul
2. Creeaza un branch nou (`git checkout -b feature/AmazingFeature`)
3. Commit schimbarile (`git commit -m 'Add some AmazingFeature'`)
4. Push catre branch (`git push origin feature/AmazingFeature`)
5. Deschide un Pull Request

## Licenta

Acest proiect este licentiat sub licenta MIT - vezi fisierul [LICENSE](LICENSE) pentru detalii.

## Contact

Pentru intrebari sau sugestii, contactati-ne la:
- Email: contact@blueagency.ro
- Website: https://blueagency.ro 