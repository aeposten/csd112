# CSD112 – HTML and CSS

## Course Description

This course is an introduction to HyperText Markup Language (HTML) and Cascading Style Sheets (CSS). Students examine the key components of HTML to create functional web pages and apply CSS style sheets to improve page layout and overall appearance. The course also introduces responsive web design principles and accessibility considerations.

---

## Navigation

- [Assignment 01: Creating Basic HTML Elements](#assignment-01-creating-basic-html-elements)
- [Assignment 02: Understanding Images & Copyright](#assignment-02-understanding-images--copyright)
- [Assignment 03: Styling a Recipe with CSS](#assignment-03-styling-a-recipe-with-css)
- [Assignment 04: Typography and Color with CSS](#assignment-04-typography-and-color-with-css)

---

## Assignment 01: Creating Basic HTML Elements

**[View Assignment Files](https://github.com/aeposten/csd112/tree/main/assignments/assignment-1)**

### Overview

This assignment focused on the structural foundation of the web. I practiced using semantic HTML5 tags to ensure the document is readable by both browsers and assistive technologies.

**Screenshots:**
<br>
<img
  src="assignments/assignment-1/assets/assignment-01-screenshot.png"
  width="400"
  alt="Screenshot for page created for Assignment 01 with CSS styling enabled.">
<img
  src="assignments/assignment-1/assets/assignment-01-screenshot2.png"
  width="400"
  alt="Screenshot for page created for Assignment 01 with CSS disabled, showing semantic HTML structure.">

### Assignment Objectives

- Demonstrate understanding of basic HTML elements
- Practice structuring an HTML document
- Apply concepts of accessibility and semantic markup

### Assignment Requirements

<details>
<summary>Click to view full requirements</summary>

- `doctype` for HTML5  
- `html`, `head`, and `body` tags  
- UTF-8 `meta` tag  
- `title` (Name – Assignment 01)  
- **Semantic elements:** `header`, `nav`, `main`, `section` or `article`, `aside`, `footer`  
- At least two different heading elements  
- Two paragraphs  
- One preformatted paragraph (`pre`)  
- One quote or blockquote with citation  
- Two list styles (ordered and unordered)  
- One `address`  
- Horizontal rule (`hr`)  
- Line break (`br`)  
- Comment with name in the `head`  
- Four symbols or entities  
- One HTML code snippet  
- One `sup` and one `sub`  

</details>

### My Submission: Favorite Adventure Time Wizards

For this assignment, I created a page dedicated to the wizards of the *Adventure Time* universe. Semantic sections were used to group content logically and meet all required HTML elements.

#### "Magic Toggle"

Although the assignment focused on HTML structure, I added optional CSS and JavaScript for fun. A navigation button allows users to disable all CSS, revealing the underlying semantic structure. This also gave me practice using the `aria-pressed` attribute.

#### Colors & Accessibility

The color palette was generated using [Randoma11y](https://randoma11y.com/) to ensure accessible color contrast.

### Deployed Page

https://aeposten.github.io/csd112/assignments/assignment-1/

---

## Assignment 02: Understanding Images & Copyright

**[View Assignment Files](https://github.com/aeposten/csd112/tree/main/assignments/assignment-2)**

### Overview

This assignment focused on semantic HTML structure and foundational web literacy surrounding image usage, copyright, and optimization. Content is organized into three standalone articles, each with a Q&A section and a dedicated citations area.

**Screenshots:**
<br>
<img
  src="assignments/assignment-2/assets/assignment-02-screenshot.png"
  width="400"
  alt="Screenshot of Assignment 02 showing the article-based layout with Flexbox-styled content and citations.">

### Assignment Objectives

- Create a well-structured HTML document using semantic elements
- Demonstrate understanding of common image types used on the web
- Explain copyright, fair use, and image licensing
- Introduce image optimization concepts and tools

### Assignment Requirements

<details>
<summary>Click to view full requirements</summary>

- `title` element using the format **"Lastname Assignment 2"**
- `header` section with an `h1` titled **"Images and Copyright"**
- **Article: Image Types**
  - `article` element
  - `h2` heading
  - Explanation of image types and usage
  - Citations section
- **Article: Copyright**
  - Explanation of copyright and fair use
  - Two types of copyright licenses
  - Guidance on image permissions
  - Links to image sources
  - Citations section
- **Article: Image Optimization**
  - Explanation of compression and optimization
  - Tools for image optimization
  - Citations section
- `footer` with copyright symbol, year, and name
- Use of semantic HTML throughout

</details>

### My Submission

I structured the page using semantic landmarks (`header`, `main`, `article`, `section`, `aside`, `footer`). Each article uses a definition list (`dl`) for Q&A content and an `aside` for citations. A reusable Flexbox layout (`.article-body`) displays content and citations side by side, with centered article headings and responsive behavior.

### Deployed Page

https://aeposten.github.io/csd112/assignments/assignment-2/

---

## Assignment 03: Styling a Recipe with CSS

**[View Assignment Files](https://github.com/aeposten/csd112/tree/main/assignments/assignment-3)**

### Overview

This assignment focused on applying CSS styling to a real-world content scenario: a recipe. The recipe is presented using a card-based layout, with separate sections for ingredients, details, and directions to emphasize hierarchy and readability.

**Screenshots:**
<br>
<img
  src="assignments/assignment-3/assets/assignment-03-screenshot.png"
  width="400"
  alt="Screenshot of the recipe card layout for Assignment 03 showing styled ingredients and recipe details.">
<img
  src="assignments/assignment-3/assets/assignment-03-screenshot2.png"
  width="400"
  alt="Screenshot of Assignment 03 demonstrating responsive styling with stacked layout on smaller screens.">

The second screenshot demonstrates responsive behavior, where ingredient columns and layout sections stack vertically on smaller screen sizes using CSS Flexbox and media queries.

### Assignment Objectives

- Practice using CSS in a practical web page
- Explore styling with different selector types
- Apply common CSS properties to improve layout and hierarchy
- Use semantic HTML to structure recipe content

### Assignment Requirements

<details>
<summary>Click to view full requirements</summary>

- Properly structured semantic HTML document
- Use of multiple HTML elements (lists, headings, footer, etc.)
- Use of **internal CSS** via the `<style>` tag
  - Use a stylesheet if you feel ambitious
- Styling using:
  - A tag selector
  - A class selector
  - An ID selector
- Styling of at least four CSS properties
- Use of a real recipe
- Citation of recipe source

</details>

### My Submission

For this assignment, I styled my favorite Chocolate Chip Cookie recipe, [Broma Bakery's– Best Chocolate Chip Cookies](https://bromabakery.com/best-chocolate-chip-cookies/). I knew from reading the assignment description that I wanted to style the page to look like a recipe card. Initially, I thought I'd model it after a classic index card with blue lines, but after doing a search for "Recipe Cards" I found [Papier's – Double Cherry Recipe Card](https://www.papier.com/us/double-cherry-53673) and decided to use it as the model for my design.

I tried to improve my CSS by eliminating repetitive selectors, top-to-bottom organization, and code comments. I continued my commitment to accessibility with aria labeling and challenged myself by adding responsive styling. 
### Credits

- **Recipe source:**  
  [Broma Bakery – Best Chocolate Chip Cookies](https://bromabakery.com/best-chocolate-chip-cookies/) by Sofi

- **Recipe card design inspiration:**  
  [Papier – Double Cherry Recipe Card](https://www.papier.com/us/double-cherry-53673)


### Deployed Page

https://aeposten.github.io/csd112/assignments/assignment-3/

---

## Assignment 04: Typography and Color with CSS

**[View Assignment Files](https://github.com/aeposten/csd112/tree/main/assignments/assignment-4)**

### Overview

This assignment focused on advanced CSS typography and color theory. I created a newspaper-inspired layout with multiple web-hosted fonts, a local font using `@font-face`, and various CSS color spaces. The project emphasizes responsive design and accessibility with ARIA landmarks.

**Screenshots:**
<br>
<!-- Placeholder for mobile screenshot -->
<img
  src="assignments/assignment-4/assets/assignment-04-screenshot.png"
  width="400"
  alt="Screenshot of The Daily Feline newspaper layout on mobile showing stacked article layout.">
<!-- Placeholder for desktop screenshot -->
<img
  src="assignments/assignment-4/assets/assignment-04-screenshot2.png"
  width="400"
  alt="Screenshot of The Daily Feline newspaper layout on desktop showing grid-based responsive layout.">

### Assignment Objectives

- Practice using local fonts with `@font-face`
- Practice implementing web-hosted fonts
- Utilize various web color spaces
- Create a mobile-responsive layout

### Assignment Requirements

<details>
<summary>Click to view full requirements</summary>

**HTML Requirements:**
- Properly structured semantic HTML document
- At least 2 different heading levels
- At least 3 paragraphs
- At least one blockquote
- At least one list type with minimum 3 items

**CSS Styling - Typography:**
- Change paragraphs to a sans-serif font
- Change headings to 2 different fonts using Google or Adobe fonts
- Change blockquote to a local font using `@font-face` rule
- Change list items to a serif font
- Utilize each property at least once:
  - `font-size`
  - `font-weight`
  - `font-style`
  - `text-align`
  - `text-transform`
  - `line-height`

**CSS Styling - Color:**
- Change heading level one using a keyword color
- Change heading level two using a hexcode
- Apply slightly transparent background to blockquote using RGBA
- Change color of list items using HSL or HSLA

**Additional Requirements:**
- Internal CSS (using `<style>` tag) OR external stylesheet
- Mobile responsive design

</details>

### My Submission: The Daily Feline

For this assignment, I created "The Daily Feline," a newspaper-inspired page featuring humorous cat-themed articles generated by [Cat Ipsum](http://www.catipsum.com/). The layout uses a dark forest green background (`#10593b`) with light cyan text (`#f5fcff`) for a unique, vintage newspaper aesthetic.

The typography implementation showcases a carefully curated font stack. I used Instrument Serif from Google Fonts for the h1 masthead, giving it an elegant newspaper feel. For the h2 article headlines, I chose Oswald from Google Fonts with uppercase transformation to create bold, attention-grabbing headers. Body paragraphs use Instrument Sans from Google Fonts for clean, readable text, while list items feature Merriweather from Google Fonts for a traditional serif appearance. The blockquote uses Crimson Text, a local font implemented via the `@font-face` rule to meet the assignment requirement.

The assignment required exploring different CSS color formats, which I applied strategically throughout the design. The h1 uses the keyword color `white` for simplicity and clarity. Article headlines (h2) use the hexcode `#f5fcff` to maintain consistency with the accent color. The blockquote features a subtle transparent background using RGBA (`rgba(245, 252, 255, 0.15)`) at 15% opacity, creating a gentle highlight effect. List items use HSL (`hsl(242 72.4% 17.9%)`) for a dark navy blue color that complements the green background.

I implemented a mobile-first responsive design using CSS Grid that adapts seamlessly across screen sizes. On mobile devices, all content stacks vertically in a single column for easy reading. At the tablet breakpoint (768px and up), the layout transitions to a two-column grid with strategic article placement. The desktop layout (1024px and up) adopts a true newspaper-style design with a sidebar, placing the quote box alongside the main articles. For large desktop screens (1440px and up), typography scales up and the maximum width increases to take advantage of the additional space.

To improve code maintainability, I organized the CSS using modern best practices. CSS variables define all colors, fonts, spacing values, and border styles in one central location, making theme changes simple. Section comments clearly divide the stylesheet into logical groups like typography, layout components, and responsive design. I combined similar selectors to eliminate duplication and used semantic class names like `.site-header`, `.news-grid`, and `.site-footer` for clarity and reusability.

Finally, I enhanced the page's accessibility with comprehensive ARIA implementation. Landmark roles including `role="banner"`, `role="main"`, `role="complementary"`, and `role="contentinfo"` help screen reader users navigate quickly between sections. Each article connects to its headline using `aria-labelledby`, so screen readers announce the headline when users enter an article. Descriptive labels on the main content area and quote box provide additional context, and I added `rel="noopener"` to the external Cat Ipsum link for security best practices.

### Credits

- **Content generated by:**  
  [Cat Ipsum](http://www.catipsum.com/)

### Deployed Page

https://aeposten.github.io/csd112/assignments/assignment-4/