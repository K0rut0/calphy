import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import  Link  from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-y-10 p-5 bg-lightgreenish min-h-[95vh]">
      <Link href="/fma">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Force Calculator</CardTitle>
            <CardDescription>Calculate force/mass/acceleration</CardDescription>
          </CardHeader>
        </Card>
      </Link>
      <Link href="/inelastic">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Inelastic Collision Calculator</CardTitle>
            <CardDescription>Calculate the momentum or velocity or mass of objects, before or after an inelastic collision</CardDescription>
          </CardHeader>
        </Card>
      </Link>
      <Link href="/elastic">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Elastic Collision Calculator</CardTitle>
            <CardDescription>Calculate momentum or velocity or mass of objects, before or after an elastic collision</CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </main>
  );
}
