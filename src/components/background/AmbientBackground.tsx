import { SpaceCanvas } from "./SpaceCanvas";

export function AmbientBackground() {
  return (
    <div
      className="live-bg pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="live-bg__base absolute inset-0" />
      <div className="live-bg__aurora live-bg__aurora--1 absolute -left-[10%] top-[5%] h-[70vh] w-[70vh] rounded-full" />
      <div className="live-bg__aurora live-bg__aurora--2 absolute -right-[15%] top-[25%] h-[60vh] w-[60vh] rounded-full" />
      <div className="live-bg__aurora live-bg__aurora--3 absolute bottom-0 left-[25%] h-[50vh] w-[50vh] rounded-full" />
      <SpaceCanvas />
      <div className="live-bg__vignette absolute inset-0" />
      <div className="live-bg__scanlines absolute inset-0 opacity-[0.03]" />
    </div>
  );
}
