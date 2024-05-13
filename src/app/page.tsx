import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import  Link  from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/fma">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Force Calculator</CardTitle>
            <CardDescription>Calculate force/mass/acceleration</CardDescription>
          </CardHeader>
        </Card>
      </Link>
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Inelastic Collision Calculator</CardTitle>
          <CardDescription>Calculate the momentum or velocity or mass of objects, before or after a collision</CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Elastic Collision Calculator</CardTitle>
          <CardDescription>Calculate force/mass/acceleration</CardDescription>
        </CardHeader>
      </Card>
    </main>
  );
}
