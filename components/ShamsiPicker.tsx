"use client"
import { DatePicker } from "zaman";

export default function ShamsiPicker() {
  return (
    <DatePicker onChange={(e) => console.log(e.value)} />
  )
}
