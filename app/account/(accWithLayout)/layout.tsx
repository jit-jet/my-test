import SliderAcc from "@/components/SliderAcc";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-4 bg-gray-200 h-screen ">
        <SliderAcc />
        <div className="col-span-3 m-6  bg-white rounded-md h-5/6">{children}</div>
    </div>
  );
}
