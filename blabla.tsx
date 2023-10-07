// if (!isAdmin) {
//   setToggle(true);
//   return;
// }
// if (typeSubmit === "Update") {
//   axios
//     .put("/api/product/", {
//       id: product?.id,
//       urlImage: data.urlImage,
//       title: data.title,
//       desc: data.desc,
//       link: data.link,
//       type: data.type,
//       animes: [
//         {
//           type: data.typeAnime,
//         },
//       ],
//     })
//     .then((res) => {
//       router.push("/products");
//     })
//     .catch((err) => console.log(err));
//   return;
// }
// axios
//   .post("/api/product/", {
//     urlImage: "/images/an1.png",
//     title: "Demon Slayer: Kimetsu no Yaiba",
//     desc: "Mitsuri Kanroji 1/8 Scale Figure",
//     link: "https://mashleanime.com/",
//     type: "ANIME",
//     animes: [
//       {
//         type: "TV",
//       },
//     ],
//   })
//   .then((res) => {
//     toast({
//       description: "Created Success",
//     });
//   })
//   .catch((err) => console.log(err));
