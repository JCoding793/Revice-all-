import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin, 
  TonemapPlugin,
  SSRPlugin, SSAOPlugin,

  BloomPlugin,
  CanvasSnipperPlugin,
  addBasePlugins,
  FileTransferPlugin,
} from "webgi";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Pane } from "tweakpane";

gsap.registerPlugin(ScrollTrigger);
// const pane = new Pane();

ScrollTrigger.defaults({ scroller: ".mainContainer" });
import "./styles.css";
async function setupViewer() {
  const viewer = new ViewerApp({
    canvas: document.getElementById("webgi-canvas"),
    useRgbm: false,
    isAntialiased: true,
  });
  viewer.renderer.displayCanvasScaling = Math.min(window.devicePixelRatio, 1);
 
  const manager = await viewer.addPlugin(AssetManagerPlugin);
  const camera = viewer.scene.activeCamera;

  await addBasePlugins(viewer);
  // / Add plugins individually.
  // await viewer.addPlugin(GBufferPlugin);
  // await viewer.addPlugin(new ProgressivePlugin(32));
  // await viewer.addPlugin(new TonemapPlugin(true));
  // await viewer.addPlugin(SSRPlugin);
  // await viewer.addPlugin(SSAOPlugin);
  // await viewer.addPlugin(BloomPlugin);
// 
  // await viewer.addPlugin(FileTransferPlugin);
  // await viewer.addPlugin(CanvasSnipperPlugin);
  // WEBGi loader
  const importer = manager.importer;
  
  importer.addEventListener("onProgress", (ev) => {
    const progressRatio = ev.loaded / ev.total;
    document
      .querySelector(".progress")
      ?.setAttribute("style", `transform: scaleX(${progressRatio})`);
  });

  importer.addEventListener("onLoad", (ev) => {
    introAnimation();
  });

  viewer.renderer.refreshPipeline();
  const model = await manager.addFromPath("./assets/scenecar.glb");
  const object3d = model[0].modelObject;
  const modelPosition = object3d.position;
  const modelRotation = object3d.rotation;

  const loaderElement = document.querySelector(".loader");
   
  function introAnimation() {
    const introTL = gsap.timeline();
    introTL
      .to(".loader", {
        x: "150%",
        duration: 0.8,
        ease: "power4.inOut",
        delay: 1,
    onComplete: setupScrollanimation,
      })
  }
 
  function setupScrollanimation() {
    document.body.removeChild(loaderElement);

    const tl = gsap.timeline();

    tl.to(modelPosition, {
      x: -0.9,
      y: -0.43,
      z: 0,
      scrollTrigger: {
        trigger: ".first",
        start: "top top",
        end: "top top",
        scrub: 0.2,
        immediateRender: false,
      },
      onUpdate,
    })

      .to(modelPosition, {
        x: -1.36,
        y: -0.02,
        z: -0.22,
        scrollTrigger: {
          trigger: ".second",
          start: "top bottom",
          end: "top top",
          scrub: 0.2,
          immediateRender: false,
        },
        onUpdate,
      })

      .to(modelRotation, {
        x: 0.0,
        y: 0,
        z: -1.57,
        scrollTrigger: {
          trigger: ".second",
          start: "top bottom",
          end: "top top",
          scrub: 0.2,
          immediateRender: false,
        },
      })

      .to(modelPosition, {
        x: 0.38,
        y: -0.11,
        z: -1.06,
        scrollTrigger: {
          trigger: ".third",
          start: "top bottom",
          end: "top top",
          scrub: 0.2,
          immediateRender: false,
        },
        onUpdate,
      })

      .to(modelRotation, {
        x: 0.403,
        y: 0.957,
        z: -0.421,
        scrollTrigger: {
          trigger: ".third",
          start: "top bottom",
          end: "top top",
          scrub: 0.2,
          immediateRender: false,
        },
      })

      .to(modelPosition, {
        x: 0.92,
        y: -0.31,
        z: 0.66,
        scrollTrigger: {
          trigger: ".four",
          start: "top bottom",
          end: "top top",
          scrub: 0.2,
          immediateRender: false,
        },
        onUpdate,
      })

      .to(modelRotation, {
        x: 0.0,
        y: 1.641,
        z: 0,
        scrollTrigger: {
          trigger: ".four",
          start: "top bottom",
          end: "top top",
          scrub: 0.2,
          immediateRender: false,
        },
      })
      .to(modelPosition, {
        x: -0.1,
        y: -0.11,
        z: 0.99,
        scrollTrigger: {
          trigger: ".five",
          start: "top bottom",
          end: "top top",
          scrub: 0.2,
          immediateRender: false,
        },
        onUpdate,
      })
      .to(modelRotation, {
        x: -0.785,
        y: 2.329,
        z: 0.903,
        scrollTrigger: {
          trigger: ".five",
          start: "top bottom",
          end: "top top",
          scrub: 0.2,
          immediateRender: false,
        },
      })

      .to(modelPosition, {
        x: 0.16,
        y: -0.3,
        z: -0.56,
        scrollTrigger: {
          trigger: ".six",
          start: "top bottom",
          end: "top top",
          scrub: 0.2,
          immediateRender: false,
        },
        onUpdate,
      })

      .to(modelRotation, {
        x: -0.261,
        y: 4.911,
        z: -0.277,
        scrollTrigger: {
          trigger: ".six",
          start: "top bottom",
          end: "top top",
          scrub: 0.2,
          immediateRender: false,
        },
      })
      .to(".section--one--container1", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".section--one--container1",
          start: "top top",
          end: "bottom top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(".section--one--container2", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".second",
          start: "top bottom",
          end: "top center",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(".section--two--container1", {
        scrollTrigger: {
          trigger: ".section--two--container1",
          start: "top 80%",
          end: "bottom center",
          toggleClass: "activeRightSpecific",
          scrub: true,
        },
      })
      .to(".section--two--container2", {
        scrollTrigger: {
          trigger: ".section--two--container2",
          start: "top 80%",
          end: "bottom center",
          toggleClass: "resetPosition",
          scrub: true,
        },
      })
      .to(".section--three--container", {
        scrollTrigger: {
          trigger: ".section--three--container",
          start: "top 80%",
          end: "bottom center",
          toggleClass: "resetPosition",
          scrub: true,
        },
      })
      .to(".section--four--container", {
        scrollTrigger: {
          trigger: ".section--four--container",
          start: "top 80%",
          end: "bottom center",
          toggleClass: "resetPosition",
          scrub: true,
        },
      })
      .to(".section--five--container ", {
        scrollTrigger: {
          trigger: ".section--five--container ",
          start: "top 80%",
          end: "bottom center",
          toggleClass: "resetPosition",
          scrub: true,
        },
      })
      .to(".section--six--container ", {
        scrollTrigger: {
          trigger: ".section--six--container ",
          start: "top 80%",
          end: "bottom center",
          toggleClass: "resetPosition",
          scrub: true,
        },
      });
  }

  // WEBGI UPDATE
  let needsUpdate = true;
  function onUpdate() {
    needsUpdate = true;
    viewer.renderer.resetShadows();
    viewer.setDirty();
  }

  // viewer.addEventListener("preFrame", () => {
  //   if (needsUpdate) {
  //     camera.positionUpdated(true);
  //     camera.targetUpdated(true);
  //     needsUpdate = false;
  //   }
  // });

  // SCROLL TO TOP
  document.querySelectorAll(".button--footer")?.forEach((item) => {
    item.addEventListener("click", () => {
      const container = document.getElementsByClassName("mainContainer");
      container[0].scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  });
}

setupViewer();