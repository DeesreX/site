function Footer() {
    return (
      <footer className="bg-white shadow mt-12">
        <div className="container mx-auto px-6 py-4 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} My Blog. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  