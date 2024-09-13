import Container from "@/components/Container";
import Typography from "../components/Typography";

export default function Home() {
  return (
    <Container className="flex h-screen items-center">
      <div className="w-1/2">
        <Typography variant="h3">
          Soft UI: A Neumorphism and Glassmorphism based UI library.
        </Typography>
      </div>
    </Container>
  );
}
