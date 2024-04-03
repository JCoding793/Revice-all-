import React, {
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import {
  ViewerApp,
  addBasePlugins,
  AssetManagerPlugin,
  GBufferPlugin,
  CanvasSnipperPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  mobileAndTabletCheck,
  FileTransferPlugin,
  NeverDepth,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll-animation";

gsap.registerPlugin(ScrollTrigger);
const WebgiViwer = forwardRef((props, ref) => {
  const [viewerRef, setViewerRef] = useState(null);
  const [targetRef, setTargetRef] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [positionRef, setPositionRef] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [isMobile, setMobile] = useState(null);
  const canvasContainerRef = useRef(null);
  const canvaRef = useRef(null);

  useImperativeHandle(ref, () => ({
    triggerPreview() {
      setPreviewMode(true);
      canvasContainerRef.current.style.pointerEvents = "all";
      props.contentRef.current.style.opacity = "0";

      gsap.to(positionRef, {
        x: 13.04,
        y: -2.01,
        z: 2.29,
        duration: 2,
        onUpdate: () => {
          viewerRef.setDirty();
          cameraRef.positionTargetUpdated(true);
        },
      });
      gsap.to(targetRef, { x: 0.11, y: 0.0, z: 0.0, duration: 2 });

      viewerRef.scene.activeCamera.setCameraOptions({ controlsEnabled: true });
    },
  }));
  const memoizedScrollAnimation = useCallback(
    (position, target, isMobile, onUpdate) => {
      if (position && target && onUpdate) {
        scrollAnimation(position, target, isMobile, onUpdate);
      }
    },
    []
  );
  const setupViewer = useCallback(async () => {
    // Initialize the viewer
    const viewer = new ViewerApp({
      canvas: canvaRef.current,
    });
    setViewerRef(viewer);

    const isMobileTablet = mobileAndTabletCheck();
    setMobile(isMobileTablet);

    const manger = await viewer.addPlugin(AssetManagerPlugin);
    const camera = viewer.scene.activeCamera;
    const postion = camera.position;
    const target = camera.target;
    setCameraRef(camera);
    setPositionRef(postion);
    setTargetRef(target);
    // Add plugins individually.
    // await viewer.addPlugin(GBufferPlugin)
    // await viewer.addPlugin(new ProgressivePlugin(32))
    // await viewer.addPlugin(new TonemapPlugin(true))
    // await viewer.addPlugin(GammaCorrectionPlugin)
    // await viewer.addPlugin(SSRPlugin)
    // await viewer.addPlugin(SSAOPlugin)
    // await viewer.addPlugin(BloomPlugin)
    // and many more...

    viewer.renderer.refreshPipeline();
    // or use this to add all main ones at once.
    await addBasePlugins(viewer); // check the source: https://codepen.io/repalash/pen/JjLxGmy for the list of plugins added.

    // Required for downloading files from the UI
    await viewer.addPlugin(FileTransferPlugin);

    // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
    await viewer.addPlugin(CanvasSnipperPlugin);

    // Import and add a GLB file.
    await viewer.load("scene-black.glb");
    // await manger.addFromPath("scene-black.glb");

    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
    if (isMobileTablet) {
      postion.set(-16.7, 1.17, 11.7);
      target.set(0, 1.37, 0);
      props.contentRef.current.className = "mobile-or-tablet";
    }
    window.scrollTo(0, 0);
    let needsUpdate = true;

    const onUpdate = () => {
      needsUpdate = true;
      viewer.setDirty();
    };
    viewer.addEventListener("preFrame", () => {
      if (needsUpdate) {
        camera.positionTargetUpdated(true);
        needsUpdate = false;
      }
    });

    memoizedScrollAnimation(postion, target, isMobileTablet, onUpdate);
  }, []);
  useEffect(() => {
    setupViewer();
  }, []);

  const handleExit = useCallback(() => {
    canvasContainerRef.current.style.pointerEvents = "none";
    props.contentRef.current.style.opacity = "1";

    viewerRef.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
    setPreviewMode(false);
    gsap.to(positionRef, {
      x: !isMobile ? 1.56 : 9.36,
      y: !isMobile ? 5.0 : 10.95,
      z: !isMobile ? 0.01 : 0.09,
      scrollTrigger: {
        trigger: ".display-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      onUpdate: () => {
        viewerRef.setDirty();
        cameraRef.positionTargetUpdated(true);
      },
    });
    gsap.to(targetRef, {
      x: !isMobile ? -0.59 : -1.62,
      y: !isMobile ? 0.32 : 0.02,
      z: !isMobile ? 0.0 : -0.06,
      scrollTrigger: {
        trigger: ".display-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    });
  }, [canvasContainerRef, viewerRef, positionRef, cameraRef, targetRef]);
  return (
    <div ref={canvasContainerRef} id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvaRef} />

      {previewMode && (
        <button className="button" onClick={handleExit}>
          Exit
        </button>
      )}
    </div>
  );
});

export default WebgiViwer;
