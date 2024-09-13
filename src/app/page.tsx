import Container from "@/components/Container";
import Typography from "../components/Typography";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="space-y-4 ">
      <Container className="grid grid-cols-12 gap-4 min-h-screen items-center">
        <div className="col-span-6">
          <Typography variant="h3">
            Soft UI: A Neumorphism and Glassmorphism based UI library.
          </Typography>
          <Typography variant="body2" noShadow={true}>
            v1.0
          </Typography>
          <Typography variant="body1" noShadow={true} className="mt-2">
            Simple.
          </Typography>
          <Typography variant="body1" noShadow={true}>
            Smooth.
          </Typography>
          <Typography variant="body1" noShadow={true}>
            Clean.
          </Typography>
        </div>
        <div className="col-span-6"></div>
      </Container>
      <Container>
        <Card>Hi</Card>
      </Container>
    </div>
  );
}
