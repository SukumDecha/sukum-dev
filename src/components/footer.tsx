export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-center text-foreground">
          © {new Date().getFullYear()} SukumDecha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
