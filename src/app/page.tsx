/*-------------------------------
The MIT License (MIT)

Copyright (c) 2024 Takumi Asada.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
-------------------------------*/

"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import Rosconnection from './components/Rosconnection';
import CameraData from "./components/Cameradata";

export default function Home() {
  const [ros, setRos] = useState<null>(null);
  const [input, setInput] = useState<string>('')

  // Hono API
  useEffect(() => {
  const fetchData = async () => {
      const res = await fetch("/api/ros?q=${input}")
    }
  fetchData()
  }, [input])

  return (
    <main className="flex flex-col justify-center items-center min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">ROS Connection Example</h1>
      <Rosconnection rosUrl="ws://localhost:9090" rosDomainId="89" setRos={setRos} />
      {ros &&
        <div className="flex justify-center items-center">
          <CameraData ros={ros} />
        </div>
      }
      <hr className="my-2"/>
      <div className="flex items-center space-x-4">
        <Image
          src="/qt_ros_logo.png"
          alt="Top Image"
          height={50}
          width={50}
        />
        <h2 className="text-xl　flex items-center">Connection: <span id="status" className="font-bold">N/A</span></h2>
      </div>
    </main>

  );
}