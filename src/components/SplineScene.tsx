const MASCOT_URL = "https://cdn.poehali.dev/projects/5fbe0796-d856-4bd0-b6dd-21d3b9f293d9/bucket/5d97958f-99b6-4bf7-aa99-ef301e88103d.JPG"

export default function SplineScene() {
  return (
    <div className="absolute inset-0 w-full h-full bg-background flex items-center justify-end pr-8 md:pr-16">
      <div className="mascot-wrapper">
        <img
          src={MASCOT_URL}
          alt="FunLS маскот — осьминог"
          className="mascot-img h-[420px] md:h-[540px] object-contain select-none"
        />
        <div className="mascot-glow" />
      </div>
    </div>
  )
}
