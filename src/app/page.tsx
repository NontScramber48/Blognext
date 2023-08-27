import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

const Business: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      {/* ... your other content ... */}
      <div className="grid grid-cols-3 gap-4 my-4">
        <div className="col-span-1">
          {/* Empty column */}
        </div>
        <div className="col-span-1">
          <h1 className="text-3xl text-center">ประเภทธุรกิจ</h1>
          <h1 className="text-xl text-center">Type of business</h1>
          <div>
      <h1>Welcome to My Next.js App</h1>
      <Link href="/about" passHref>bi
       
      </Link>
    </div>     
        </div>
        <div className="col-span-1">
          {/* Empty column */}
        </div>
      </div>
      <div className=' mx-12'><div className="grid grid-cols-3 gap-4 my-4">
          <div className="col-span-1 ... ">
            <h1 className="text-xl">Business-to-Business (B2B)</h1>
            <p>
              ธุรกิจประเภทนี้เน้นการขายสินค้าหรือบริการระหว่างธุรกิจหนึ่งกับอีกธุรกิจหนึ่ง
              ไม่ว่าจะเป็นการขายวัตถุดิบ อุปกรณ์ หรือบริการเฉพาะทาง เช่น
              การขายซอฟต์แวร์จัดการคลังสินค้าสำหรับบริษัทขนส่ง
            </p>
          </div>
          <div className="..."></div>
        </div>
        <div className="grid grid-cols-3 gap-4 my-4">
          <div className="col-span-2 ... "></div>
          <div className="...">
            <h1 className="text-xl">business-to-Customer (B2C)</h1>{" "}
            <p>
              ประเภทนี้คือการที่ธุรกิจขายสินค้าหรือบริการโดยตรงไปยังผู้บริโภค
              ตัวอย่างเช่น ร้านขายเสื้อผ้า, ร้านอาหาร,
              หรือเว็บไซต์การค้าออนไลน์ที่ขายสินค้าหรือบริการให้กับลูกค้าทั่วไป
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 my-4">
          <div className="col-span-1 ... ">
            <h1 className="text-xl">
              Business-to-Business-to-Customer (B2B2C)
            </h1>{" "}
            <p>
              ธุรกิจประเภทนี้เป็นการผสมผสานระหว่าง B2B และ B2C
              ธุรกิจประเภทนี้ทำการขายสินค้าหรือบริการให้กับธุรกิจอื่น ๆ
              แล้วธุรกิจนั้นจะนำไปขายต่อให้กับผู้บริโภค เช่น
              การที่บริษัทผลิตสินค้าแล้วขายให้กับตัวแทนจำหน่ายและตัวแทนจำหน่ายนั้นนำสินค้ามาขายต่อให้กับผู้บริโภค
            </p>
          </div>
          <div className="..."></div>
        </div>
        <div className="grid grid-cols-3 gap-4 my-4">
          <div className="col-span-2 ... "></div>
          <div className="...">
            <h1 className="text-xl">Direct to Consumer (D2C):</h1>{" "}
            <p>
              ธุรกิจประเภทนี้เป็นการที่ผู้ผลิตสินค้าหรือบริการขายโดยตรงไปยังผู้บริโภคโดยไม่ผ่านตัวแทนจำหน่ายหรือผู้จัดจำหน่าย
              เช่น แบรนด์รองเท้าที่ขายผ่านเว็บไซต์ของตนเอง
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 my-4">
          <div className="col-span-1 ... ">
            <h1 className="text-xl">Manufacturing to Consumer (M2C)</h1>{" "}
            <p>
              ประเภทนี้คล้ายกับ D2C
              แต่เน้นการยืนยันว่าสินค้าได้รับการผลิตและขายโดยตรงจากโรงงานผลิต
              เป้าหมายของ M2C คือการลดต้นทุน ลดขั้นตอนการจำหน่าย
              และให้ผู้บริโภคได้รับสินค้าในราคาที่ถูกกว่าและคุณภาพที่ดี
            </p>
          </div>
          <div className="..."></div>
        </div></div>
      {/* ... your other content ... */}
    </div>
  );
};

interface LinkButtonProps {
  to: string;
  label: string;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ to, label, className }) => {
  return (
    <Link href={to}>
      <div className={`bg-blue-500 text-white py-2 px-4 rounded ${className}`}>
        {label}
      </div>
    </Link>
  );
};

export default Business;
