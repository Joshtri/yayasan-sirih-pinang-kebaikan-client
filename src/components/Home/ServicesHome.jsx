import { Button, Card } from 'flowbite-react';
import CardPoint from './CardPoint';

function ServicesHome() {
  return (
    <div className="bg-gray-100 py-8 pt-10">
      <div className="container mx-auto px-2">
        {/* Top Card with Gradient Background */}
        <Card className="w-full max-w-4xl mx-auto shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          {/* Centering the title only */}
          <h2 className="text-center text-xl font-bold mb-3">E-PUBLISHER Yayasan Sirih Pinang Kebaikan</h2>
          
          {/* Left-aligned paragraph text */}
          <p className="mb-3">
            Anda berasal dari Jabodetabek dan mau menerbitkan buku/kerjasama dengan Deepublish?
            Tak perlu lagi ke Yogyakarta, karena Deepublish kini hadir di 
            <span className="text-orange-300 font-semibold"> Jakarta!</span>
          </p>
          <p className="mb-5">
            Daftarkan diri Anda di Penerbit Deepublish Jakarta agar Kami makin cepat penuhi kebutuhan Anda.
          </p>
          
          {/* Button centered */}
          <div className="text-center">
            <Button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold w-1/2">
              Deepublish Jakarta
            </Button>
          </div>
        </Card>

        <CardPoint/>
      </div>
    </div>
  );
}

export default ServicesHome;
