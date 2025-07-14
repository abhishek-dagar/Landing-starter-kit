import Container from "../ui/container";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-950">
      <Container className="flex flex-col md:flex-row items-center justify-between text-gray-600 dark:text-gray-400">
        <div className="mb-4 md:mb-0">© {new Date().getFullYear()} Your Company. All rights reserved.</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-500">Twitter</a>
          <a href="#" className="hover:text-blue-500">GitHub</a>
          <a href="#" className="hover:text-blue-500">LinkedIn</a>
        </div>
      </Container>
    </footer>
  );
} 