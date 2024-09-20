import { FaRegCheckCircle, FaBook, FaWallet, FaStore } from 'react-icons/fa';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

function CardPoint() {
  return (
    <div className='flex justify-center mt-6'>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* First Card */}
        <Card className="text-center shadow-md p-3 max-w-xs">
          <div className="flex justify-center mb-1">
            <FaBook className="text-4xl text-sky-500 transform transition hover:scale-150" />
          </div>
          <Link to='/daftar-penulis-buku'>
            <h2 className="text-lg font-semibold transform transition hover:scale-110">DAFTAR MENERBITKAN</h2>
          </Link>
        </Card>

        {/* Second Card */}
        <Card className="text-center shadow-md p-3 max-w-xs">
          <div className="flex justify-center mb-1">
            <FaRegCheckCircle className="text-4xl text-sky-500 transform transition hover:scale-150" />
          </div>
          <Link to='/cek-progress'>
            <h2 className="text-lg font-semibold transform transition hover:scale-110">CEK PROGRESS BUKU</h2>
          </Link>
        </Card>

        {/* Third Card */}
        <Card className="text-center shadow-md p-3 max-w-xs">
          <div className="flex justify-center mb-1">
            <FaWallet className="text-4xl text-sky-500 transform transition hover:scale-150" />
          </div>
          <h2 className="text-lg font-semibold transform transition hover:scale-110">CEK ROYALTI BUKU</h2>
        </Card>

        {/* Fourth Card */}
        <Card className="text-center shadow-md p-3 max-w-xs">
          <div className="flex justify-center mb-1">
            <FaStore className="text-4xl text-sky-500 transform transition hover:scale-150" />
          </div>
          <h2 className="text-lg font-semibold transform transition hover:scale-110">TOKO ONLINE BUKU</h2>
        </Card>
      </div>
    </div>
  );
}

export default CardPoint;
