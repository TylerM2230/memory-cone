// Ensure the script runs after the DOM is fully loaded
window.onload = function () {
  // Get the canvas element
  const canvas = document.getElementById("canvas");
  const container = document.getElementById("visualizationContainer");

  // === Basic Scene Setup ===
  const scene = new THREE.Scene();
  scene.background = null; // Make scene background transparent

  // === Camera ===
  let width = container.clientWidth;
  let height = container.clientHeight;
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 5;
  camera.position.y = 3; // Adjusted camera height

  // === Renderer ===
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true, // Enable transparency in the renderer
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x000000, 0); // Set clear color to transparent

  // === Lighting ===
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
  directionalLight.position.set(5, 10, 7.5);
  scene.add(directionalLight);

  // === Controls ===
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.minDistance = 2;
  controls.maxDistance = 15;

  // === Cone Parameters ===
  const baseRadius = 2;
  const coneHeight = 4;
  const radialSegments = 32;
  const numCircles = 15;

  // === Materials (Original & Highlight) ===
  const originalConeLineColor = 0x60a5fa; // Blue
  const highlightConeLineColor = 0xffffff; // White highlight for cone lines
  const originalApexColor = 0xf59e0b; // Brighter gold
  const highlightApexColor = 0xffffff; // White highlight for apex
  const originalBaseColor = 0xfacc15; // Gold
  const highlightBaseColor = 0xffffff; // White highlight for base

  const originalCircleMaterial = new THREE.LineBasicMaterial({
    color: originalConeLineColor,
    linewidth: 2,
  });
  const highlightCircleMaterial = new THREE.LineBasicMaterial({
    color: highlightConeLineColor,
    linewidth: 2, // Optionally make highlight thicker if supported
  });

  const originalApexMaterial = new THREE.MeshPhongMaterial({
    color: originalApexColor,
    shininess: 80,
  });
  const highlightApexMaterial = new THREE.MeshPhongMaterial({
    color: highlightApexColor,
    shininess: 100,
    emissive: 0x555555, // Make it glow slightly when highlighted
  });

  const originalBaseMaterial = new THREE.MeshBasicMaterial({
    color: originalBaseColor,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.9,
  });
  const highlightBaseMaterial = new THREE.MeshBasicMaterial({
    color: highlightBaseColor,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1.0, // Fully opaque when highlighted
  });

  // === Create Concentric Circles for Cone ===
  const coneGroup = new THREE.Group();
  for (let i = 0; i <= numCircles; i++) {
    const fraction = i / numCircles;
    const currentRadius = (1 - fraction) * baseRadius;
    const currentY = -fraction * coneHeight;
    if (currentRadius > 0.01) {
      const circleGeometry = new THREE.CircleGeometry(
        currentRadius,
        radialSegments
      );
      const positions = circleGeometry.attributes.position.array;
      const points = [];
      for (let j = 3; j < positions.length; j += 3) {
        points.push(
          new THREE.Vector3(positions[j], positions[j + 1], positions[j + 2])
        );
      }
      const loopGeometry = new THREE.BufferGeometry().setFromPoints(points);
      // Start with original material
      const circleLine = new THREE.LineLoop(
        loopGeometry,
        originalCircleMaterial
      );
      circleLine.position.y = currentY;
      circleLine.rotation.x = Math.PI / 2;
      coneGroup.add(circleLine);
    }
  }
  coneGroup.position.y = coneHeight;
  scene.add(coneGroup);

  // === Base Plane ===
  const planeGeometry = new THREE.CircleGeometry(baseRadius, radialSegments);
  const basePlane = new THREE.Mesh(planeGeometry, originalBaseMaterial); // Start with original
  basePlane.rotation.x = -Math.PI / 2;
  basePlane.position.y = coneHeight;
  scene.add(basePlane);

  // === Apex Point ===
  const apexGeometry = new THREE.SphereGeometry(0.1, 16, 16);
  const apexPoint = new THREE.Mesh(apexGeometry, originalApexMaterial); // Start with original
  apexPoint.position.y = 0;
  scene.add(apexPoint);

  // === Interaction Logic ===
  const cardConcept = document.getElementById("card-concept");
  const cardCone = document.getElementById("card-cone");
  const cardApex = document.getElementById("card-apex");
  const cardBase = document.getElementById("card-base");
  const cardInteraction = document.getElementById("card-interaction");
  const allCards = [cardConcept, cardCone, cardApex, cardBase, cardInteraction];

  function resetHighlights() {
    // Reset 3D objects
    coneGroup.children.forEach((line) => {
      if (line instanceof THREE.LineLoop) {
        line.material = originalCircleMaterial;
      }
    });
    apexPoint.material = originalApexMaterial;
    basePlane.material = originalBaseMaterial;

    // Reset cards
    allCards.forEach((card) => card.classList.remove("card-highlighted"));
  }

  cardConcept.addEventListener("click", () => {
    resetHighlights(); // Reset first
    cardConcept.classList.add("card-highlighted");
    // No specific 3D object highlight for the general concept card
  });

  cardCone.addEventListener("click", () => {
    resetHighlights(); // Reset first
    cardCone.classList.add("card-highlighted");
    // Highlight cone lines
    coneGroup.children.forEach((line) => {
      if (line instanceof THREE.LineLoop) {
        line.material = highlightCircleMaterial;
      }
    });
  });

  cardApex.addEventListener("click", () => {
    resetHighlights(); // Reset first
    cardApex.classList.add("card-highlighted");
    // Highlight apex point
    apexPoint.material = highlightApexMaterial;
  });

  cardBase.addEventListener("click", () => {
    resetHighlights(); // Reset first
    cardBase.classList.add("card-highlighted");
    // Highlight base plane
    basePlane.material = highlightBaseMaterial;
  });

  cardInteraction.addEventListener("click", () => {
    resetHighlights(); // Reset first
    cardInteraction.classList.add("card-highlighted");
    // No specific 3D object highlight for the interaction card
  });

  // Reset highlights when clicking the background/canvas
  container.addEventListener("click", (event) => {
    // Check if the click target is the container itself or the canvas
    if (event.target === container || event.target === canvas) {
      resetHighlights();
    }
  });

  // === Handle Window Resize ===
  function onWindowResize() {
    width = container.clientWidth;
    height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }
  window.addEventListener("resize", onWindowResize);

  // === Animation Loop ===
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  // Initial setup calls
  onWindowResize();
  animate();
};
