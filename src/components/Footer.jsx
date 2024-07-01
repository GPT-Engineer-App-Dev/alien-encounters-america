const Footer = () => {
  return (
    <footer className="border-t py-4 text-center">
      <div className="space-y-2">
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div>Contact us at: info@ufowatchusa.com</div>
        <div className="text-sm text-muted-foreground">Disclaimer: The authenticity of the reports is not verified by UFO Watch USA.</div>
      </div>
    </footer>
  );
};

export default Footer;