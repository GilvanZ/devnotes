
const wallpaper = "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVza3RvcCUyMHdhbGxwYXBlcnN8ZW58MHx8MHx8fDA%3D"
export default function RootLayout(){
  return (
    <section className="p-1 overflow-x-hidden">
      {/*Nao deixa nada sair pela lateral*/}
      <div className="overflow-x-hidden">
        <div className="[perspective:1000px] p-1 gap-1 flex flex-wrap overflow-hidden justify-center h-66 min-[1060]:h-33">
          <div className=" [transform:rotateY(0deg)] hover:[transform:rotateY(360deg)] transition-transform duration-900 w-32 border  border-b-red-800 gap-2 h-32 bg-cyan-800">rotate</div>
          <div className=" gap-2 w-32 h-32 bg-cyan-800 border border-b-red-800"></div>
          <div className=" gap-2 w-32 h-32 bg-cyan-800 border border-b-red-800"></div>
          <div className=" gap-2 w-32 h-32 bg-cyan-800 border border-b-red-800"></div>
          <div className=" gap-2 w-32 h-32 bg-cyan-800 border border-b-red-800"></div>
          <div className=" gap-2 w-32 h-32 bg-cyan-800 border border-b-red-800"></div>
          <div className=" gap-2 w-32 h-32 bg-cyan-800 border border-b-red-800"></div>
          <div className=" gap-2 w-32 h-32 bg-cyan-800 border border-b-red-800"></div>
        </div>
        
        <h1 className="text-4xl font-medium ">Lorem Ipsum</h1>
        <h2>What is Lorem Ipsum?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <h2>Why do we use it?</h2>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </section>
  );
}
