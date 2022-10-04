import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import comments from '../../components/uncommon/03 Comments'

export default function Home() {
    return (
      <>
      <comments />
      </>
    )
}
