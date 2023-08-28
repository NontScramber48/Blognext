import Link from "next/link";
import Image, { ImageLoader } from "next/legacy/image";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8  block 2xl:hidden sm:hidden md:hidden 2xl:hidden">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ประเภทธุรกิจ
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-800">
            Type of Business
          </p>
          <Link href="#vission" passHref>
            Vission
          </Link>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8  border-t border-gray-200 pt-10  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="group relative mt-12">
              <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-800">
                Business to Business
              </h3>
              <div className="flex items-center gap-x-4 text-xs">
                <h1 className="text-gray-500"> (B2B)</h1>
              </div>
              <p className="mt-5  text-md leading-6 text-gray-800">
                ธุรกิจประเภทนี้เน้นการขายสินค้าหรือบริการระหว่างธุรกิจหนึ่งกับอีกธุรกิจหนึ่ง
                ไม่ว่าจะเป็นการขายวัตถุดิบ อุปกรณ์ หรือบริการเฉพาะทาง เช่น
                การขายซอฟต์แวร์จัดการคลังสินค้าสำหรับบริษัทขนส่ง
              </p>
            </div>
          </article>
          <article className="flex max-w-xl flex-col items-start justify-between"></article>
          <article className="flex max-w-xl flex-col items-start justify-between ">
            {" "}
            <Image
              className="absolute inset-0 object-cover shadow-xl mx-auto"
              src=""
              alt=""
              width={300}
              height={400}
            />
          </article>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8  border-t border-gray-200 pt-10  sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="group relative mt-12">
              <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-800">
                Business to Customer
              </h3>{" "}
              <div className="flex items-center gap-x-4 text-xs">
                <h1 className="text-gray-500"> (B2C)</h1>
              </div>
              <p className="mt-5  text-md leading-6 text-gray-800">
                ประเภทนี้คือการที่ธุรกิจขายสินค้าหรือบริการโดยตรงไปยังผู้บริโภค
                ตัวอย่างเช่น ร้านขายเสื้อผ้า ร้านอาหาร
                หรือเว็บไซต์การค้าออนไลน์ที่ขายสินค้าหรือบริการให้กับลูกค้าทั่วไป
              </p>
            </div>
          </article>
          <article className="flex max-w-xl flex-col items-start justify-between"></article>
          <article className="flex max-w-xl flex-col items-start justify-between ">
            {" "}
            <Image
              className="absolute inset-0 object-cover shadow-xl mx-auto"
              src=""
              alt=""
              width={300}
              height={400}
            />
          </article>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8  border-t border-gray-200 pt-10  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="group relative">
              <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-800">
                Business to Business to Customer
              </h3>
              <div className="flex items-center gap-x-4 text-xs">
                <h1 className="text-gray-500">(B2B2C)</h1>
              </div>
              <p className="mt-5  text-md leading-6 text-gray-800">
                ธุรกิจประเภทนี้เป็นการผสมผสานระหว่าง B2B และ B2C
                ธุรกิจประเภทนี้ทำการขายสินค้าหรือบริการให้กับธุรกิจอื่น ๆ
                แล้วธุรกิจนั้นจะนำไปขายต่อให้กับผู้บริโภค เช่น
                การที่บริษัทผลิตสินค้าแล้วขายให้กับตัวแทนจำหน่ายและตัวแทนจำหน่ายนั้นนำสินค้ามาขายต่อให้กับผู้บริโภค
              </p>
            </div>
          </article>
          <article className="flex max-w-xl flex-col items-start justify-between"></article>
          <article className="flex max-w-xl flex-col items-start justify-between">
            {" "}
            <Image
              className="absolute inset-0 object-cover shadow-xl mx-auto"
              src=""
              alt=""
              width={300}
              height={400}
            />
          </article>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8  border-t border-gray-200 pt-10  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-800">
                <p>
                  <span className="absolute inset-0" />
                  Direct to Consumer (D2C)
                </p>
              </h3>{" "}
              <div className="flex items-center gap-x-4 text-xs">
                <h1 className="text-gray-500"> (D2C)</h1>
              </div>
              <p className="mt-5  text-md leading-6 text-gray-800">
                ธุรกิจประเภทนี้เป็นการที่ผู้ผลิตสินค้าหรือบริการขายโดยตรงไปยังผู้บริโภคโดยไม่ผ่านตัวแทนจำหน่ายหรือผู้จัดจำหน่าย
                เช่น แบรนด์รองเท้าที่ขายผ่านเว็บไซต์ของตนเอง
              </p>
            </div>
          </article>
          <article className="flex max-w-xl flex-col items-start justify-between"></article>
          <article className="flex max-w-xl flex-col items-start justify-between ">
            {" "}
            <Image
              className="absolute inset-0 object-cover shadow-xl mx-auto"
              src=""
              alt=""
              width={300}
              height={400}
            />
          </article>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8  border-t border-gray-200 pt-10  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-800">
                <p>
                  <span className="absolute inset-0" />
                  Manufacturing to Consumer (M2C)
                </p>
              </h3>{" "}
              <div className="flex items-center gap-x-4 text-xs">
                <h1 className="text-gray-500">(M2C)</h1>
              </div>
              <p className="mt-5  text-md leading-6 text-gray-800">
                ประเภทนี้คล้ายกับ D2C
                แต่เน้นการยืนยันว่าสินค้าได้รับการผลิตและขายโดยตรงจากโรงงานผลิต
                เป้าหมายของ M2C คือการลดต้นทุน ลดขั้นตอนการจำหน่าย
                และให้ผู้บริโภคได้รับสินค้าในราคาที่ถูกกว่าและคุณภาพที่ดี
              </p>
            </div>
          </article>
          <article className="flex max-w-xl flex-col items-start justify-between"></article>
          <article className="flex max-w-xl flex-col items-start justify-between">
            {" "}
            <Image
              className="absolute inset-0 object-cover shadow-xl mx-auto"
              src=""
              alt=""
              width={300}
              height={400}
            />
          </article>
        </div>
      </div>
      {/* mobile */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 hidden xl:block sm:block md:block 2xl:block">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ประเภทธุรกิจ
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-800">
            Type of Business
          </p>
          <Link href="#vission" passHref>
            Vission
          </Link>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8  border-t border-gray-200 pt-10  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="group relative mt-12">
              <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-800">
                Business to Business
              </h3>
              <div className="flex items-center gap-x-4 text-xs">
                <h1 className="text-gray-500"> (B2B)</h1>
              </div>
              <p className="mt-5  text-md leading-6 text-gray-800">
                ธุรกิจประเภทนี้เน้นการขายสินค้าหรือบริการระหว่างธุรกิจหนึ่งกับอีกธุรกิจหนึ่ง
                ไม่ว่าจะเป็นการขายวัตถุดิบ อุปกรณ์ หรือบริการเฉพาะทาง เช่น
                การขายซอฟต์แวร์จัดการคลังสินค้าสำหรับบริษัทขนส่ง
              </p>
            </div>
          </article>
          <article className="flex max-w-xl flex-col items-start justify-between"></article>
          <article className="flex max-w-xl flex-col items-start justify-between ">
            {" "}
            <Image
              className="absolute inset-0 object-cover shadow-xl mx-auto"
              src=""
              alt=""
              width={300}
              height={400}
            />
          </article>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8  border-t border-gray-200 pt-10  sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between">
            {" "}
            <Image
              className="absolute inset-0 object-cover shadow-xl mx-auto"
              src=""
              alt=""
              width={300}
              height={400}
            />
          </article>
          <article className="flex max-w-xl flex-col items-start justify-between"></article>{" "}
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="group relative mt-12">
              <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-800">
                Business to Customer
              </h3>{" "}
              <div className="flex items-center gap-x-4 text-xs">
                <h1 className="text-gray-500"> (B2C)</h1>
              </div>
              <p className="mt-5  text-md leading-6 text-gray-800">
                ประเภทนี้คือการที่ธุรกิจขายสินค้าหรือบริการโดยตรงไปยังผู้บริโภค
                ตัวอย่างเช่น ร้านขายเสื้อผ้า ร้านอาหาร
                หรือเว็บไซต์การค้าออนไลน์ที่ขายสินค้าหรือบริการให้กับลูกค้าทั่วไป
              </p>
            </div>
          </article>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8  border-t border-gray-200 pt-10  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="group relative">
              <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-800">
                Business to Business to Customer
              </h3>
              <div className="flex items-center gap-x-4 text-xs">
                <h1 className="text-gray-500">(B2B2C)</h1>
              </div>
              <p className="mt-5  text-md leading-6 text-gray-800">
                ธุรกิจประเภทนี้เป็นการผสมผสานระหว่าง B2B และ B2C
                ธุรกิจประเภทนี้ทำการขายสินค้าหรือบริการให้กับธุรกิจอื่น ๆ
                แล้วธุรกิจนั้นจะนำไปขายต่อให้กับผู้บริโภค เช่น
                การที่บริษัทผลิตสินค้าแล้วขายให้กับตัวแทนจำหน่ายและตัวแทนจำหน่ายนั้นนำสินค้ามาขายต่อให้กับผู้บริโภค
              </p>
            </div>
          </article>
          <article className="flex max-w-xl flex-col items-start justify-between"></article>
          <article className="flex max-w-xl flex-col items-start justify-between">
            {" "}
            <Image
              className="absolute inset-0 object-cover shadow-xl mx-auto"
              src=""
              alt=""
              width={300}
              height={400}
            />
          </article>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8  border-t border-gray-200 pt-10  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between">
            {" "}
            <Image
              className="absolute inset-0 object-cover shadow-xl mx-auto"
              src=""
              alt=""
              width={300}
              height={400}
            />
          </article>
          <article className="flex max-w-xl flex-col items-start justify-between">
            {" "}
            <Image
              className="absolute inset-0 object-cover shadow-xl mx-auto"
              src=""
              alt=""
              width={300}
              height={400}
            />
          </article>{" "}
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-800">
                <p>
                  <span className="absolute inset-0" />
                  Direct to Consumer (D2C)
                </p>
              </h3>{" "}
              <div className="flex items-center gap-x-4 text-xs">
                <h1 className="text-gray-500"> (D2C)</h1>
              </div>
              <p className="mt-5  text-md leading-6 text-gray-800">
                ธุรกิจประเภทนี้เป็นการที่ผู้ผลิตสินค้าหรือบริการขายโดยตรงไปยังผู้บริโภคโดยไม่ผ่านตัวแทนจำหน่ายหรือผู้จัดจำหน่าย
                เช่น แบรนด์รองเท้าที่ขายผ่านเว็บไซต์ของตนเอง
              </p>
            </div>
          </article>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8  border-t border-gray-200 pt-10  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-800">
                <p>
                  <span className="absolute inset-0" />
                  Manufacturing to Consumer (M2C)
                </p>
              </h3>{" "}
              <div className="flex items-center gap-x-4 text-xs">
                <h1 className="text-gray-500">(M2C)</h1>
              </div>
              <p className="mt-5  text-md leading-6 text-gray-800">
                ประเภทนี้คล้ายกับ D2C
                แต่เน้นการยืนยันว่าสินค้าได้รับการผลิตและขายโดยตรงจากโรงงานผลิต
                เป้าหมายของ M2C คือการลดต้นทุน ลดขั้นตอนการจำหน่าย
                และให้ผู้บริโภคได้รับสินค้าในราคาที่ถูกกว่าและคุณภาพที่ดี
              </p>
            </div>
          </article>
          <article className="flex max-w-xl flex-col items-start justify-between"></article>
          <article className="flex max-w-xl flex-col items-start justify-between">
            {" "}
            <Image
              className="absolute inset-0 object-cover shadow-xl mx-auto"
              src=""
              alt=""
              width={300}
              height={400}
            />
          </article>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6  lg:px-8 mb-64">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl mt-64 font-bold tracking-tight text-gray-900 sm:text-4xl">
            วิสัยทัศน์
          </h2>
        </div>{" "}
        <div id="vission">
          <h2 className="text-xl mt-16 mb-16   text-gray-700 sm:text-xl  indent-28">
            เราเชื่อว่าการจัดการธุรกิจที่มีประสิทธิภาพนั้นเริ่มต้นจากการใช้เทคโนโลยีที่ทันสมัยและเข้าถึงข้อมูลได้รวดเร็ว
            ผลิตภัณฑ์ซอฟต์แวร์ของเราถูกออกแบบมาเพื่อทำให้ธุรกิจของคุณเข้าถึงข้อมูลอย่างรวดเร็ว
            วิเคราะห์ข้อมูลได้อย่างลึกซึ้ง
            สนับสนุนในการทำงานของพนักงานให้ง่ายและมีประสิทธิภาพยิ่งขึ้นผ่านระบบที่เป็นมิตรและมีประสิทธิภาพ
            และเราเปิดโอกาสให้ผู้บริโภคได้รับสินค้าที่มีคุณภาพ ราคาที่เหมาะสม
            และสามารถเข้าถึงได้ทั่วโลก
            พร้อมทั้งส่งเสริมการเติบโตของผู้ผลิตให้เข้าถึงผู้บริโภคอย่างมีประสิทธิภาพ
            ด้วยเทคโนโลยีที่ทันสมัย
            และทำให้ธุรกิจทั่วโลกสามารถแข่งขันได้ในยุคดิจิทัล
          </h2>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10  lg:mx-0 lg:max-w-none lg:grid-cols-1">
          <div className="group relative">
            <div className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <div className="mb-12">
                <span className="absolute inset-0 " />
                สิ่งที่เรามุ่งเน้นมีดังนี้
              </div>
            </div>

            <p className="mt-5  text-lg leading-6 text-gray-900">
              1.เปิดโอกาสให้ผู้บริโภคได้รับสินค้าที่มีคุณภาพ ราคาเหมาะสม
              และสามารถเข้าถึงได้ทั่วโลก:
              เน้นให้ผู้บริโภคสามารถซื้อสินค้าจากทั่วโลกได้โดยง่าย
              ในราคาที่เหมาะสม และมีคุณภาพ นั่นหมายความว่าโปรแกรม POS
              ของคุณจะต้องช่วยสนับสนุนการจัดการสินค้า การตั้งราคา
              และการจัดส่งที่มีประสิทธิภาพ
            </p>
            <p className="mt-5  text-lg leading-6 text-gray-900">
              2.ส่งเสริมการเติบโตของผู้ผลิตให้เข้าถึงผู้บริโภคอย่างมีประสิทธิภาพ:
              ต้องทำให้ผู้ผลิตสามารถเข้าถึงตลาดที่กว้างขวางขึ้น
              และส่งเสริมการจัดจำหน่ายสินค้าอย่างมีประสิทธิภาพ เช่น
              การจัดการสต็อก การจัดการการส่งสินค้า และการจัดการการสั่งซื้อ
            </p>
            <p className="mt-5  text-lg leading-6 text-gray-900">
              3.ด้วยเทคโนโลยีที่ทันสมัย: ในยุคดิจิทัลนี้
              เทคโนโลยีทำให้ทุกอย่างเป็นไปได้
              เราจึงต้องใช้เทคโนโลยีทันสมัยที่มีประสิทธิภาพ เช่น การใช้งาน cloud
              computing การวิเคราะห์ข้อมูลขนาดใหญ่ และการจัดการฐานข้อมูลแบบ
              real-time
            </p>
            <p className="mt-5  text-lg leading-6 text-gray-900">
              4.ทำให้ธุรกิจทั่วโลกสามารถแข่งขันได้ในยุคดิจิทัล:
              เราต้องการสร้างผลิตภัณฑ์ที่ช่วยให้ธุรกิจทั่วโลกสามารถแข่งขันในตลาดที่เปลี่ยนแปลงอย่างรวดเร็วนี้
              นั่นหมายความว่าโปรแกรม POS
              ของเราต้องสามารถปรับตัวได้ตามการเปลี่ยนแปลงของตลาด
              ปรับปรุงหรือปรับเปลี่ยนได้ง่าย
              และต้องทำให้ธุรกิจของลูกค้าของเราสามารถดำเนินการได้อย่างมีประสิทธิภาพและไม่มีปัญหาใด
              ๆ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
