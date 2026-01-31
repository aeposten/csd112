# CSD112 – HTML and CSS

## Course Description

This course is an introduction to HyperText Markup Language (HTML) and Cascading Style Sheets (CSS). Students examine the key components of HTML to create functional web pages and apply CSS style sheets to improve page layout and overall appearance. The course also introduces responsive web design principles and accessibility considerations.

---

## Navigation

- [Assignment 01: Creating Basic HTML Elements](#assignment-01-creating-basic-html-elements)
- [Assignment 02: Understanding Images & Copyright](#assignment-02-understanding-images--copyright)
- [Assignment 03: Styling a Recipe with CSS](#assignment-03-styling-a-recipe-with-css)

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
  alt="Screenshot for page created for Assignment 01 with CSS styling enabled."
>
<img
  src="assignments/assignment-1/assets/assignment-01-screenshot2.png"
  width="400"
  alt="Screenshot for page created for Assignment 01 with CSS disabled, showing semantic HTML structure."
>

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

#### “Magic Toggle”

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

- `title` element using the format **“Lastname Assignment 2”**
- `header` section with an `h1` titled **“Images and Copyright”**
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
- Styling using:
  - A tag selector
  - A class selector
  - An ID selector
- Styling of at least four CSS properties
- Use of a real recipe
- Citation of recipe source

</details>

### My Submission

For this assignment, I created a “Best Chocolate Chip Cookies” recipe page using semantic HTML and a two-card layout. Flexbox was used extensively to control spacing, alignment, multi-column ingredients, and responsive behavior. Typography, color variables, and consistent spacing were applied to create a cohesive visual design.

### Credits

- **Recipe source:**  
  [Broma Bakery – Best Chocolate Chip Cookies](https://bromabakery.com/best-chocolate-chip-cookies/) by Sofi

- **Recipe card design inspiration:**  
  [Papier – Double Cherry Recipe Card](https://www.papier.com/us/double-cherry-53673)


### Deployed Page

https://aeposten.github.io/csd112/assignments/assignment-3/
