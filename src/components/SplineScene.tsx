const MASCOT_URL = "https://cdn.poehali.dev/projects/5fbe0796-d856-4bd0-b6dd-21d3b9f293d9/bucket/5d97958f-99b6-4bf7-aa99-ef301e88103d.JPG"

export default function SplineScene() {
  return (
    <div className="absolute inset-0 w-full h-full bg-background flex items-center justify-end pr-8 md:pr-16">
      <img
        src={MASCOT_URL}
        alt="FunLS маскот — осьминог"
        className="h-[420px] md:h-[540px] object-contain drop-shadow-2xl select-none"
        style={{ filter: "drop-shadow(0 0 40px rgba(147,100,255,0.35))" }}
      />
    </div>
  )
}