# Bergson's Memory Cone: A 3D Visualization
![mem-cone](https://github.com/user-attachments/assets/98b2b5ba-15f6-4eeb-a2ff-8af794ad4d8c)

This project is an interactive 3D visualization of Henri Bergson's "Memory Cone" metaphor, as primarily described in his work *Matter and Memory* (1896). It aims to provide a visual representation of Bergson's complex ideas about the nature of memory, its relationship to perception, and how the past continually informs the present moment of action.

## Table of Contents

- [Project Overview](#project-overview)
- [The Significance of Bergson's Memory Cone](#the-significance-of-bergsons-memory-cone)
  - [Pure Memory: The Virtual Past](#pure-memory-the-virtual-past)
  - [The Present: Perception and Action](#the-present-perception-and-action)
  - [The Apex: The Most Contracted Past](#the-apex-the-most-contracted-past)
  - [Interaction: Memory Actualizing in the Present](#interaction-memory-actualizing-in-the-present)
  - [Duration (Durée) and Memory](#duration-durée-and-memory)
- [Visualization Details & Interaction](#visualization-details--interaction)
  - [The Cone Volume (Pure Memory)](#the-cone-volume-pure-memory)
  - [The Apex (Point 'S')](#the-apex-point-s)
  - [The Base (Plane 'P')](#the-base-plane-p)
  - [Highlighting Concepts](#highlighting-concepts)
- [How to Use the Visualization](#how-to-use-the-visualization)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Work in Progress & Future Enhancements](#work-in-progress--future-enhancements)
- [Running the Project Locally](#running-the-project-locally)

## Project Overview

Henri Bergson, a prominent philosopher, introduced the concept of the "Memory Cone" (or "inverted cone") as a way to illustrate his theories on how memory functions. This visualization attempts to translate his spatial metaphor into an interactive 3D model using Three.js. Users can explore the cone, which represents the entirety of one's past memories, and see its relationship with the "plane of action," which represents the present moment.

The visualization features:
* A 3D representation of the cone, its apex, and its base.
* Interactive cards that explain different aspects of Bergson's theory, highlighting corresponding parts of the 3D model.
* Orbit controls to allow users to rotate, pan, and zoom around the model.
* Responsive design for different screen sizes.

## The Significance of Bergson's Memory Cone

Bergson's theory of memory is a cornerstone of his philosophy, challenging conventional views that treated memory as a mere storehouse of static images. For Bergson, memory is dynamic, active, and integral to perception and consciousness. The cone is a powerful heuristic device to grasp these ideas.

### Pure Memory: The Virtual Past

The **entire volume of the cone** symbolizes "pure memory" (*souvenir pur*). This is the totality of our past experiences, coexisting virtually and unconsciously. It's not a collection of discrete "snapshots" stored in the brain, but rather a continuous, indivisible flow of the past that survives in its entirety. Bergson emphasizes that this past is *virtual*, meaning it's real but not currently actualized or conscious in its entirety. It's a vast reservoir of potential. The concentric circles in the visualization represent different "sections" or layers of this past, from the most recent (at the base) to the most distant and abstract (towards the apex).

### The Present: Perception and Action

The **base of the cone (Plane 'P')** represents the present moment – the plane of perception and action. This is where our consciousness engages with the material world through our body. Perception, for Bergson, is not a passive recording of external reality. Instead, it's a selective process deeply informed by our needs and potential actions. The present is the point where the virtual past (memory) intersects with current sensory-motor experience to guide behavior.

### The Apex: The Most Contracted Past

The **apex of the cone (Point 'S')** signifies the most contracted state of our past, the deepest and most consolidated layer of memory. It's the point furthest from immediate action and perception, representing the totality of our past in its most unified and abstract form. It can be thought of as the "spirit" or the ultimate ground of our personal history.

### Interaction: Memory Actualizing in the Present

The core of Bergson's model lies in the **dynamic interaction between the cone (past) and its base (present)**. Our consciousness is constantly moving between these two. When we perceive and act, our mind projects relevant "image-memories" (*souvenirs-images*) from different levels of the cone onto the present plane of action. These memories are "actualized" – brought from their virtual state into consciousness – to illuminate the current situation and guide our response. The choice of which memories are actualized depends on the demands of the present action. For example, in a moment of crisis, very specific and relevant memories might surge forward. In moments of reverie or dreaming, consciousness might recede from the plane of action and delve deeper into the cone, closer to the apex, experiencing a more fluid and less-directed flow of memories.

### Duration (Durée) and Memory

It's crucial to remember that the spatial metaphor of the cone is intended to illustrate a temporal reality. Bergson's concept of **duration (*durée*)** – real, lived, heterogeneous time – is central. Memory is not static; it's part of this continuous, qualitative flow. The cone itself is constantly growing as new experiences are integrated into the past.

Bergson also distinguished between:
* **Recollection-Memory (Image-Memory):** This is the memory represented by the cone. It consists of unique, dated representations of past events.
* **Habit-Memory (Motor-Memory):** This is bodily memory, learned through repetition (e.g., riding a bike). It's enacted in the present rather than represented. The cone model primarily visualizes recollection-memory.

The Memory Cone, therefore, is not just a static diagram but a model for understanding the ceaseless, dynamic interplay between our entire virtual past and our concrete present actions and perceptions.

## Visualization Details & Interaction

The 3D scene is composed of several key elements that correspond to Bergson's metaphor:

* **The Cone Volume (Pure Memory):** Represented by a series of blue concentric circles, getting smaller towards the apex. This illustrates the layered nature of memory.
* **The Apex (Point 'S'):** A shiny gold sphere at the tip of the cone, representing the most contracted point of memory.
* **The Base (Plane 'P'):** A gold circular plane at the widest part of the cone, symbolizing the present moment of action and perception.

### Highlighting Concepts

The panel on the right side of the screen contains several cards, each explaining a part of Bergson's theory:
* **The Concept:** General introduction.
* **The Cone Volume:** Explains pure memory. Clicking this card highlights the blue lines of the cone in white.
* **The Apex (Point 'S'):** Explains the significance of the apex. Clicking this card highlights the gold apex sphere in white.
* **The Base (Plane 'P'):** Explains the plane of action. Clicking this card highlights the gold base plane in white.
* **Interaction:** Explains the dynamic interplay between past and present.

Clicking on a card will highlight the corresponding part of the 3D model and the card itself. Clicking on the canvas background will reset all highlights.

## How to Use the Visualization

1.  **Explore the Model:**
    * **Rotate:** Click and drag the mouse on the visualization to rotate the camera around the cone.
    * **Zoom:** Use the mouse scroll wheel to zoom in and out.
    * **Pan:** Right-click and drag (or two-finger drag on a trackpad if enabled by OrbitControls) to pan the camera.
2.  **Learn with Interactive Cards:**
    * Read the explanations on the cards in the right-hand panel.
    * Click on a card (e.g., "The Apex") to see the corresponding part of the 3D model highlighted and to focus on that concept.

## Project Structure

The project is primarily composed of three files:

* **`index.html`:** The main HTML file that sets up the page structure, including the canvas for the 3D visualization and the container for the explanatory text and interactive cards. It links to Tailwind CSS for styling and the necessary JavaScript files.
* **`script.js`:** This file contains all the Three.js logic for creating and rendering the 3D scene, including:
    * Scene setup, camera, renderer, and lighting.
    * Creation of the cone, apex, and base geometries and materials.
    * OrbitControls for user interaction.
    * Logic for highlighting 3D elements based on card clicks.
    * Window resize handling.
    * The animation loop.
* **`styles.css`:** Contains custom CSS rules to style the page elements, complementing Tailwind CSS. This includes styles for the layout, cards, and the visualization container.

## Technologies Used

* **HTML5:** For the basic structure of the web page.
* **CSS3:** For custom styling.
    * **Tailwind CSS:** A utility-first CSS framework used for styling the UI components.
* **JavaScript (ES6+):** For the core logic of the visualization.
* **Three.js (r128):** A 3D graphics library used to create and display the animated 3D memory cone.
    * **OrbitControls:** A Three.js addon for camera manipulation.
* **Google Fonts:** For the "Inter" font.

## Work in Progress & Future Enhancements

This visualization is an ongoing exploration of Bergson's ideas.

* **Animation of Interaction:** Currently, the model is static. A key future enhancement would be to animate the "movement" of consciousness or the "actualization" of memories. This could involve:
    * Visualizing "slices" of the cone (representing specific memories or layers of the past) moving towards or intersecting with the base plane (the present).
    * Animating the plane 'P' itself. Bergson describes consciousness as potentially inserting itself at different levels of the cone, meaning the "plane of the present" isn't fixed but can engage with more or less contracted states of memory. **The plane could be animated to move up and down along the cone's axis, with its radius changing accordingly, to more faithfully reflect Bergson's idea of consciousness engaging with different depths of the past.**
* **More Detailed Representation:** Adding more visual cues to represent the density or nature of memories at different levels of the cone.
* **User-Driven Interaction:** Allowing users to perhaps "select" a layer of the cone to see hypothetical memories.
* **Refined Aesthetics:** Further improvements to lighting, materials, and overall visual appeal.
* **Performance Optimization:** Ensuring smooth performance, especially if more complex animations are added.

## Running the Project Locally

1.  Ensure you have a local web server set up (e.g., using Python's `http.server`, Node.js's `live-server`, or an IDE's built-in server). This is because Three.js often requires modules to be served over HTTP/HTTPS for security reasons, especially when loading external files or using certain browser features.
2.  Download the project files:
    * `index.html`
    * `script.js`
    * `styles.css`
3.  Place all files in the same directory.
4.  Navigate to the project directory in your terminal and start your local web server. For example, with Python 3:
    ```bash
    python -m http.server
    ```
5.  Open your web browser and go to the address provided by your local server (e.g., `http://localhost:8000`).
