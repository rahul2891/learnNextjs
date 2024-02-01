"use client"

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css";
import { notFound } from 'next/navigation';
import useSWR from 'swr';

const Dashboard = () => {
  // const [data, setData] =  useState([]);
  // const [err, setErr] = useState(false);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, 
  //     {cache: "no-store",})
     
  //     if (!res.ok) {
  //       return notFound()
  //     }
  //     const data = await res.json();
  //      setData(data);
  //      setLoading(false);
  //   };
  //   getData();
  // }, [])

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  console.log("data", data)

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard