import Typography from "@/components/Typography";

export default function NavBar() {
  return (
    <div className="px-6 py-2 sm:py-4 shadow-sm fixed w-screen top-0 bg-background z-20">
      <div>
        <Typography variant="h3" noShadow={true} className="font-semibold">
          Soft UI
        </Typography>
      </div>
    </div>
  );
}
